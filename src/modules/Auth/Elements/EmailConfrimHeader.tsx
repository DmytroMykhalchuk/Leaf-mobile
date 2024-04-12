import { Box, Button, ButtonText, HStack, Input, InputField } from '@gluestack-ui/themed';
import { EmailTimerField } from './EmailTimerField';
import { inputStyles } from '../../../assets/styles/inputStyle';
import { StyleSxProps } from '../../../constants/layout';
import { UIFormControl } from '../../Utils/UIFormControl';
import { useEffect, useState } from 'react';

type EmailConfrimHeaderType = {
    sendCode: () => void;
    email: string | null;
    onChangeEmail?: (email: string) => void;
};

export const EmailConfrimHeader: React.FC<EmailConfrimHeaderType> = ({ sendCode, email, onChangeEmail }) => {
    const [canSendCode, setCanSendCode] = useState(true);

    useEffect(() => {
        if (canSendCode) {
        }
    }, [canSendCode]);

    const onSendCode = () => {
        setCanSendCode(false);

        sendCode();
    };

    const deactivateTimer = () => {
        setCanSendCode(true);
    };


    const isActivatedTimer = !canSendCode;
    const isReadOnlyField = !onChangeEmail;

    return (
        <Box>
            <HStack width={'100%'} alignItems='flex-end' space='md'>
                <Box flex={1}>
                    <UIFormControl>
                        <Input sx={styles.input} isReadOnly={isReadOnlyField}>
                            <InputField value={email || undefined} onChangeText={onChangeEmail} />
                        </Input>
                    </UIFormControl>
                </Box>
                <Button
                    sx={styles.sendCodeButton}
                    isDisabled={isActivatedTimer}
                    onPress={onSendCode}
                >
                    <ButtonText>Send code</ButtonText>
                </Button>
            </HStack>
            <EmailTimerField isActived={isActivatedTimer} deactivate={deactivateTimer} />
        </Box>
    );
};

const styles = {
    input: inputStyles,
    sendCodeButton: {
        bgColor: '$green400',
        borderWidth: 1,
        borderColor: '$black',
        ':active': {
            bgColor: '$green500',
        },
    },
} as StyleSxProps;