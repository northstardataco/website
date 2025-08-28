import { Mail, Video } from "lucide-react";

const buttons = [
  {
    text: "Book a call",
    icon: Video,
  },
  {
    text: "Send an email",
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <div className="flex justify-between items-center bg-indigo-600 text-white rounded-lg p-4">
      <p>Unlock your data's potential</p>
      <div className="flex gap-2">
        {buttons.map((button) => (
          <button
            key={button.text}
            type="button"
            className="flex gap-2 bg-indigo-700 hover:bg-indigo-800 rounded-lg px-4 py-2"
          >
            <button.icon strokeWidth={1.5} />
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
}
