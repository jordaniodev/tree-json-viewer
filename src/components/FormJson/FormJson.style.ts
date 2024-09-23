import { styled } from "@mui/material";

export const FormJsonField = styled('textarea')(() => ({
    width: '100%', 
    height: 'calc(100% - 48px)', 
    padding: '1rem',
    borderRadius: '4px',
    border: 'none',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',

    '&.error': {
        border: '1px solid red'
    }
}));

export const FormJsonContainer  = styled('form')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '8px',
    width: '100%', 
    height: '100%', 
}));