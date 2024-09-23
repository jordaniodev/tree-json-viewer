import { ReactElement } from "react";

export interface TreeViewerItemProps{
    itemId: string;
    children?: ReactElement[] | ReactElement;
    keyNode?: string;
    value: string;
}   