import { ReactNode, RefObject } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { sectionStyleAt } from "../../navigation/scrollSections";

export const ScrollSection = ({
  container,
  sectionRef,
  children,
}: {
  container: RefObject<HTMLElement | null>;
  sectionRef: RefObject<HTMLElement | null>;
  children: ReactNode;
}) => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress: enter } = useScroll({
    container,
    target: sectionRef,
    offset: ["start end", "start start"],
  });
  const { scrollYProgress: exit } = useScroll({
    container,
    target: sectionRef,
    offset: ["end end", "end start"],
  });

  const style = () => sectionStyleAt(enter.get(), exit.get());
  const opacity = useTransform(() => style().opacity);
  const scale = useTransform(() => style().scale);
  const y = useTransform(() => style().y);
  const filter = useTransform(() => `blur(${style().blur}px)`);

  return (
    <section ref={sectionRef} className="grid min-h-full w-full snap-start">
      <motion.div style={reduceMotion ? undefined : { opacity, scale, y, filter }}>
        {children}
      </motion.div>
    </section>
  );
};
