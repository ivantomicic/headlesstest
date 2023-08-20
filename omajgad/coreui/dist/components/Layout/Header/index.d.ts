import { ReactNode } from 'react';
export type HeaderProps = {
    children?: ReactNode;
    showBackOnSmallViewport?: boolean;
    onBackClick?: () => void;
    showClose?: boolean;
    onCloseClick: () => void;
    banner?: {
        bannerClassName?: string;
        items: ReactNode[];
    } | null;
    logoUrl: {
        href: string;
        title: string;
    };
};
export declare const Header: ({ showBackOnSmallViewport, onBackClick, showClose, onCloseClick, banner, logoUrl: { href, title }, children, }: HeaderProps) => JSX.Element;
