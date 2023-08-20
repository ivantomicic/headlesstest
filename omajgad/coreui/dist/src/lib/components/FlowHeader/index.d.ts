import { FC, ReactNode, HTMLAttributes } from 'react';
export interface FlowHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    onPrevious?: () => void;
    onNext?: () => void;
    label?: {
        text: string | JSX.Element;
        icon?: JSX.Element;
    };
    className?: string;
    previousButtonProps?: Record<string, string>;
    nextButtonProps?: Record<string, string>;
    progress?: number;
}
export declare const FlowHeader: FC<FlowHeaderProps>;
