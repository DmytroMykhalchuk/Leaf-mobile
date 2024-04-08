import { Box, Heading, Input, InputField, InputIcon, InputSlot, VStack } from "@gluestack-ui/themed";
import { TextInput } from "react-native-gesture-handler";
import { ImageCrop } from "./ImageCrop";
import { UIFormControl } from "../../Utils/UIFormControl";
import { CheckIcon } from "../../Icons/CheckIcon";
import { StyleSxProps } from "../../../constants/layout";
import { inputStyles } from "../../../assets/styles/inputStyle";

type AccountDataType = {
    values: {
        email: string;
        name: string;
    };
    errors: {
        email?: string;
        name?: string;
    },
    isEmailVerified: boolean;
    handleChange: any;
};

export const AccountData: React.FC<AccountDataType> = ({ handleChange, values, errors, isEmailVerified }) => {
    return (
        <VStack space="lg">
            <Box>
                <ImageCrop />
            </Box>
            <VStack px={'$4'} space={"lg"}>

                <UIFormControl
                    label="Nickname"
                    error={errors.name}
                >
                    <Input sx={styles.input} >
                        <InputField onChangeText={handleChange('name')} value={values.name} />
                        <InputSlot ml={130}>
                            <InputIcon sx={styles.inputIcon} ><CheckIcon /></InputIcon>
                        </InputSlot>
                    </Input>
                </UIFormControl>

                <UIFormControl
                    label="Email"
                    error={errors.email}
                >
                    <Input sx={styles.input} >
                        <InputField onChangeText={handleChange('email')} value={values.email} />
                        <InputSlot ml={130}>
                            <InputIcon sx={styles.inputIcon} ><CheckIcon isChecked={isEmailVerified} /></InputIcon>
                        </InputSlot>
                    </Input>
                </UIFormControl>

            </VStack>
        </VStack>
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