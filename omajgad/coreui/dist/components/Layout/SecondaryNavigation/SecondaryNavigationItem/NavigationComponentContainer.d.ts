import { FC, MutableRefObject, ReactNode } from 'react';
export interface NavigationComponentContainerProps {
    children?: ReactNode;
    parentRef?: MutableRefObject<HTMLDivElement | null>;
}
export declare const NavigationComponentContainer: FC<NavigationComponentContainerProps>;
