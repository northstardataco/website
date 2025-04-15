import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    question: "Why not hire full-time?",
    answer:
      "Hiring a full-time data professional can significantly strain your finances, often costing over $100,000 anually plus benefits. Finding the right talent is another challenge altogether. North Star Data offers a flexible and cost-effective solution, providing you with the expertise of a data professional without the long-term commitment.",
  },
  {
    question: "Is there a limit on requests?",
    answer:
      "Once subscribed, you are able to add as many requests to your queue as you would like. Requests will be delivered one by one.",
  },
  {
    question: "How do you handle larger requests?",
    answer:
      "Larger requests are divided into tasks which are completed one by one.",
  },
  {
    question: "Are there any refunds?",
    answer:
      "Due to the nature of our work, which is custom and tailored to your specific needs, we do not offer refunds.",
  },
];

function Accordian({ question, answer }: { question: string; answer: string }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className="bg-slate-50 border border-slate-100 rounded-lg cursor-pointer p-4"
      onClick={() => setIsActive(!isActive)}
      onKeyDown={() => setIsActive(!isActive)}
    >
      <div className="flex justify-between">
        <div>{question}</div>
        <div>
          {isActive ? (
            <ChevronUp className="text-slate-600" />
          ) : (
            <ChevronDown className="text-slate-600" />
          )}
        </div>
      </div>
      {isActive && <div className="text-slate-600 mt-4">{answer}</div>}
    </div>
  );
}

export default function Questions() {
  return (
    <div className="flex flex-col gap-2">
      {questions.map(({ question, answer }) => (
        <Accordian key={question} question={question} answer={answer} />
      ))}
    </div>
  );
}
