export declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"step" | "progressBar" | "progressBarFilled" | "headerContent" | "back" | "lock" | "lockLabel", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react").Css;
    cx: import("tss-react").Cx;
};
