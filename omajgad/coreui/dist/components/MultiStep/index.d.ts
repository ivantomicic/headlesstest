import { FC } from 'react';
import { MultistepCommonProps, Step } from './types';
export interface MultiStepProps extends MultistepCommonProps {
    steps: Step[];
    disabled?: boolean;
    devTools?: boolean;
    onBackCallback?: (step: number) => void;
}
export type { Step, StepProps } from './types';
export declare const MultiStep: FC<MultiStepProps>;
