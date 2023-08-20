import { FC, ReactNode } from 'react';
export interface SingleChoiceStackProps {
    children?: ReactNode;
    horizontal?: boolean;
    displayButtons?: boolean;
    selected?: string;
    onChange: (p: {
        selectedValue: string;
    }) => void;
    className?: string;
    error?: string;
    groupName?: string;
    'data-testid'?: string;
}
export declare const SingleChoiceStack: FC<SingleChoiceStackProps>;
