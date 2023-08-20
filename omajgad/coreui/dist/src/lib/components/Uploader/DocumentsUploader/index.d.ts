import { FC } from 'react';
import { UploaderBaseProps } from 'lib/components/Uploader/UploaderBase';
import { OnDeleteFunction } from './types';
export type ListFile = {
    name: string;
    id: string;
    type: string;
    url?: string;
};
export type DocumentsUploaderProps = {
    files: ListFile[];
    onDelete: OnDeleteFunction;
    showImagePreviews?: boolean;
} & UploaderBaseProps;
export declare const DocumentsUploader: FC<DocumentsUploaderProps>;
