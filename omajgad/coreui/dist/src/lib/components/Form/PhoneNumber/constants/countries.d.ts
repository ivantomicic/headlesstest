import { CountryCode } from 'libphonenumber-js';
import { RawCountry } from './types';
export interface CountryDetails {
    title: string;
    isoCode: CountryCode;
    phoneCode: string;
    format?: string;
}
export type CountriesMap = Map<CountryCode, CountryDetails>;
export declare const getMapFromRawCountries: (rawCountries: RawCountry[]) => CountriesMap;
export declare const countriesMapDE: CountriesMap;
export declare const countriesMapEN: CountriesMap;
