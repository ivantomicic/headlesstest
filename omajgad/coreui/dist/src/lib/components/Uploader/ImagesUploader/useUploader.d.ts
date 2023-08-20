import { UploaderMachine, UploaderServiceProps, UseUploader } from './types';
interface UseUploaderProps extends UploaderServiceProps, UploaderMachine {
    devTools?: boolean;
}
export declare const useUploader: ({ uploaderService, deleteService, fetchService, reorderService, allowedFileTypes, fileSizeLimit, errorMessage, devTools, mainImage, mainImageTitle, transformSrc, }: UseUploaderProps) => UseUploader;
export {};
