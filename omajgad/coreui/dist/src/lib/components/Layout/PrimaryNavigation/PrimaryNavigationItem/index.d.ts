import { FC, ReactNode } from 'react';
export declare const usePrimaryNavigationStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "active" | "rootLayout", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react").Css;
    cx: import("tss-react").Cx;
};
export interface PrimaryNavigationItemProps {
    children?: ReactNode;
    active?: boolean;
    href: string;
}
export declare const PrimaryNavigationItem: FC<PrimaryNavigationItemProps>;
