import { Theme } from '@mui/material/styles';
import { Colors } from '@crowdhouse/design-tokens';
declare module '@mui/material/styles' {
    interface Theme {
        colors: Colors;
    }
    interface ThemeOptions {
        colors: Colors;
    }
}
export declare const getTheme: (themeOverrides?: Partial<Theme> | ((theme: Theme) => Partial<Theme>)) => Theme;
