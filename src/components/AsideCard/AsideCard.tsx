import { CardContent } from "@mui/material"
import { AsideCardProps } from "./AsideCard.type"
import { SideContentCard, SideContentCardHeader, SideContentCardHeaderCloseIcon, SideContentCardHeaderTitle } from "./AsideCard.style"


export const AsideCard = ({ title, icon, children }: AsideCardProps) => {
    const titleCard = <SideContentCardHeaderTitle>{title}</SideContentCardHeaderTitle>;
    const closeIcon = <SideContentCardHeaderCloseIcon src="/img/icons/close.svg" />;

    return <SideContentCard>
        <SideContentCardHeader
            title={titleCard}
            avatar={icon}
            action={closeIcon}
        />
        <CardContent>
            {children}
        </CardContent>
    </SideContentCard>
}