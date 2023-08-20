import { Meta, Story } from '@storybook/react';
import { FormikProps } from 'formik';
declare const _default: Meta<import("@storybook/react").Args>;
export default _default;
interface FormikExampleSchema {
    password: string;
}
export declare const FormikPasswordFieldExample: Story<FormikProps<FormikExampleSchema>>;
