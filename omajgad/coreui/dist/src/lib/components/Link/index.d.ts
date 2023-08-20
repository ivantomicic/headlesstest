import { FC, ReactNode } from 'react';
import { LinkProps as MuiLinkProps } from '@mui/material';
export interface LinkProps extends Omit<MuiLinkProps, 'variant'> {
    children?: ReactNode;
    variant?: 'default' | 'minimal' | 'grouped';
}
export declare const Link: FC<LinkProps>;
