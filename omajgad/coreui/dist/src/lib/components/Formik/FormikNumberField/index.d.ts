import { FieldProps } from 'formik';
import { FC } from 'react';
import { NumberFieldProps } from 'lib/components/Form/NumberField/types';
export interface FormikNumberFieldProps extends FieldProps, Pick<NumberFieldProps, 'units' | 'type' | 'decimalsAllowed' | 'noThousandSeparators'> {
    label: string;
    helperText?: string;
    placeholder?: string;
    disabled?: boolean;
    valueIsNumericString?: boolean;
    numberProps?: NumberFieldProps;
    id?: string;
}
export declare const FormikNumberField: FC<FormikNumberFieldProps>;
