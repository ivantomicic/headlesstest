import { MachineConfig } from 'xstate';
import { UploaderContext, UploaderEvents, UploaderMachine, UploaderStateSchema } from './types';
export declare const uploaderMachine: ({ allowedFileTypes, fileSizeLimit, errorMessage, mainImage, mainImageTitle, transformSrc, }: UploaderMachine) => MachineConfig<UploaderContext, UploaderStateSchema, UploaderEvents>;
