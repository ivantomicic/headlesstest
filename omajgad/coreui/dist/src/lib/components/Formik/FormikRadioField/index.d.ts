import { FC } from 'react';
import { FieldProps } from 'formik';
import { RadioProps } from 'lib/components/Form/Radio';
interface FormikRadioFieldProps extends FieldProps {
    label: string;
    value: string;
    radioProps?: RadioProps;
}
export declare const FormikRadioField: FC<FormikRadioFieldProps>;
export {};
