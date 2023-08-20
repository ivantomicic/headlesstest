import { FC, ReactNode } from 'react';
import { IconButtonProps as MuiIconButtonProps } from '@mui/material';
export interface IconButtonProps extends MuiIconButtonProps {
    children?: ReactNode;
    variant?: 'secondary' | 'tertiary';
    loading?: boolean;
}
export declare const IconButton: FC<IconButtonProps>;
