import { FC, MutableRefObject, ReactNode } from 'react';
type NavigationComponentProps = Record<string, unknown>;
interface NavigationComponent {
    component: FC<NavigationComponentProps>;
    componentProps: NavigationComponentProps;
}
export type SecondaryNavigationItemProps = {
    children?: ReactNode;
    parentRef?: MutableRefObject<HTMLDivElement | null>;
    active?: boolean;
    navigationComponent?: NavigationComponent | null;
};
export declare const SecondaryNavigationItem: FC<SecondaryNavigationItemProps>;
export {};
