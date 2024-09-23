import { ReactElement } from "react";

export interface AsideCardProps {
    title: string;
    icon?: ReactElement | string;
    children?: ReactElement;
}