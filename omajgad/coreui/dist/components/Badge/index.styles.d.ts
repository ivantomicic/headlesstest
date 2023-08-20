export declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"success" | "info" | "warning" | "error" | "muted" | "label" | "svg" | "icon" | "badge" | "withIcon" | "wrapper" | "primary" | "secondary", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react").Css;
    cx: import("tss-react").Cx;
};
