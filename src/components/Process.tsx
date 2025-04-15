import { Anvil, Settings2, Wrench } from "lucide-react";

const steps = [
  {
    title: "Strategy",
    content:
      "Develop tailored data strategies to align with your business goals and drive informed decision-making.",
    icon: Settings2,
  },
  {
    title: "Implementation",
    content:
      "Deliver robust data engineering solutions to efficiently manage and process your data at scale.",
    icon: Anvil,
  },
  {
    title: "Maintenance",
    content:
      "Ensure the ongoing performance and reliability of your data systems with proactive monitoring and support.",
    icon: Wrench,
  },
];

export default function Process() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {steps.map((step) => (
        <div
          key={step.title}
          className="bg-slate-50 border border-slate-100 rounded-lg p-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white border border-slate-100 rounded-lg text-3xl text-indigo-600 w-min p-3">
              <step.icon size="28" />
            </div>
            <div className="font-medium">{step.title}</div>
          </div>
          <p>{step.content}</p>
        </div>
      ))}
    </div>
  );
}
