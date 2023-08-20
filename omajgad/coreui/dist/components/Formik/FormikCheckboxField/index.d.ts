import { FC } from 'react';
import { FieldProps } from 'formik';
import { CheckboxProps } from 'lib/components/Form/Checkbox';
interface FormikCheckboxFieldProps extends FieldProps {
    label: string;
    value: string;
    checkboxProps?: CheckboxProps;
}
export declare const FormikCheckboxField: FC<FormikCheckboxFieldProps>;
export {};
