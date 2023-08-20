import { MachineConfig } from 'xstate';
import { MultiStepContext, MultiStepEvents, MultiStepMachineParams, MultiStepStateSchema } from './types';
export declare const MultiStepMachine: ({ steps, }: MultiStepMachineParams) => MachineConfig<MultiStepContext, MultiStepStateSchema, MultiStepEvents>;
