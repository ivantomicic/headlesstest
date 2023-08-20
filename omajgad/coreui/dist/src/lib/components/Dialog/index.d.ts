import { FC, ReactNode, HTMLAttributes } from 'react';
interface DialogProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    title?: string;
    describer: string;
    isOpen?: boolean;
    onAction?: {
        cb: () => void;
        label: string;
        disabled?: boolean;
        loading?: boolean;
    };
    onCancel?: {
        cb: () => void;
        label: string;
    };
    divider?: boolean;
}
export declare const Dialog: FC<DialogProps>;
export {};
