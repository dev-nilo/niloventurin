import { ReactNode, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Moon, Sun, Github, Linkedin } from "lucide-react";
import { NavItem } from "../../types";
import { useTheme } from "../../context/ThemeContext";

const DockIcon = ({
  mouseX,
  children,
  onClick,
  isActive,
}: {
  mouseX: MotionValue;
  children: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onClick={onClick}
      className={`
        aspect-square rounded-full flex items-center justify-center 
        cursor-pointer transition-colors duration-200 shrink-0
        ${
          isActive
            ? "bg-cyan-400 text-zinc-900 shadow-[0px_0px_10px_rgba(6,182,212,0.6)]"
            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
        }
        border border-zinc-200 dark:border-zinc-700
      `}
    >
      <motion.div
        style={{ scale: useTransform(width, [40, 80], [0.8, 1.4]) }}
        className="flex items-center justify-center w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export const Dock = ({
  items,
  activeIndex,
  setActiveIndex,
}: {
  items: NavItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) => {
  const mouseX = useMotionValue(Infinity);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[calc(100vw-2rem)]">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-1.5 sm:gap-2 md:gap-3 px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-x-auto no-scrollbar"
      >
        {items.map((item, index) => (
          <DockIcon
            key={item.id}
            mouseX={mouseX}
            onClick={() => setActiveIndex(index)}
            isActive={activeIndex === index}
          >
            <item.icon className="w-5 h-5" />
          </DockIcon>
        ))}

        <div className="w-[1px] h-8 bg-zinc-300 dark:bg-zinc-700 mx-1 self-center shrink-0" />

        <DockIcon mouseX={mouseX} onClick={toggleTheme}>
          {theme === "dark" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </DockIcon>

        <DockIcon
          mouseX={mouseX}
          onClick={() => window.open("https://github.com/dev-nilo", "_blank")}
        >
          <Github className="w-5 h-5" />
        </DockIcon>

        <DockIcon
          mouseX={mouseX}
          onClick={() =>
            window.open("https://www.linkedin.com/in/niloventurin/", "_blank")
          }
        >
          <Linkedin className="w-5 h-5" />
        </DockIcon>
      </motion.div>
    </div>
  );
};
