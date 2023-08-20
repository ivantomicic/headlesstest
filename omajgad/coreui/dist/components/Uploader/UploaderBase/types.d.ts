export type OnUploadFunction = (files: File[]) => void;
export type OnFileTooLargeErrorFunction = (invalidFiles: File[]) => void;
export type OnFileTypeInvalidErrorFunction = (invalidFiles: File[]) => void;
