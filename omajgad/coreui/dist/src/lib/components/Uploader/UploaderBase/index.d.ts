import { FC, ReactNode } from 'react';
import { UploaderCommonProps } from 'lib/components/Uploader/types';
import { OnFileTooLargeErrorFunction, OnFileTypeInvalidErrorFunction, OnUploadFunction } from './types';
export type UploaderBaseProps = {
    children?: ReactNode;
    messages: {
        errorMessage?: string;
        description?: string | JSX.Element;
        fileUploadLabel: string;
        fileUploadHint: string;
        title?: string;
    };
    disabled?: boolean;
    onUpload?: OnUploadFunction;
    error?: string;
    icon?: JSX.Element;
    validateFilesOnDrop?: boolean;
    onFileTooLargeError?: OnFileTooLargeErrorFunction;
    onFileTypeInvalidError?: OnFileTypeInvalidErrorFunction;
    isUploading?: boolean;
} & UploaderCommonProps;
export declare const UploaderBase: FC<UploaderBaseProps>;
