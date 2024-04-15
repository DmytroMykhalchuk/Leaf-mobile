import { authConfig } from '../../../configs/auth/auth';
import { Button, ButtonText, Input, InputField, VStack } from '@gluestack-ui/themed';
import { inputStyles } from '../../../assets/styles/inputStyle';
import { StyleSxProps } from '../../../constants/layout';
import { UIFormControl } from '../../Utils/UIFormControl';
import { useState } from 'react';

type EmailConfirmBodyType = {
    isInputAvailable: boolean;
    verifyCode: (code: string) => void;
    isWrongCode: boolean;
};

export const EmailConfirmBody: React.FC<EmailConfirmBodyType> = ({ isInputAvailable, verifyCode, isWrongCode }) => {
    const [code, setCode] = useState('');

    const onChangeCode = (code: string) => setCode(code.replace(/[^0-9]/g, ''));

    const onVerifyEmail = () => {
        verifyCode(code);
    };

    const isDisabledConfirmation = code.length != authConfig.emailConfirmLength;
    const isDisabledInput = !isInputAvailable;

    const wrongCodeMessage = isWrongCode ? 'Wrong code' : undefined;

    return (
        <VStack width={'100%'} space='md'>
            <UIFormControl label="Code" error={wrongCodeMessage} >
                <Input sx={styles.input} isDisabled={isDisabledInput}>
                    <InputField
                        onChangeText={onChangeCode}
                        keyboardType="numeric"
                        value={code}
                        maxLength={authConfig.emailConfirmLength}
                    />
                </Input>
            </UIFormControl>
            <Button
                onPress={onVerifyEmail}
                sx={styles.confirmButton}
                isDisabled={isDisabledConfirmation}
            >
                <ButtonText>Confirm</ButtonText>
            </Button>
        </VStack>
    );
    //todo input to code component
};

const styles = {
    input: inputStyles,
    confirmButton: {
        bgColor: '$info400',
        borderWidth: 1,
        borderColor: '$black',
        ':active': {
            bgColor: '$info500',
        },
    }

} as StyleSxProps;