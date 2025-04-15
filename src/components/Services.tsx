import {
  BookText,
  ChartArea,
  ChartColumn,
  Code,
  Database,
  Search,
  Sheet,
  User,
  Waves,
} from "lucide-react";

const services = [
  {
    text: "Web + Product Analytics",
    icon: ChartArea,
  },
  {
    text: "Data Modeling",
    icon: Code,
  },
  {
    text: "Business Intelligence",
    icon: ChartColumn,
  },
  {
    text: "Data Lake + Warehouse",
    icon: Database,
  },
  {
    text: "Data Pipelines",
    icon: Waves,
  },
  {
    text: "Customer Data Platform",
    icon: User,
  },
  {
    text: "Tracking Plans",
    icon: Sheet,
  },
  {
    text: "Data Observability",
    icon: Search,
  },
  {
    text: "Metadata Catalog",
    icon: BookText,
  },
];

export default function Services() {
  return (
    <div className="flex flex-wrap gap-3">
      {services.map((service) => (
        <div
          key={service.text}
          className="flex gap-2 bg-indigo-50 text-indigo-600 rounded-full px-4 py-2"
        >
          <service.icon />
          {service.text}
        </div>
      ))}
    </div>
  );
}
