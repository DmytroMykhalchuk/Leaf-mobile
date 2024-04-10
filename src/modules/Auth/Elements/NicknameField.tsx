import useDebounce from '../../../utils/useDebounce';
import { authConfig } from '../../../configs/auth/auth';
import { CheckIcon } from '../../Icons/CheckIcon';
import { commonApi } from '../../../api/commonApi';
import { Input, InputField, InputIcon, InputSlot } from '@gluestack-ui/themed';
import { inputStyles } from '../../../assets/styles/inputStyle';
import { StyleSxProps } from '../../../constants/layout';
import { UIFormControl } from '../../Utils/UIFormControl';
import { useEffect, useState } from 'react';

type NicknameFieldType = {
    error?: string;
    onChange: (name: string) => void;
    name: string;
};

export const NicknameField: React.FC<NicknameFieldType> = ({ error, onChange, name }) => {
    const [localName, setLocalName] = useState(name);
    const [isActiveIcon, setIsActiveIcon] = useState(false);

    const deboucedName = useDebounce(localName);

    useEffect(() => {
        if (deboucedName === name) {
            return;
        }
        checkName();

    }, [deboucedName]);

    const clearState = () => {
        onChange('');
        isActiveIcon && setIsActiveIcon(false);
    }

    const checkName = async () => {
        if (!deboucedName.length) {
            clearState();
            return;
        }
        const response = await commonApi.checkNameUnique(deboucedName);

        if (response?.code !== 200) {
            clearState();
        } else if (response.data.isExist === false) {
            onChange(deboucedName);
            setIsActiveIcon(true);
        } else if (response?.data?.isExist) {
            clearState();
        }
        setLocalName(deboucedName);
    };

    const onChangeName = (name: string) => setLocalName(name);

    return (
        <UIFormControl
            label="Nickname"
            error={error}
        >
            <Input sx={styles.input} >
                <InputField onChangeText={onChangeName} value={localName} maxLength={authConfig.maxNicknaemLength} />
                <InputSlot ml={130}>
                    <InputIcon sx={styles.inputIcon} >
                        <CheckIcon isChecked={isActiveIcon} />
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