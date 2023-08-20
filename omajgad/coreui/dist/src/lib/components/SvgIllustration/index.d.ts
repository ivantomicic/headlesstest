import { ComponentProps } from 'react';
import { SvgIcon, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
interface SvgIllustrationCustomProps {
    foregroundColor: string;
    backgroundColor: string;
    'data-testid'?: string;
}
export type SvgIllustrationProps = ComponentProps<typeof SvgIcon> & SvgIllustrationCustomProps;
export declare const SvgIllustration: OverridableComponent<SvgIconTypeMap<SvgIllustrationCustomProps>>;
export {};
