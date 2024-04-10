import { Button, ButtonIcon, ButtonText } from '@gluestack-ui/themed';
import { GoogleIcon } from '../../Icons/GoogleIcon';
import { StyleSxProps } from '../../../constants/layout';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';
import { GoogleUserResponse } from '../../../store/auth/authTypes';
// import { REACT_NATIVE_GOOGLE_OAUTH_CLIENT_ID } from '@env';

type GoogleButtonType = {
    googleHandle: (user:GoogleUserResponse) => void;
};

export const GoogleButton: React.FC<GoogleButtonType> = ({ googleHandle }) => {
    const iconHeight = 24;

    useEffect(() => {
        GoogleSignin.configure({
            //todo add ios id
        });
    }, []);

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();

            googleHandle(userInfo.user)

        } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.error('User cancelled the login flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.error('Signing in');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.error('Play services not available');
            } else {
                console.error('Some other error happened');
                console.error(error.message);
                console.error(error.code);
            }
        }
    };

    return (
        <Button sx={styles.buttonGoogle} onPress={signIn}>
            <ButtonIcon height={iconHeight}>
                <GoogleIcon height={iconHeight} />
            </ButtonIcon>
            <ButtonText>Continue with Google</ButtonText>
        </Button>
    );
};

const styles = {
    buttonGoogle: {
        borderColor: '$black',
        borderWidth: 1,
        bgColor: '$orange300',
        gap: 16,
        alignItems: 'center',
        justifyContent: 'center',
        color: '$black',
        ':active': {
            bgColor: '$orange400',
        },
    },
} as StyleSxProps;