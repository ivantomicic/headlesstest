export interface AutocompleteSearchParams {
    searchText?: string;
    limit?: number;
}
export type AutocompleteItemLookup<T> = (params: AutocompleteSearchParams) => Promise<T[]>;
export type AutocompleteItemDetailsLookup<T, U> = (item: AutocompleteOption<T>) => Promise<U[]>;
export interface AutocompleteOptionBase {
    notFound?: boolean;
    label: string;
    linkLabel?: string;
    inputValue?: string;
}
export type AutocompleteOption<T> = AutocompleteOptionBase & Record<keyof T, any>;
