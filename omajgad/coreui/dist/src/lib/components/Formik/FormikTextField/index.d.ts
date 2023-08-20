import { FC } from 'react';
import { FieldProps } from 'formik';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { TestableComponentProps } from 'lib/components/types';
import { FormHelperTextProps } from 'lib/components/Form';
export interface FormikTextFieldProps extends FieldProps {
    label: MuiTextFieldProps['label'];
    helperText?: string;
    inputProps?: MuiTextFieldProps['inputProps'] & TestableComponentProps;
    InputProps?: MuiTextFieldProps['InputProps'] & TestableComponentProps;
    InputLabelProps?: MuiTextFieldProps['InputLabelProps'] & TestableComponentProps;
    FormHelperTextProps?: FormHelperTextProps;
    id?: string;
}
export declare const FormikTextField: FC<FormikTextFieldProps>;
