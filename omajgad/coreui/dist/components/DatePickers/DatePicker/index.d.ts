import { FC } from 'react';
import { DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers/DatePicker';
export interface DatePickerProps extends MuiDatePickerProps<Date, Date> {
    locale: 'de-CH' | 'de-DE' | 'en';
}
export declare const DatePicker: FC<DatePickerProps>;
