import { FC } from 'react';
import { FormHelperTextProps as MuiFormHelperTextProps } from '@mui/material';
import { TestableComponentProps } from 'lib/components/types';
import { FormikErrors } from 'formik';
export type FormHelperTextProps = Omit<MuiFormHelperTextProps, 'children'> & TestableComponentProps & {
    children?: string | FormikErrors<any> | string[] | FormikErrors<any>[] | JSX.Element;
    error?: boolean;
};
export declare const errorIconTestId = "error-icon";
export declare const FormHelperText: FC<FormHelperTextProps>;
