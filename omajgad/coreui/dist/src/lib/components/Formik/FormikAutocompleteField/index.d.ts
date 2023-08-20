import { FieldProps } from 'formik';
import { ReactNode } from 'react';
import { AutocompleteOptionBase } from 'lib/components/Form';
import { AutocompleteProps } from 'lib/components/Form/Autocomplete';
export interface FormikAutocompleteFieldProps<T extends AutocompleteOptionBase, U> extends FieldProps {
    label: string;
    value: string;
    disabled?: boolean;
    autocompleteProps: Omit<AutocompleteProps<T, U>, 'onSelect' | 'disabled'>;
}
export declare function FormikAutocompleteField<T extends AutocompleteOptionBase, U>({ label, value, field, form, disabled, autocompleteProps, }: FormikAutocompleteFieldProps<T, U>): ReactNode;
