import { Button, ButtonText, HStack, Input, InputField, InputIcon, InputSlot } from '@gluestack-ui/themed';
import { CheckIcon } from '../../Icons/CheckIcon';
import { inputStyles } from '../../../assets/styles/inputStyle';
import { StyleSxProps } from '../../../constants/layout';
import { UIFormControl } from '../../Utils/UIFormControl';

type StateEmailFieldType = {
    email: string;
    onNavigateChangeEmail: () => void;
};

export const StateEmailField: React.FC<StateEmailFieldType> = ({ email, onNavigateChangeEmail }) => {
    return (
        <UIFormControl
            label="Email"
            isDisabled
        >
            <HStack width={'100%'} space={'md'}>
                <Input sx={styles.input} >
                    <InputField value={email} />
                    <InputSlot>
                        <InputIcon sx={styles.inputIcon} >
                            <CheckIcon isChecked />
                        </InputIcon>
                    </InputSlot>
                </Input>
                <Button sx={styles.changeButton} onPress={onNavigateChangeEmail}>
                    <ButtonText>Change</ButtonText>
                </Button>
            </HStack>
        </UIFormControl>

    );
};

const styles = {
    input: {
        ...inputStyles,
        flex: 1,
    },
    inputIcon: {
        width: 34,
        height: 30,
        pr: 40
    },
    changeButton: {
        bgColor: '$info400',
        borderWidth: 1,
        borderColor: '$black',
    },
} as StyleSxProps;