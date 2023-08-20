export interface UploaderCommonProps {
    fileSizeLimit: number;
    allowedFileTypes: string[];
}
export declare enum ALLOWED_FILE_TYPE {
    JPEG = "image/jpeg",
    PNG = "image/png",
    PDF = "application/pdf"
}
