import { FC } from 'react';
import { LogoFullProps } from './LogoFull';
export interface LogoProps extends Pick<LogoFullProps, 'titleAccess'> {
    className?: string;
    variant?: 'black' | 'white' | 'blue';
    /** @deprecated use titleAccess  */
    accessibilityTitle?: string;
}
export declare const Logo: FC<LogoProps>;
