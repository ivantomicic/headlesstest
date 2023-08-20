import { FC } from 'react';
import { UploaderCommonProps } from 'lib/components/Uploader/types';
import { UploaderServiceProps, UploaderTransformImages } from './types';
export interface ImagesUploaderProps extends UploaderCommonProps {
    messages: {
        errorMessage: string;
        description?: string;
        fileUploadLabel: string;
        fileUploadHint: string;
        title: string;
        mainImageTitle: string;
    };
    services: UploaderServiceProps;
    disabled?: boolean;
    devTools?: boolean;
    mainImage?: boolean;
    icon?: JSX.Element;
    transformSrc?: UploaderTransformImages;
}
export declare const ImagesUploader: FC<ImagesUploaderProps>;
