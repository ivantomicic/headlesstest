import { UploaderContext, UploaderEvents, UploaderState, UploaderTransformImages } from './types';
export declare const mockedFetchResponse: {
    images: {
        uuid: string;
        url: string;
    }[];
};
export declare const mockedReorderedImages: {
    images: {
        uuid: string;
        url: string;
    }[];
};
export declare const mockedFetchReorderedResponse: {
    images: {
        uuid: string;
        url: string;
    }[];
};
export declare const mockedDeleteResponse: {
    images: {
        uuid: string;
        url: string;
    }[];
};
export declare const invalidFiles: Partial<File>[];
export declare const validFiles: Partial<File>[];
export declare const fetchCustomMachineSuccess: (transformSrc: UploaderTransformImages) => import("xstate").StateMachine<UploaderContext, any, UploaderEvents, UploaderState, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, UploaderEvents, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
export declare const fetchMachineSuccess: import("xstate").StateMachine<UploaderContext, any, UploaderEvents, UploaderState, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, UploaderEvents, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
export declare const fetchMachineError: import("xstate").StateMachine<UploaderContext, any, UploaderEvents, UploaderState, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, UploaderEvents, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
export declare const uploadMachineSuccess: import("xstate").StateMachine<UploaderContext, any, UploaderEvents, UploaderState, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, UploaderEvents, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
export declare const uploadMachineSuccessWithContext: (ctx: Partial<UploaderContext>) => import("xstate").StateMachine<UploaderContext, any, UploaderEvents, UploaderState, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, UploaderEvents, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
export declare const uploadMachineError: import("xstate").StateMachine<UploaderContext, any, UploaderEvents, UploaderState, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, UploaderEvents, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
export declare const sortMachineError: import("xstate").StateMachine<UploaderContext, any, UploaderEvents, UploaderState, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, UploaderEvents, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
export declare const sortMachineSuccess: import("xstate").StateMachine<UploaderContext, any, UploaderEvents, UploaderState, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, UploaderEvents, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
export declare const deleteMachineError: import("xstate").StateMachine<UploaderContext, any, UploaderEvents, UploaderState, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, UploaderEvents, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
export declare const deleteMachineSuccess: import("xstate").StateMachine<UploaderContext, any, UploaderEvents, UploaderState, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, UploaderEvents, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
