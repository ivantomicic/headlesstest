import { FC } from 'react';
import { DateTimePickerProps as MuiDateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
export interface DateTimePickerProps extends MuiDateTimePickerProps<Date, Date> {
    locale: 'de-CH' | 'de-DE' | 'en';
}
export declare const DateTimePicker: FC<DateTimePickerProps>;
