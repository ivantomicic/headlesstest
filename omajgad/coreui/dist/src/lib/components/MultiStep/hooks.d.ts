import { Step, UseMultiStep, UseMultiStepServiceProps } from './types';
interface UseMultiStepProps extends UseMultiStepServiceProps {
    steps: Step[];
    devTools?: boolean;
}
export declare const useMultiStep: ({ routeUpdateService, steps, devTools }: UseMultiStepProps) => UseMultiStep;
export {};
