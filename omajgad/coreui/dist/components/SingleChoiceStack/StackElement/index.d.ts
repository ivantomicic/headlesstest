import { FC, ReactElement, HTMLAttributes, SyntheticEvent, ReactNode } from 'react';
export interface StackElementProps extends HTMLAttributes<HTMLDivElement> {
    groupName?: string;
    children?: ReactNode;
    value: string;
    handleChange?: (e: SyntheticEvent) => void;
    className?: string;
    horizontal?: boolean;
    disabled?: boolean;
    details?: ReactElement;
}
export declare const StackElement: FC<StackElementProps>;
