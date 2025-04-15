import { Check } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "$3,995",
    features: [
      "One request at a time",
      "Two updates per week",
      "Two calls per month",
      "Unlimited requests",
      "Managed via Slack and Trello",
      "Pause or cancel anytime",
    ],
  },
  {
    name: "Premium",
    price: "$5,995",
    features: [
      "Two requests at a time",
      "Three updates per week",
      "Four calls per month",
      "Unlimited requests",
      "Managed via Slack and Trello",
      "Pause or cancel anytime",
    ],
  },
];

function Card({
  name,
  price,
  features,
}: {
  name: string;
  price: string;
  features: string[];
}) {
  return (
    <div className="flex flex-col gap-4 border border-slate-300 rounded-lg p-4">
      <p className="text-lg font-medium">{name}</p>
      <p>
        <span className="text-3xl">{price}</span> / month
      </p>
      <ul>
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-slate-600">
            <Check size={18} />
            {feature}
          </li>
        ))}
      </ul>
      {/*<div className="flex gap-3">
        <button
          type="button"
          className="flex cursor-pointer hover:bg-slate-100 border border-slate-300 rounded-lg px-6 py-2"
        >
          Get started
        </button>
        <a
          href="https://cal.com/northstardata/intro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="flex cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-6 py-2"
          >
            Book a call
          </button>
        </a>
      </div>*/}
    </div>
  );
}

export default function Pricing() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {plans.map(({ name, price, features }) => (
        <Card key={name} name={name} price={price} features={features} />
      ))}
    </div>
  );
}
