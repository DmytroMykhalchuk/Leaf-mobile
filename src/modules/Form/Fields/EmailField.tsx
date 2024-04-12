import useDebounce from '../../../utils/useDebounce';
import { authConfig } from '../../../configs/auth/auth';
import { CheckIcon } from '../../Icons/CheckIcon';
import { commonApi } from '../../../api/commonApi';
import { Input, InputField, InputIcon, InputSlot } from '@gluestack-ui/themed';
import { inputStyles } from '../../../assets/styles/inputStyle';
import { StyleSxProps } from '../../../constants/layout';
import { UIFormControl } from '../../Utils/UIFormControl';
import { useEffect, useState } from 'react';

type EmailFieldType = {
    error?: string;
    onChange: (name: string) => void;
    email: string;
    isEmailVerified?: boolean;
};

export const EmailField: React.FC<EmailFieldType> = ({ error, onChange, email, isEmailVerified }) => {
    const [localEmail, setLocalEmail] = useState(email);
    const [isActiveIcon, setIsActiveIcon] = useState(false);

    const deboucedEmail = useDebounce(localEmail);

    useEffect(() => {
        if (deboucedEmail === email) {
            return;
        }
        checkName();

    }, [deboucedEmail]);

    const clearState = () => {
        email && onChange('');
        isActiveIcon && setIsActiveIcon(false);
    }

    const checkName = async () => {
        if (!deboucedEmail.length||!deboucedEmail.includes('@')) {
            clearState();
            return;
        }
        const response = await commonApi.checkEmailUnique(deboucedEmail);

        if (response?.code !== 200) {
            clearState();
        } else if (response.data.isExist === false) {
            onChange(deboucedEmail);
            setIsActiveIcon(true);
        } else if (response?.data?.isExist) {
            clearState();
        }
        setLocalEmail(deboucedEmail);
    };

    const onChangeEmail = (name: string) => setLocalEmail(name);

    return (
        <UIFormControl
            label="Email"
            error={error}
            isDisabled={isEmailVerified}
        >
            <Input sx={styles.input} >
                <InputField onChangeText={onChangeEmail} value={localEmail} />
                <InputSlot>
                    <InputIcon sx={styles.inputIcon} >
                        <CheckIcon isChecked={isActiveIcon || isEmailVerified} />
                    </InputIcon>
                </InputSlot>
            </Input>
        </UIFormControl>
    );
};

const styles = {
    input: inputStyles,
    inputIcon: {
        width: 34,
        height: 30,
        pr: 40
    },
} as StyleSxProps;