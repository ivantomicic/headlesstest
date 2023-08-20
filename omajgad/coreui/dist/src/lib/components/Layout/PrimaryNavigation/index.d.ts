import { FC, ReactNode } from 'react';
export interface PrimaryNavigationProps {
    active?: number;
    items: {
        href: string;
        content: ReactNode;
    }[];
}
export declare const PrimaryNavigation: FC<PrimaryNavigationProps>;
