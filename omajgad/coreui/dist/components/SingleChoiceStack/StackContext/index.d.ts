import { FC, ReactNode } from 'react';
interface StackContextProps {
    selectedValue?: string;
    displayButtons?: boolean;
    setSelected: (value: string) => void;
    error?: string;
    groupName?: string;
}
declare const Context: import("react").Context<StackContextProps>;
declare const StackProvider: FC<Pick<StackContextProps, 'selectedValue' | 'displayButtons' | 'error' | 'groupName'> & {
    children?: ReactNode;
    onChange?: (p: {
        selectedValue: string;
    }) => void;
}>;
export { Context as StackContext, StackProvider };
