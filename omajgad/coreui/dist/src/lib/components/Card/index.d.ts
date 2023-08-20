import React, { FC, HTMLAttributes, ReactNode } from 'react';
type CardBorderRadiusOptions = 'small' | 'medium';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    contentClassName?: string;
    onClick?: (e: React.MouseEvent) => void;
    media?: JSX.Element;
    noVerticalPadding?: boolean;
    bordered?: boolean;
    /**
     * 'medium' is default value
     */
    borderRadius?: CardBorderRadiusOptions;
}
export declare const Card: FC<CardProps>;
export {};
