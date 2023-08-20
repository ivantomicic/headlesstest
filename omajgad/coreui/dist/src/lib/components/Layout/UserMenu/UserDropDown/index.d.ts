import { FC, ReactNode } from 'react';
export interface UserDropDownProps {
    open: boolean;
    dropDownItems: ReactNode[];
    dropDownContainerStyles?: string;
    padDropdownItems?: boolean;
}
export declare const UserDropDown: FC<UserDropDownProps>;
