import { FC } from 'react';
import { OnDeleteFunction } from 'lib/components/Uploader/DocumentsUploader/types';
import { ListFile } from 'lib/components/Uploader/DocumentsUploader';
export interface FilesListItemProps {
    onDelete: OnDeleteFunction;
    disabled?: boolean;
    file: ListFile;
    showImagePreviews?: boolean;
}
export declare const FilesListItem: FC<FilesListItemProps>;
