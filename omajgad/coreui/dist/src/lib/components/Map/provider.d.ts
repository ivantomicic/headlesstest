import React, { FC } from 'react';
import { GoogleMapProviderContext, GoogleMapProviderProps } from './types';
export declare const MapContext: React.Context<GoogleMapProviderContext>;
export declare const MapProvider: FC<GoogleMapProviderProps>;
export declare const useMap: () => GoogleMapProviderContext;
