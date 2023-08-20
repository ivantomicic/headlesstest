/// <reference types="react" />
import { Story, Meta } from '@storybook/react';
import { ButtonProps } from '.';
declare const _default: Meta<import("@storybook/react").Args>;
export default _default;
export declare const Primary: Story<ButtonProps>;
export declare const PrimaryAccessible: Story<ButtonProps>;
export declare const Secondary: Story<ButtonProps>;
export declare const Tertiary: Story<ButtonProps>;
export declare const Loading: Story<ButtonProps>;
export declare const MinWidth: {
    (args: ButtonProps): JSX.Element;
    args: {};
};
