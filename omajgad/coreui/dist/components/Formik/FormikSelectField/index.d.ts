import { FC } from 'react';
import { FieldProps } from 'formik';
import { SelectProps, FormControlProps, InputLabelProps as MuiInputLabelProps } from '@mui/material';
import { TestableComponentProps } from 'lib/components/types';
import { FormHelperTextProps } from 'lib/components/Form/FormHelperText';
type FormikSelectOption = {
    option: string;
    value: string;
};
export interface FormikSelectFieldProps extends FieldProps {
    label: string;
    value: string;
    options: FormikSelectOption[];
    formControlProps?: FormControlProps;
    selectProps?: SelectProps;
    helperText?: string | JSX.Element;
    formHelperProps?: FormHelperTextProps;
    InputLabelProps: MuiInputLabelProps & TestableComponentProps;
    id?: string;
}
export declare const FormikSelectField: FC<FormikSelectFieldProps>;
export {};
