export interface TypographyQuicktype {
    desktop: Desktop;
    mobile: Desktop;
    default: Default;
}
export interface Default {
    subtitle2: Button;
    caption: Button;
    overline: Button;
    button: Button;
    body1: Body1;
    body2: Body2;
}
export interface Body1 {
    normal: Button;
    strong: Strong;
    link: Link;
}
export interface Link {
    textDecoration: TextDecoration;
    lineHeight: string;
}
export declare enum TextDecoration {
    None = "none",
    Underline = "underline"
}
export interface Button {
    fontSize: number;
    textDecoration: TextDecoration;
    fontFamily: FontFamily;
    fontWeight: number;
    fontStyle: FontSt;
    fontStretch: FontSt;
    letterSpacing: number;
    lineHeight: string;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: TextCase;
}
export declare enum FontFamily {
    SourceSansProSourceSansProArialSansSerif = "\"source-sans-pro\", \"Source Sans Pro\", Arial, sans-serif"
}
export declare enum FontSt {
    Normal = "normal"
}
export declare enum TextCase {
    None = "none",
    Uppercase = "uppercase"
}
export interface Strong {
    fontWeight: number;
    lineHeight: string;
}
export interface Body2 {
    normal: Button;
    strong: Strong;
    link: Button;
}
export interface Desktop {
    h1: Button;
    h2: Button;
    h3: Button;
    h4: Button;
    h5: Button;
    h6: Button;
    subtitle1: Button;
}
export declare class Convert {
    static toTypographyQuicktype(json: string): TypographyQuicktype;
    static typographyQuicktypeToJson(value: TypographyQuicktype): string;
}
