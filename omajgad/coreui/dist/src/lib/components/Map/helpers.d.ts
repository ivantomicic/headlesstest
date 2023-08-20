import { GoogleMapPosition, GoogleMapProviderContext } from './types';
export declare const geocoderCallBack: (address: string, setItem: GoogleMapProviderContext['setItem'], setMarkers: (positions: GoogleMapPosition[]) => void) => (results: any) => void;
export declare function findAddress(mapData: any, address: string, setItem: GoogleMapProviderContext['setItem'], getItem: GoogleMapProviderContext['getItem'], setMarkers: (positions: GoogleMapPosition[]) => void): void;
export declare const centerMap: (mapData: any, positions: GoogleMapPosition[], zoom: number) => void;
