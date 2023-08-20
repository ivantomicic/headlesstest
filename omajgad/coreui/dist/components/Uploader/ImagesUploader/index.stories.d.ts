import { Meta, Story } from '@storybook/react';
import { ImagesUploaderProps } from './';
declare const _default: Meta<import("@storybook/react").Args>;
export default _default;
/**
 * here's how to use it:
 * const transformSrc: UploaderTransformImages = images =>
 *   images.map(image => ({
 *     ...image,
 *     url: `https://static.crowdhouse.ch/v2/image/${image.uuid}?w=400&h=300`,
 *   }))
 *
 * see https://crowdhouse.atlassian.net/wiki/spaces/EN/pages/1336573993/How+Documents+Service+resizes+images
 */
export declare const ImagesUploaderExample: Story<ImagesUploaderProps>;
