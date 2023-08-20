import { FC } from 'react';
import { FieldProps } from 'formik';
import { PhoneNumberProps } from 'lib/components/Form/PhoneNumber';
export { countriesMapDE, countriesMapEN } from 'lib/components/Form/PhoneNumber/constants/countries';
export interface FormikPhoneNumberFieldProps extends FieldProps {
    label: string;
    value: string;
    phoneNumberProps?: Partial<PhoneNumberProps>;
}
export declare const FormikPhoneNumberField: FC<FormikPhoneNumberFieldProps>;
