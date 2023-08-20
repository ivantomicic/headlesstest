import React, { FC, HTMLProps, ReactNode } from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';
import { TestableComponentProps } from 'lib/components/types';
type BUTTON_SIZE = 'small' | 'medium' | 'large';
type LABEL_ALIGN = 'label-left-align' | 'label-right-align' | 'label-no-align';
export interface ButtonProps {
    children?: ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'primaryAccessible';
    type?: 'button' | 'submit';
    loading?: boolean;
    /** @deprecated use IconButton from material-ui directly */
    icon?: JSX.Element;
    disabled?: boolean;
    labelAlign?: LABEL_ALIGN;
    size?: BUTTON_SIZE;
    buttonProps?: MuiButtonProps & HTMLProps<HTMLLinkElement> & TestableComponentProps;
}
export declare const Button: FC<ButtonProps>;
export {};
