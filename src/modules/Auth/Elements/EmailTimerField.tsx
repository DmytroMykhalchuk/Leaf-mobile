import { authConfig } from '../../../configs/auth/auth';
import { Text } from '@gluestack-ui/themed';
import { useEffect, useRef, useState } from 'react';

type EmailTimerFieldType = {
    isActived: boolean;
    deactivate: () => void;
};

export const EmailTimerField: React.FC<EmailTimerFieldType> = ({ isActived, deactivate }) => {
    const isRunningRef = useRef(false);
    
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        if (isActived) {
            if (timeLeft <= 0 && !isRunningRef.current) {
                setTimeLeft(authConfig.sendCodeAgainAfter-50);
                isRunningRef.current = true;
                return;
            } else if (timeLeft <= 0 && isRunningRef.current) {
                isRunningRef.current = false;
                deactivate();
                return;
            }
            const timerId = setTimeout(() => {
                setTimeLeft((prev: number) => prev - 1);
            }, 1000);

            return () => {
                clearInterval(timerId);
            }
        }
    }, [isActived, timeLeft]);

    if (!isActived) {
        return null;
    }
    return (
        <Text size="sm">Send again in a: {timeLeft}s</Text>
    );
};