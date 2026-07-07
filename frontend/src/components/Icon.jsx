import * as Icons from "lucide-react";

// Renders a lucide-react icon by name string, e.g. <Icon name="Film" />
export default function Icon({ name, className = "w-6 h-6", strokeWidth = 1.5 }) {
  const Cmp = Icons[name] || Icons.Circle;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
