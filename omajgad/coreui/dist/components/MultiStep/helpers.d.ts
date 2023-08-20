import { MultiStepContext, Step } from './types';
import { History } from 'history';
export declare const getCurrentStepIndex: (ctx: MultiStepContext) => number;
export declare const getNextStep: (ctx: MultiStepContext) => Step | undefined;
export declare const getPreviousStep: (ctx: MultiStepContext) => Step | undefined;
export declare const getStepById: ({ steps }: MultiStepContext, stepId?: string | null) => Step | undefined;
export declare const checkStepId: (ctx: MultiStepContext, stepId?: string | null) => boolean;
export declare const getUrlStepId: (history: History) => string | null;
export declare const updateUrl: ({ currentStep }: MultiStepContext, history: History, urlParamName?: string) => void;
