import { SERVICES_DATA } from "../../data";
import { NeoCard } from "../ui/NeoCard";

export const Services = () => (
  <div className="max-w-6xl mx-auto min-h-full flex flex-col justify-center px-6 py-12 md:py-24">
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-4">
        My <span className="text-cyan-500">Services</span>
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
        High-quality solutions tailored to your needs. From concept to
        deployment.
      </p>
    </div>

    <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:gap-8 pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar">
      {SERVICES_DATA.map((service, index) => (
        <NeoCard
          key={index}
          className="flex-shrink-0 w-[85vw] md:w-auto snap-center flex flex-col gap-4 h-full"
        >
          <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-lg flex items-center justify-center">
            <service.icon size={24} />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {service.title}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {service.description}
          </p>
        </NeoCard>
      ))}
    </div>
  </div>
);
