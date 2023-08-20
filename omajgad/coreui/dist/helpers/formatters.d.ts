type DateValue = Date | number | string;
interface formatTimeProps {
    time: DateValue;
    endTime?: DateValue;
    locale?: string;
}
export declare const formatTime: (props: formatTimeProps) => string;
/**
 * Get the thousand separator symbol by the current locale
 *
 * @param locale The locale ("de-CH", "de-DE", "en-GB", etc.)
 * @returns the thousand separator symbol or undefined (example: ".")
 */
export declare const getThousandSeparatorSymbol: (locale?: string) => string | undefined;
/**
 * Get the decimal symbol by the current locale
 *
 * @param locale The locale ("de-CH", "de-DE", "en-GB", etc.)
 * @returns the decimal symbol or undefined (example: ".")
 */
export declare const getDecimalSymbol: (locale?: string) => string | undefined;
/**
 * Formats a currency amount following the Crowdhouse rules.
 *
 * @param amount The amount to format
 * @param currency The currency ("CHF", "EUR", etc.)
 * @param locale The locale ("de-CH", "de-DE", "en-GB", etc.)
 * @param options object with currencyDisplay to display symbol or code as currency (EUR or €)
 * @returns The formatted currency (example: "CHF 1’234.50")
 */
export declare const formatCurrency: (amount: number, currency: string, locale: string, options?: {
    currencyDisplay: 'symbol' | 'code';
} | undefined) => string;
/**
 * Formats a currency amount following the Crowdhouse rules, but without the currency symbol
 *
 * @param amount The amount to format
 * @param locale The locale ("de-CH", "de-DE", "en-GB", etc.)
 * @returns The formatted currency (example: "1’234.50")
 */
export declare const formatSimpleCurrency: (amount: number, locale: string) => string;
export {};
