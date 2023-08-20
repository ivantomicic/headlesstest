import React from 'react';
import { StepConnectorProps } from '@mui/material';
export type StepGapTypes = 'large' | 'small';
interface StepConnectorInterface extends StepConnectorProps {
    gap?: StepGapTypes;
}
export declare const StepConnector: React.FC<StepConnectorInterface>;
export {};
