import { FunctionComponent } from 'react';
import { BaseActionObject, ResolveTypegenMeta, ServiceMap, State, TypegenDisabled } from 'xstate';
export interface MultistepCommonProps {
    labels: {
        secure: string;
        pagination: (step: number, total: number) => string;
    };
}
export declare enum STATE {
    ACTIVE = "ACTIVE",
    DISABLED = "DISABLED",
    UPDATING_ROUTE = "UPDATING_ROUTE",
    TRACKING = "TRACKING",
    FINAL = "FINAL"
}
export declare enum TRANSITION {
    ENABLE = "ENABLE",
    DISABLE = "DISABLE",
    GOTO_STEP = "GOTO_STEP",
    GOTO_NEXT = "GOTO_NEXT",
    GOTO_PREVIOUS = "GOTO_PREVIOUS"
}
export declare enum SERVICE {
    CHANGE_ROUTE = "CHANGE_ROUTE"
}
export declare enum ACTION {
    PERSIST_CONTEXT = "PERSIST_CONTEXT",
    HYDRATE_CONTEXT = "HYDRATE_CONTEXT"
}
export type MultiStepEvents = {
    type: TRANSITION.ENABLE;
} | {
    type: TRANSITION.DISABLE;
} | {
    type: TRANSITION.GOTO_STEP;
    stepId?: string | null;
} | {
    type: TRANSITION.GOTO_NEXT;
} | {
    type: TRANSITION.GOTO_PREVIOUS;
};
export interface MultiStepStateSchema {
    states: {
        [STATE.ACTIVE]: Record<string, never>;
        [STATE.DISABLED]: Record<string, never>;
        [STATE.UPDATING_ROUTE]: Record<string, never>;
        [STATE.FINAL]: Record<string, never>;
    };
}
export type MultiStepState = {
    value: STATE.ACTIVE;
    context: MultiStepContext;
} | {
    value: STATE.DISABLED;
    context: MultiStepContext;
} | {
    value: STATE.UPDATING_ROUTE;
    context: MultiStepContext;
} | {
    value: STATE.FINAL;
    context: MultiStepContext;
};
export interface MultiStepServiceProps {
    hydrateService?: (ctx: MultiStepContext) => MultiStepReturn;
    persistService?: (ctx: MultiStepContext) => MultiStepReturn;
}
export interface UseMultiStepServiceProps extends MultiStepServiceProps {
    routeUpdateService: (ctx: MultiStepContext) => MultiStepReturn;
}
export interface StepProps {
    goToNext: () => void;
}
export interface Step {
    uuid: string;
    component: FunctionComponent<StepProps>;
}
export interface MultiStepContext {
    currentStep: Step | null;
    steps: Readonly<Step[]>;
}
export declare const DefaultContext: MultiStepContext;
export interface MultiStepMachineParams {
    steps: Step[];
}
export type MultiStepReturn = Promise<Partial<MultiStepContext>>;
export interface UseMultiStep {
    state: State<MultiStepContext, MultiStepEvents, MultiStepStateSchema, MultiStepState, ResolveTypegenMeta<TypegenDisabled, MultiStepEvents, BaseActionObject, ServiceMap>>;
    enable: () => void;
    disable: () => void;
    goToNext: () => void;
    goToPrevious: () => void;
    goToStep: (step?: string | null) => void;
}
export interface UseMultiStepContext {
    multiStepContext: UseMultiStep;
}
