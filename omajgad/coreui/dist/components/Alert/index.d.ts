import { FC, ReactNode } from 'react';
import { AlertProps as MuiAlertProps, AlertColor } from '@mui/material';
export type Severity = AlertColor | 'muted';
export type AlertProps = Omit<MuiAlertProps, 'severity'> & {
    severity?: Severity;
    /**
     * @deprecated Use just muted severity instead
     */
    muted?: boolean;
    onClose?: () => void;
    className?: string;
    children?: ReactNode;
};
export declare const Alert: FC<AlertProps>;
