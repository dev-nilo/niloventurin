import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export type Theme = "light" | "dark";

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export interface NavItem {
    id: string;
    label: string;
    component: ReactNode;
    icon: LucideIcon;
}

export interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    location: string;
    highlights: string[];
}

export interface ProjectItem {
    name: string;
    description: string;
    stack: string[];
    liveUrl: string;
    repoUrl: string;
}

export interface SkillGroup {
    title: string;
    description: string;
}

export interface NeoBaseProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    download?: boolean;
}
