import { FilledInputProps, FormHelperTextProps, InputLabelProps } from '@mui/material';
import { ComponentProps } from 'react';
import { NumericFormatProps } from 'react-number-format';
import { FormHelperText } from 'lib/components/Form/FormHelperText';
export interface NumberFieldProps extends Omit<NumericFormatProps, 'color' | 'size' | 'type'>, Pick<FilledInputProps, 'error' | 'inputProps' | 'size' | 'type' | 'color'> {
    ref?: FilledInputProps['ref'];
    units?: string;
    decimalsAllowed?: boolean;
    label?: string;
    inputLabelProps?: InputLabelProps;
    helperText?: ComponentProps<typeof FormHelperText>['children'];
    helperTextProps?: FormHelperTextProps;
    noThousandSeparators?: boolean;
    locale?: string;
}
