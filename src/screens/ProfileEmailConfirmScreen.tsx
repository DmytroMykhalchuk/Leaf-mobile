import { Box, Heading, Text, VStack, View } from "@gluestack-ui/themed";
import { EmailConfirmation } from "../modules/Auth/EmailConfirmation";
import { StyleSxProps } from "../constants/layout";
import { useDispatch, useSelector } from "react-redux";
import { getUverifiedEmail } from "../store/auth/authSelector";
import { useState } from "react";
import { requestEmailCode } from "../store/auth/authReducer";
import { EmailConfrimHeader } from "../modules/Auth/Elements/EmailConfrimHeader";
import { EmailConfirmBody } from "../modules/Auth/Elements/EmailConfirmBody";
import { EmailConfirmFooter } from "../modules/Auth/Elements/EmailConfirmFooter";
import { ScreenStackProps } from "react-native-screens";
import { HomeTabRootStackList } from "../routes/HomeTab";
import { StackScreenProps } from "@react-navigation/stack";
import { verifyEmailCode } from "../store/user/userReducer";
import { GoogleUserResponse } from "../store/auth/authTypes";

type ProfileEmailConfirmScreenType = StackScreenProps<HomeTabRootStackList, 'ProfileEmailConfirmScreen'>

export const ProfileEmailConfirmScreen: React.FC<ProfileEmailConfirmScreenType> = ({ navigation, route }) => {
    const dispatch: any = useDispatch();

    const uverifiedEmail = route.params.email;

    const [isSendedCode, setIsSendedCode] = useState(false);

    const sendCode = () => {
        if (!uverifiedEmail) return;
        dispatch(requestEmailCode(uverifiedEmail))
        setIsSendedCode(true);
    };

    const successHandler = () => {
        navigation.replace('ProfileNewEmailScreen');
    };

    const handleGoogleUser = (user: GoogleUserResponse) => {
        if (user.email !== uverifiedEmail) {
            return;
        }
        successHandler()
    };

    const verifyCode = (code: string) => {
        dispatch(verifyEmailCode(uverifiedEmail, +code, successHandler));
    };

    return (
        <VStack space='md' sx={styles.wrapper}>
            <Box width={'100%'}>
                <Heading textAlign="left">Confirm current email</Heading>
            </Box>
            <EmailConfrimHeader sendCode={sendCode} email={uverifiedEmail} />
            <EmailConfirmBody isInputAvailable={isSendedCode} verifyCode={verifyCode} />
            <EmailConfirmFooter uverifiedEmail={uverifiedEmail as string} handleGoogleUser={handleGoogleUser} />
        </VStack>
    );
};

const styles = {
    wrapper: {
        flex: 1,
        pt: '$2',
        px: '$4',
        alignItems: 'center',
    }

} as StyleSxProps;