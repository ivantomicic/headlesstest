import { FC, ReactNode } from 'react';
export type BadgeStatus = 'error' | 'info' | 'muted' | 'success' | 'warning';
export type BadgeColor = 'error' | 'info' | 'muted' | 'success' | 'warning' | 'primary' | 'secondary';
interface BadgeProps {
    children?: ReactNode;
    status?: BadgeStatus;
    color?: BadgeColor;
    className?: string;
    contentClassName?: string;
    icon?: boolean | JSX.Element;
}
export declare const Badge: FC<BadgeProps>;
export {};
