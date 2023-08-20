import { ComponentProps, FC, ReactNode } from 'react';
import { FormControlLabelProps, FormControlProps, RadioProps as MuiRadioProps } from '@mui/material';
import { FormHelperText, FormHelperTextProps } from 'lib/components/Form/FormHelperText';
import { TestableComponentProps } from 'lib/components/types';
export interface RadioProps {
    children?: ReactNode;
    onChange?: MuiRadioProps['onChange'];
    error?: ComponentProps<typeof FormHelperText>['children'];
    checked?: boolean;
    disabled?: boolean;
    helperText?: string | JSX.Element;
    name?: string;
    formControlProps?: FormControlProps;
    formControlLabelProps?: Partial<FormControlLabelProps>;
    formHelperProps?: FormHelperTextProps;
    radioProps?: MuiRadioProps & TestableComponentProps;
    value?: string;
    id?: string;
}
export declare const Radio: FC<RadioProps>;
