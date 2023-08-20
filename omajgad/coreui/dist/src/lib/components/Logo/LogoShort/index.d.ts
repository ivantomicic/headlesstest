import { SvgIconProps } from '@mui/material/SvgIcon';
import { FC } from 'react';
import { LogoVariant } from 'lib/components/Logo/logoVariants';
export interface LogoShortProps extends Pick<SvgIconProps, 'className' | 'titleAccess'> {
    variant?: LogoVariant;
}
export declare const LogoShort: FC<LogoShortProps>;
