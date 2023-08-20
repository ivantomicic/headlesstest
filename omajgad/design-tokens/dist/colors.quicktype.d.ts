export interface ColorsQuicktype {
    background: Background;
    text: Text;
    link: Link;
    functional: Functional;
    brand: Brand;
    feature: Feature;
    base: Base;
}
export interface Background {
    app: string;
    surface: string;
}
export interface Base {
    ecstasy: string;
    ecstasy100: string;
    blueLagoon: string;
    blueLagoon100: string;
    blueLagoon700: string;
    blueLagoon800: string;
    black: string;
    grey800: string;
    grey700: string;
    grey600: string;
    grey400: string;
    grey300: string;
    grey250: string;
    grey200: string;
    grey100: string;
    white: string;
    red: string;
    red100: string;
    red400: string;
    red800: string;
    green: string;
    green100: string;
    green400: string;
    green800: string;
    yellow: string;
    yellow100: string;
    yellow400: string;
    yellow800: string;
    deepPurple: string;
    deepPurple100: string;
    deepPurple400: string;
    deepPurple800: string;
    blue: string;
    blue200: string;
    blue800: string;
    pink: string;
    pink100: string;
    pink400: string;
    pink800: string;
}
export interface Brand {
    primary: string;
    primaryLight: string;
    secondary: string;
    secondaryLight: string;
    primaryAccessible: string;
}
export interface Feature {
    bidding: string;
    biddingLight: string;
    mapMatching: string;
    broker: string;
    brokerLight: string;
}
export interface Functional {
    success: string;
    successLight: string;
    successDark: string;
    warning: string;
    warningLight: string;
    warningDark: string;
    error: string;
    errorLight: string;
    errorDark: string;
    info: string;
    infoLight: string;
    infoDark: string;
}
export interface Link {
    default: string;
    hover: string;
    defaultInverse: string;
    hoverInverse: string;
}
export interface Text {
    primary: string;
    secondary: string;
    primaryInverse: string;
    secondaryInverse: string;
}
export declare class Convert {
    static toColorsQuicktype(json: string): ColorsQuicktype;
    static colorsQuicktypeToJson(value: ColorsQuicktype): string;
}
