import { FC } from 'react';
import { UseUploaderContext } from 'lib/components/Uploader/ImagesUploader/types';
export interface DroppedFileInterface extends UseUploaderContext {
    uuid: string;
    index: number;
    isMainImage: boolean;
    thumbnailURL: string;
    isPlaceholder?: boolean;
}
export declare const DroppedFile: FC<DroppedFileInterface>;
