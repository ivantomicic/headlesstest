import { FC, ReactNode } from 'react';
import { User } from 'lib/components/Layout/types';
export interface UserMenuProps {
    user: User;
    userNameContent: ReactNode;
    dropDownItems: ReactNode[];
    isOpen: boolean;
    onClick: () => void;
    dropDownContainerStyles?: string;
    padDropdownItems?: boolean;
}
export declare const UserMenu: FC<UserMenuProps>;
