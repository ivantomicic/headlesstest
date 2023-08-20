import { MapOptions, Position } from 'google-map-react';
import { ReactElement, ReactNode } from 'react';
export interface GoogleMapProps {
    center?: Position;
    coordinates?: GoogleMapPosition[];
    zoom?: number;
    address?: string;
    options: MapOptions;
    disableTooltip?: boolean;
}
export interface GoogleMapProviderProps {
    children?: ReactNode;
    apiKey: string;
}
export interface GoogleMapProviderContext extends GoogleMapProviderProps {
    setItem: (key: string, positions: GoogleMapPosition[]) => void;
    getItem: (key: string) => GoogleMapPosition[] | undefined;
}
export type GoogleMapPosition = Position & {
    label?: string;
    color?: string;
    customIcon?: ReactElement;
    disableTooltip?: boolean;
};
