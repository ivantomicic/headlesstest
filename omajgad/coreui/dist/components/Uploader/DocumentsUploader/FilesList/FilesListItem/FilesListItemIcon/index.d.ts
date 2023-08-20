import { FC } from 'react';
import { ListFile } from 'lib/components/Uploader/DocumentsUploader';
export type FileListItemIconProps = {
    file: ListFile;
    showImagePreviews?: boolean;
};
export declare const FilesListItemIcon: FC<FileListItemIconProps>;
