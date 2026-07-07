"""Backend API tests for YTWC contact endpoints."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL") or open("/app/frontend/.env").read().split("REACT_APP_BACKEND_URL=")[1].splitlines()[0]
BASE_URL = BASE_URL.rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    assert "message" in r.json()


def test_create_contact_valid(client):
    unique = f"TEST_{uuid.uuid4().hex[:8]}"
    payload = {
        "name": f"{unique} User",
        "company": "TEST Co",
        "phone": "+911234567890",
        "email": f"{unique}@example.com",
        "service": "corporate-film-production",
        "message": "Test enquiry message"
    }
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code in (200, 201), r.text
    data = r.json()
    assert "id" in data and data["id"]
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["phone"] == payload["phone"]
    assert data["service"] == payload["service"]

    # Verify persistence via GET list
    r2 = client.get(f"{API}/contact")
    assert r2.status_code == 200
    items = r2.json()
    assert any(x["id"] == data["id"] for x in items), "Newly created contact not found in GET list"


def test_create_contact_invalid_email(client):
    payload = {
        "name": "Bad Email",
        "phone": "12345",
        "email": "not-an-email",
        "message": "test"
    }
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 422


def test_create_contact_missing_fields(client):
    r = client.post(f"{API}/contact", json={"name": "Only name"})
    assert r.status_code == 422


def test_list_contacts(client):
    r = client.get(f"{API}/contact")
    assert r.status_code == 200
    assert isinstance(r.json(), list)
