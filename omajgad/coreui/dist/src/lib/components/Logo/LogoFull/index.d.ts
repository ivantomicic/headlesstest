/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
import { LogoVariant } from 'lib/components/Logo/logoVariants';
export interface LogoFullProps extends Pick<SvgIconProps, 'className' | 'titleAccess'> {
    variant?: LogoVariant;
}
export declare function LogoFull({ variant, ...props }: LogoFullProps): JSX.Element;
