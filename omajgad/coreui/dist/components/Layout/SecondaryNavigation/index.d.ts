import React, { ReactNode } from 'react';
export type SecondaryNavigationProps = {
    children?: ReactNode;
    className?: string;
    wrapperClassName?: string;
};
export declare const SecondaryNavigation: React.ForwardRefExoticComponent<SecondaryNavigationProps & React.RefAttributes<HTMLDivElement>>;
