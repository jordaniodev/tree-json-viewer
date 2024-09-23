import { styled } from "@mui/material";


export const TreeItemIcon  = styled('i')(() => ({
    textTransform: 'uppercase',
    height: '1rem',
    minWidth: '1rem',
    borderRadius: 4,
    fontStyle: 'normal',
    textAlign: 'center',
    border: '1px solid #A0BFFC',
    background: '#E6F2FF',
    color: '#0048C0'
}));

export const TreeItemContent = styled('div')(() => ({
    fontSize: '0.625rem',
    fontWeight: 500,
    lineHeight: '1rem',
    color: '#1F2020',
    margin: 0,
    gap: '4px',
    display: 'flex',

    '&:hover': {
        'span': {
            display: 'flex'
        }
    }
}));

export const TreeItemValue = styled(TreeItemContent)(() => ({
    color: '#737474', // Sobrescrevendo o color aqui
}));

export const TreeItemCopyAction = styled(TreeItemContent)(() => ({
    display: 'inline-flex',
    gap: '0.25rem'
}));


export const TreeItemAction = styled('span')(() => ({
    display: 'none',
    gap: '0.25rem',
    flexWrap: 'nowrap',
    height: '1rem',
    position: 'absolute',
    right: 0,
}));

export const TreeItemActionIcon = styled('img')(() => ({
    width: '16px',
    height: '16px',
    padding: '2px',
    background: '#F9FAFA',
    borderRadius: '4px',
    border: '1px solid #DEDFDF',
    boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.04), 0px 4px 8px 0px rgba(0, 0, 0, 0.04), 0px 6px 24px 0px rgba(0, 0, 0, 0.04)'
}));

export const TreeItemActionLabel = styled('span')(() => ({
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: '1rem',
    textWrap: 'nowrap',
    background: '#F9FAFA',
    padding: '0 4px',
    borderRadius: '4px',
    boxSizing: 'content-box',
    border: '1px solid #DEDFDF',
    boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.04), 0px 4px 8px 0px rgba(0, 0, 0, 0.04), 0px 6px 24px 0px rgba(0, 0, 0, 0.04)',
    display: 'none'
}));