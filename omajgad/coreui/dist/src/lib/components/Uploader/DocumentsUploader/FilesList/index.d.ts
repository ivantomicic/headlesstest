import { FC } from 'react';
import { ListFile } from 'lib/components/Uploader/DocumentsUploader';
import { OnDeleteFunction } from 'lib/components/Uploader/DocumentsUploader/types';
export type FilesListProps = {
    files: ListFile[];
    onDelete: OnDeleteFunction;
    disabled?: boolean;
    showImagePreviews?: boolean;
};
export declare const FilesList: FC<FilesListProps>;
