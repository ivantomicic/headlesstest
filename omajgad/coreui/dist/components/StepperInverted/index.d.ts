import React, { ComponentProps } from 'react';
import { Stepper as MuiStepper } from '@mui/material';
import { StepGapTypes } from './StepConnector';
type StepItem = {
    title: string | JSX.Element;
    subtitle?: string | JSX.Element;
    description?: string | JSX.Element;
    component?: JSX.Element;
};
export interface StepperInvertedProps {
    steps: StepItem[];
    activeStep: number;
    gap?: StepGapTypes;
    orientation?: ComponentProps<typeof MuiStepper>['orientation'];
}
export declare const StepperInverted: React.FC<StepperInvertedProps>;
export {};
