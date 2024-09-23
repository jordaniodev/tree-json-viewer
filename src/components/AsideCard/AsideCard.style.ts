import { Card, CardHeader, styled } from "@mui/material";

export const SideContentCard = styled(Card)(() => ({
    height: '100%'
}));

export const SideContentCardHeader = styled(CardHeader)(() => ({
    borderBottom: '1px solid #ccc',

    '.MuiCardHeader-avatar': {
        marginRight: '0.5rem'
    },

    '.MuiCardHeader-action': {
        margin: 0
    }
}));

export const SideContentCardHeaderTitle = styled("h2")(() => ({
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: '1.25rem',
    margin: 0
}));

export const SideContentCardHeaderCloseIcon = styled("img")(() => ({
    width: '16px',
    height: '16px',
    cursor: 'pointer'
}));