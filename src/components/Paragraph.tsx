import type React from "react";

export default function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-lg">{children}</p>;
}
