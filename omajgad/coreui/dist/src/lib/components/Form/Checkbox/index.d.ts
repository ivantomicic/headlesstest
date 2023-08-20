import { ComponentProps, FC, ReactNode } from 'react';
import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import { FormControlLabelProps, FormControlProps } from '@mui/material';
import { FormHelperText, FormHelperTextProps } from 'lib/components/Form/FormHelperText';
import { TestableComponentProps } from 'lib/components/types';
export interface CheckboxProps {
    children?: ReactNode;
    name?: string;
    onChange?: MuiCheckboxProps['onChange'];
    error?: ComponentProps<typeof FormHelperText>['children'];
    checked?: boolean;
    disabled?: boolean;
    helperText?: string | JSX.Element;
    formControlProps?: FormControlProps;
    formControlLabelProps?: FormControlLabelProps;
    formHelperProps?: FormHelperTextProps;
    checkboxProps?: MuiCheckboxProps & TestableComponentProps;
}
export declare const Checkbox: FC<CheckboxProps>;
