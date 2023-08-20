import { FC } from 'react';
import { FormikTextFieldProps } from 'lib/components/Formik/FormikTextField';
export declare const testIds: {
    buttonToggleVisibility: string;
    visibilityOff: string;
    visibility: string;
};
export interface FormikPasswordFieldProps extends FormikTextFieldProps {
    a11ylabels?: {
        show: string;
        hide: string;
    };
}
export declare const FormikPasswordField: FC<FormikPasswordFieldProps>;
