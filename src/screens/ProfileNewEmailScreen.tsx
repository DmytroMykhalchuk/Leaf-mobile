import { Box, Button, ButtonText, Heading, Text, VStack, View } from "@gluestack-ui/themed";
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
import { changeEmailProvider, confirmChangeEmailCode, verifyEmailCode } from "../store/user/userReducer";
import { GoogleUserResponse } from "../store/auth/authTypes";
import { EmailField } from "../modules/Form/Fields/EmailField";
import { NewEmailField } from "../modules/Profile/NewEmailField";

type ProfileNewEmailScreenType = StackScreenProps<HomeTabRootStackList, 'ProfileNewEmailScreen'>

export const ProfileNewEmailScreen: React.FC<ProfileNewEmailScreenType> = ({ navigation, route }) => {
    const dispatch: any = useDispatch();

    const [isSendedCode, setIsSendedCode] = useState(false);
    const [isWrongCode, setIsWrongCode] = useState(false);

    const [email, setEmail] = useState('');

    const changeEmail = (email: string) => {
        setEmail(email);
    };

    const toggleSendedCode = () => {
        setIsSendedCode(true);
    };

    const successHandler = () => {
        navigation.goBack();
    };

    const handleGoogleUser = (user: GoogleUserResponse) => {
        dispatch(changeEmailProvider(user.email, user.id, successHandler));
    };

    const wrongCodeHandler = () => {
        setIsWrongCode(true);
    };

    const verifyCode = (code: string) => {
        isWrongCode && setIsWrongCode(true);
        dispatch(confirmChangeEmailCode(code, email, wrongCodeHandler, successHandler));
    };

    return (
        <VStack space='md' sx={styles.wrapper}>
            <VStack width={'100%'}>
                <Heading textAlign="left">Input new email</Heading>
                <NewEmailField toggleSendedCode={toggleSendedCode} changeEmail={changeEmail} />
            </VStack>
            <EmailConfirmBody isInputAvailable={isSendedCode} verifyCode={verifyCode} isWrongCode={isWrongCode} />
            <EmailConfirmFooter handleGoogleUser={handleGoogleUser} />
        </VStack>
    );
};

const styles = {
    wrapper: {
        flex: 1,
        pt: '$2',
        px: '$4',
        alignItems: 'center',
    },

} as StyleSxProps;