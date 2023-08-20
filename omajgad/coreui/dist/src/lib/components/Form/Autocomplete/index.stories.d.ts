import { Meta, Story } from '@storybook/react';
import { AutocompleteProps } from './index';
import { AutocompleteOptionBase } from './types';
declare const _default: Meta<import("@storybook/react").Args>;
export default _default;
interface LookupItem extends AutocompleteOptionBase {
    uuid: string;
}
interface LookupDetailItem extends AutocompleteOptionBase {
    uuid: string;
}
export declare const AutocompleteExample: Story<AutocompleteProps<LookupItem, LookupDetailItem> & {
    children: string;
}>;
export declare const AutocompleteInjectedOptionsExample: Story<AutocompleteProps<LookupItem, LookupDetailItem> & {
    children: string;
}>;
