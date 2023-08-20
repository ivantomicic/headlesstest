import { FC, ReactNode } from 'react';
import { OnFileTooLargeErrorFunction, OnFileTypeInvalidErrorFunction, OnUploadFunction } from 'lib/components/Uploader/UploaderBase/types';
import { UploaderCommonProps } from 'lib/components/Uploader/types';
type DropZoneProps = {
    children?: ReactNode;
    disabled?: boolean;
    onUpload?: OnUploadFunction;
    validateFilesOnDrop: boolean;
    onFileTooLargeError?: OnFileTooLargeErrorFunction;
    onFileTypeInvalidError?: OnFileTypeInvalidErrorFunction;
} & UploaderCommonProps;
export declare const DropZone: FC<DropZoneProps>;
export {};
