import { Box, Heading, Input, InputField, InputIcon, InputSlot, VStack } from "@gluestack-ui/themed";
import { ImageCrop } from "../Fields/ImageCrop";
import { UIFormControl } from "../../Utils/UIFormControl";
import { CheckIcon } from "../../Icons/CheckIcon";
import { StyleSxProps } from "../../../constants/layout";
import { inputStyles } from "../../../assets/styles/inputStyle";
import { NicknameField } from "../Fields/NicknameField";
import { EmailField } from "../Fields/EmailField";
import { ImageOrVideo } from "react-native-image-crop-picker";
import { CountrySelect } from "../Fields/CountrySelect";
import { RoleSelect } from "../Fields/RoleSelect";
import { StateEmailField } from "../Fields/StateEmailField";

type EditAccountType = {
    values: {
        name: string;
        country: string;
        role: string;
        avatar: string;
    };
    errors: {
        email?: string;
        name?: string;
        avatar?: string;
        country?: string;
        role?: string;
    },
    isEmailVerified: boolean;
    handleChange: any;
    onChangeAvatar: (avatar: ImageOrVideo) => void;
    onNavigateChangeEmail: () => void;
    profileEmail:string
};

export const EditAccount: React.FC<EditAccountType> = ({ handleChange, values, errors, onNavigateChangeEmail, onChangeAvatar,profileEmail }) => {
    const onOpenEmailConfirming = () => {
        onNavigateChangeEmail();
    };
    
    return (
        <VStack space="lg" pb={'$3'}>
            <Box>
                <ImageCrop
                    onChangeAvatar={onChangeAvatar}
                    handleChange={handleChange('avatar')}
                    error={errors.avatar}
                    avatar={values.avatar}
                />
            </Box>
            <VStack px={'$3'} space={"lg"}>
                <NicknameField
                    name={values.name}
                    error={errors.name}
                    onChange={handleChange('name')}
                    defaultVerified
                />

                <StateEmailField
                    email={profileEmail}
                    onNavigateChangeEmail={onOpenEmailConfirming}
                />

                <CountrySelect
                    country={values.country}
                    error={errors?.country}
                    onChange={handleChange('country')}
                />

                <RoleSelect
                    role={values.role}
                    error={errors.role}
                    onChange={handleChange('role')}
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