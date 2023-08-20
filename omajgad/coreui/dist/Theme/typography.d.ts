import { Theme } from '@mui/material/styles';
import { FontStyleOptions, TypographyStyleOptions, Variant } from '@mui/material/styles/createTypography';
export declare const fontWeightBoldExtra = 900;
export interface TypographyDefinition {
    default: TypographyStyleOptions & FontStyleOptions;
    desktop?: TypographyStyleOptions & FontStyleOptions;
}
export type TypographyRecord = Partial<Record<Variant, TypographyDefinition>>;
export declare const makeCoreTypography: (theme: Theme) => Theme['typography'];
