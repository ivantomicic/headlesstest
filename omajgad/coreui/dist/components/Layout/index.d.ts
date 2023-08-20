import { FC, ReactElement, ReactNode } from 'react';
import { PrimaryNavigationProps } from 'lib/components/Layout/PrimaryNavigation';
import { SecondaryNavigationProps } from 'lib/components/Layout/SecondaryNavigation';
import { HeaderProps } from 'lib/components/Layout/Header';
import { FooterProps } from 'lib/components/Layout/Footer';
import { TestableComponentProps } from 'lib/components/types';
export type LayoutProps = {
    primaryNavigation?: ReactElement<PrimaryNavigationProps>;
    appHeader?: ReactElement;
} & LayoutContainerProps & TestableComponentProps;
type LayoutContainerProps = {
    header?: ReactElement<HeaderProps>;
    secondaryNavigation?: ReactElement<SecondaryNavigationProps>;
    footer: ReactElement<FooterProps>;
    fillBackgroundColor?: boolean;
    title?: ReactElement;
    addContentTopPadding?: boolean;
    addContentBottomPadding?: boolean;
    contentClassname?: string;
    children?: ReactNode;
};
export declare const Layout: FC<LayoutProps>;
export {};
