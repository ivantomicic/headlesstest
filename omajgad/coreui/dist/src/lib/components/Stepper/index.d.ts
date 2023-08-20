import React, { ReactChild, ReactText } from 'react';
import { StepProps } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { StepGapTypes } from './StepConnector';
type StepItemWithTextTitle = {
    id?: React.Key;
    title: ReactText;
};
type StepItemWithJSXTitle = {
    id: React.Key;
    title: JSX.Element;
};
type StepItem = (StepItemWithTextTitle | StepItemWithJSXTitle) & {
    subtitle?: ReactChild;
    description?: ReactChild;
    component?: ReactChild;
    stepProps?: StepProps;
};
export interface StepperProps {
    steps: StepItem[];
    activeStep: number;
    gap?: StepGapTypes;
    classesStepper?: ReturnType<typeof makeStyles>;
    animation?: boolean;
}
export declare const Stepper: React.FC<StepperProps>;
export {};
