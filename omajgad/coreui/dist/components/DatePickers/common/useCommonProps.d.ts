/// <reference types="react" />
declare const localeMap: {
    en: Locale;
    'de-CH': Locale;
    'de-DE': Locale;
};
export declare const useCommonProps: (locale: keyof typeof localeMap) => {
    locale: Locale;
    components: {
        OpenPickerIcon: () => JSX.Element;
    };
    desktopModeMediaQuery: string;
};
export {};
