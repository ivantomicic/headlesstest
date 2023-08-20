import { FC, ReactNode } from 'react';
export type ContentProps = {
    children?: ReactNode;
    addTopPadding?: boolean;
    addBottomPadding?: boolean;
    fillBackgroundColor?: boolean;
    className?: string;
};
export declare const Content: FC<ContentProps>;
