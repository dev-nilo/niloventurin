import { Clock, Download } from "lucide-react";
import { SERVICES } from "../../content/services";
import { NeoCard } from "../ui/NeoCard";
import { NeoButton } from "../ui/NeoButton";

export const Services = () => (
  <div className="max-w-6xl mx-auto min-h-full flex flex-col justify-center px-6 py-12 md:py-24">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-6">
      <div>
        <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-4">
          Services
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">{SERVICES.intro}</p>
      </div>
      <NeoButton variant="outline" href={SERVICES.pdfPath} download className="shrink-0">
        <Download size={18} /> Pricing PDF
      </NeoButton>
    </div>

    <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 -mx-6 px-6 no-scrollbar">
      {SERVICES.items.map((service) => (
        <NeoCard
          key={service.name}
          className="shrink-0 w-[80vw] md:w-auto snap-center hover:border-cyan-500 transition-colors flex flex-col"
        >
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            {service.name}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{service.description}</p>
          <ul className="space-y-1.5 text-xs font-medium text-zinc-500 mb-6">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-cyan-500" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-4 border-t-2 border-dashed border-zinc-200 dark:border-zinc-700">
            <p className="text-xl font-extrabold text-zinc-900 dark:text-zinc-100">{service.price}</p>
            <p className="flex items-center gap-1.5 text-xs text-zinc-500 mt-1">
              <Clock size={12} /> {service.timeline}
            </p>
          </div>
        </NeoCard>
      ))}
    </div>

    <p className="text-sm text-zinc-500 pb-20 md:pb-0">
      Optional maintenance:{" "}
      {SERVICES.maintenance.map((plan, index) => (
        <span key={plan.name}>
          {index > 0 && "; "}
          <span className="font-semibold text-zinc-700 dark:text-zinc-300">
            {plan.name} {plan.price}
          </span>{" "}
          ({plan.includes})
        </span>
      ))}
      .
    </p>
  </div>
);
