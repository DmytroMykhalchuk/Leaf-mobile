import { Box, Heading, Input, InputField, InputIcon, InputSlot, VStack } from "@gluestack-ui/themed";
import { ImageCrop } from "./ImageCrop";
import { UIFormControl } from "../../Utils/UIFormControl";
import { CheckIcon } from "../../Icons/CheckIcon";
import { StyleSxProps } from "../../../constants/layout";
import { inputStyles } from "../../../assets/styles/inputStyle";
import { NicknameField } from "./NicknameField";
import { EmailField } from "./EmailField";
import { ImageOrVideo } from "react-native-image-crop-picker";

type AccountDataType = {
    values: {
        email: string;
        name: string;
    };
    errors: {
        email?: string;
        name?: string;
        avatar?: string;
    },
    isEmailVerified: boolean;
    handleChange: any;
    onChangeAvatar: (avatar: ImageOrVideo) => void;
};

export const AccountData: React.FC<AccountDataType> = ({ handleChange, values, errors, isEmailVerified, onChangeAvatar }) => {
    return (
        <VStack space="lg">
            <Box>
                <ImageCrop
                    onChangeAvatar={onChangeAvatar}
                    handleChange={handleChange('avatar')}
                    error={errors.avatar}
                />
            </Box>
            <VStack px={'$4'} space={"lg"}>
                <NicknameField
                    name={values.name}
                    error={errors.name}
                    onChange={handleChange('name')}
                />
                <EmailField
                    email={values.email}
                    error={errors.email}
                    onChange={handleChange('email')}
                    isEmailVerified={isEmailVerified}
                />
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