import { FC, ReactElement } from 'react';
import { OnUploadFunction } from 'lib/components/Uploader/UploaderBase/types';
export interface FileDialogProps {
    disabled?: boolean;
    children: (openFileDialog: () => void) => ReactElement;
    onUpload?: OnUploadFunction;
    allowedFileTypes: string[];
}
export declare const FileDialog: FC<FileDialogProps>;
