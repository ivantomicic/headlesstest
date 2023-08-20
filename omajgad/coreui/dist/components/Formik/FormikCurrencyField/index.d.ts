import { FieldProps } from 'formik';
import { FC } from 'react';
import { NumberFieldProps } from 'lib/components/Form';
export interface FormikCurrencyFieldProps extends FieldProps {
    label: string;
    helperText?: string;
    placeholder?: string;
    disabled?: boolean;
    decimalsAllowed?: boolean;
    valueIsNumericString?: boolean;
    allowNegative?: boolean;
    numberProps?: NumberFieldProps;
    id?: string;
}
export declare const FormikCurrencyField: FC<FormikCurrencyFieldProps>;
