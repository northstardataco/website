import { Mail, Video } from "lucide-react";

const buttons = [
  {
    text: "Book a call",
    icon: Video,
    href: "https://cal.com/northstardata/intro",
  },
  {
    text: "Send an email",
    icon: Mail,
    href: "mailto:emil@northstardata.co",
  },
];

export default function Contact() {
  return (
    <div className="flex justify-between items-center bg-indigo-600 text-white rounded-lg p-4">
      <p>Unlock your data's potential</p>
      <div className="flex gap-2">
        {buttons.map((button) => (
          <a
            key={button.text}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="flex gap-2 cursor-pointer bg-indigo-700 hover:bg-indigo-800 rounded-lg px-4 py-2"
            >
              <button.icon strokeWidth={1.5} />
              {button.text}
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}
