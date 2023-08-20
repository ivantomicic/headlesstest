import { ReactNode, FC } from 'react';
import { User } from 'lib/components/Layout/types';
export interface UserNameProps {
    children?: ReactNode;
    user: User;
    isOpen?: boolean;
    onClick: () => void;
}
export declare const UserName: FC<UserNameProps>;
