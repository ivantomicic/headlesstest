import { FC } from 'react';
import { ButtonProps } from 'lib/components/Button';
export interface ButtonFooterProps extends ButtonProps {
    onButtonClick: () => void;
    buttonLabel: string;
}
export declare const ButtonFooter: FC<ButtonFooterProps>;
