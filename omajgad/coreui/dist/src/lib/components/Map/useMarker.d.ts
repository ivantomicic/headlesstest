import { PropsWithChildren } from 'react';
import { GoogleMapPosition, GoogleMapProps } from './types';
export declare const useMarker: ({ zoom, coordinates, address, }: PropsWithChildren<Pick<GoogleMapProps, 'zoom' | 'coordinates' | 'address'>>) => {
    onMapLoad: (maps: {
        map: any;
        maps: any;
        ref: Element | null;
    }) => void;
    markers: GoogleMapPosition[];
};
