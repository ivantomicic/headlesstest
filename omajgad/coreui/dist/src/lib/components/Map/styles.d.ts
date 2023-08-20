export declare const useMapStyle: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "skeletonLoading" | "@keyframes loading", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react").Css;
    cx: import("tss-react").Cx;
};
export declare const DefaultGoogleMapStyles: ({
    elementType: string;
    stylers: {
        color: string;
    }[];
    featureType?: undefined;
} | {
    elementType: string;
    stylers: {
        visibility: string;
    }[];
    featureType?: undefined;
} | {
    featureType: string;
    elementType: string;
    stylers: ({
        color: string;
        visibility?: undefined;
        weight?: undefined;
    } | {
        visibility: string;
        color?: undefined;
        weight?: undefined;
    } | {
        weight: number;
        color?: undefined;
        visibility?: undefined;
    })[];
} | {
    featureType: string;
    stylers: {
        visibility: string;
    }[];
    elementType?: undefined;
})[];
