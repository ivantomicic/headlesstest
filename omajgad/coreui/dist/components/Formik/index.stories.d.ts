import { Meta, Story } from '@storybook/react';
import { FormikProps } from 'formik';
declare const _default: Meta<import("@storybook/react").Args>;
export default _default;
interface FormikExampleSchema {
    name: string;
    surname: string;
    gender: string;
    country: string;
    sumCHF: number;
    sumEUR: number;
    accepted: boolean;
    address: string;
    amount: number;
    numberOrProperties: number;
    area: number;
    propertyType: string;
    phone: string;
}
export declare const FormikExample: Story<FormikProps<FormikExampleSchema>>;
