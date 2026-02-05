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

export interface ServiceItem {
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface RepositoryItem {
    name: string;
    description: string;
    language: string;
    stars: number;
    url: string;
}

export interface NeoBaseProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    download?: boolean;
}
