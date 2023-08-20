import { FC } from 'react';
import { MultistepCommonProps } from 'lib/components/MultiStep/types';
interface HeaderProps extends MultistepCommonProps {
    step: number;
    totalSteps: number;
    goBack: (step: number) => void;
}
export declare const Header: FC<HeaderProps>;
export {};
