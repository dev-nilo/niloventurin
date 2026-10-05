import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export interface NavItem {
    id: string;
    label: string;
    component: ReactNode;
    icon: LucideIcon;
}
