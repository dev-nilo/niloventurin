import { Download } from "lucide-react";
import { Button } from "../ui/Button";
import { Section, padIndex, stagger } from "../layout/Section";
import { SERVICES } from "../../content/services";

export const Services = () => (
  <Section
    id="services"
    index={4}
    title="Services"
    intro={SERVICES.intro}
    action={
      <Button variant="outline" href={SERVICES.pdfPath} download className="shrink-0">
        <Download size={14} /> Pricing PDF
      </Button>
    }
  >
    <div className="grid border-t border-l border-line md:grid-cols-2 lg:grid-cols-4">
      {SERVICES.items.map((service, index) => (
        <article
          key={service.name}
          style={stagger(index % 4)}
          className="reveal flex flex-col border-r border-b border-line p-6 transition-colors hover:bg-ink/[0.03]"
        >
          <span className="hud-label mb-8 text-muted">{padIndex(index + 1)}</span>
          <h3 className="text-xl font-semibold tracking-tight">{service.name}</h3>
          <p className="mt-2 text-sm text-muted">{service.description}</p>
          <ul className="mt-5 mb-8 space-y-1.5 text-sm">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 size-1 shrink-0 bg-cyan-500" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-auto border-t border-line pt-4">
            <p className="text-xl font-semibold tracking-tight">{service.price}</p>
            <p className="hud-label mt-1 text-muted">{service.timeline}</p>
          </div>
        </article>
      ))}
    </div>

    <p className="reveal mt-8 text-sm text-muted">
      Optional maintenance:{" "}
      {SERVICES.maintenance.map((plan, index) => (
        <span key={plan.name}>
          {index > 0 && "; "}
          <span className="font-semibold text-ink">
            {plan.name} {plan.price}
          </span>{" "}
          ({plan.includes})
        </span>
      ))}
      .
    </p>
  </Section>
);
