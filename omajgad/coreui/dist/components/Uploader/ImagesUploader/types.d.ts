import { BaseActionObject, ResolveTypegenMeta, ServiceMap, State, TypegenDisabled } from 'xstate';
import { UploaderCommonProps } from 'lib/components/Uploader/types';
export { ALLOWED_FILE_TYPE } from 'lib/components/Uploader/types';
export type UploaderReturn = Promise<Partial<UploaderContext>>;
export interface DragItem {
    index: number;
    uuid: string;
}
export interface Image {
    url: string;
    uuid: string;
    placeholder?: boolean;
}
export declare enum DRAG_TYPE {
    IMAGE = "IMAGE"
}
export type UploaderTransformImages = (images: Image[]) => Image[];
export interface UploaderMachine extends UploaderCommonProps {
    errorMessage: string;
    mainImage: boolean;
    mainImageTitle: string;
    transformSrc: UploaderTransformImages;
}
export interface UploaderServiceProps {
    uploaderService: (ctx: UploaderContext) => UploaderReturn;
    deleteService: (ctx: UploaderContext) => UploaderReturn;
    fetchService: () => UploaderReturn;
    reorderService: (ctx: UploaderContext) => UploaderReturn;
}
export interface UploaderContext {
    images: Image[];
    files: File[];
    error: string;
    deleteUuid?: string;
    mainImage: boolean;
    mainImageTitle: string;
}
export interface UploaderRequestError {
    message: string;
}
export declare const DefaultContext: UploaderContext;
export declare enum SERVICE {
    UPLOAD = "UPLOAD",
    DELETE = "DELETE",
    REORDER = "REORDER",
    FETCH = "FETCH"
}
export declare enum STATE {
    ACTIVE = "ACTIVE",
    DISABLED = "DISABLED",
    FETCHING = "FETCHING",
    DELETING = "DELETING",
    UPLOADING = "UPLOADING",
    SORTING = "SORTING"
}
export declare enum TRANSITION {
    DELETE = "DELETE",
    DISABLE = "DISABLE",
    ENABLE = "ENABLE",
    SORT = "SORT",
    FETCH = "FETCH",
    UPLOAD = "UPLOAD",
    SET_SORTABLE = "SET_SORTABLE"
}
export type UploaderEvents = {
    type: TRANSITION.DELETE;
    uuid: string;
} | {
    type: TRANSITION.ENABLE;
} | {
    type: TRANSITION.DISABLE;
} | {
    type: TRANSITION.FETCH;
} | {
    type: TRANSITION.UPLOAD;
    files: File[];
} | {
    type: TRANSITION.SET_SORTABLE;
    draggedUuid: string;
    droppedUuid: string;
} | {
    type: TRANSITION.SORT;
};
export type UploaderState = {
    value: STATE.ACTIVE;
    context: UploaderContext;
} | {
    value: STATE.DISABLED;
    context: UploaderContext;
} | {
    value: STATE.UPLOADING;
    context: UploaderContext;
} | {
    value: STATE.FETCHING;
    context: UploaderContext;
} | {
    value: STATE.SORTING;
    context: UploaderContext;
} | {
    value: STATE.DELETING;
    context: UploaderContext;
};
export interface UploaderStateSchema {
    states: {
        [STATE.ACTIVE]: Record<string, never>;
        [STATE.DISABLED]: Record<string, never>;
        [STATE.UPLOADING]: Record<string, never>;
        [STATE.FETCHING]: Record<string, never>;
        [STATE.SORTING]: Record<string, never>;
        [STATE.DELETING]: Record<string, never>;
    };
}
export interface UseUploader {
    state: State<UploaderContext, UploaderEvents, UploaderStateSchema, UploaderState, ResolveTypegenMeta<TypegenDisabled, UploaderEvents, BaseActionObject, ServiceMap>>;
    enable: () => void;
    disable: () => void;
    sort: () => void;
    setDndPositions: (draggedUuid: string, droppedUuid: string) => void;
    deleteHandler: (uuid: string) => void;
    uploadHandler: (files: File[]) => void;
    fetch: () => void;
}
export interface UseUploaderContext {
    uploaderContext: UseUploader;
}
export interface StyleProps {
    thumbnailURL: string;
}
