import { FC } from 'react';
import { NumberFieldProps } from './types';
export declare const getOnBlurValueChange: (value: string, locale: string) => {
    value: string;
    floatValue: number;
    formattedValue: string;
} | undefined;
/**
 * use onValueChange for onChange events.
 */
export declare const NumberField: FC<NumberFieldProps>;
