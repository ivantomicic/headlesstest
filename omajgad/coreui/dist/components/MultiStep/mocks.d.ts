import { MultiStepContext, MultiStepEvents, MultiStepState, Step } from './types';
export declare const MockSteps: Step[];
export declare const updateRouteSuccess: import("xstate").StateMachine<MultiStepContext, any, MultiStepEvents, MultiStepState, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, MultiStepEvents, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
export declare const multiStepMachineSuccessWithContext: (ctx: Partial<MultiStepContext>) => import("xstate").StateMachine<MultiStepContext, any, MultiStepEvents, MultiStepState, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, MultiStepEvents, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
