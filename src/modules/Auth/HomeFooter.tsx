import { Box, Button, ButtonIcon, ButtonText, Heading, Text, VStack } from "@gluestack-ui/themed";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSxProps } from "../../constants/layout";
import { GoogleIcon } from "../Icons/GoogleIcon";
import { GoogleButton } from "./Elements/GoogleButton";
import { GoogleUserResponse } from "../../store/auth/authTypes";

type HomeFooterType = {
    onNavigateToTerms: () => void;
    onNavigateToPrivacy: () => void;
    onNavigateToCreateAccount: () => void;
    googleUserHandle: (user: GoogleUserResponse) => void;
};

export const HomeFooter: React.FC<HomeFooterType> = ({ onNavigateToPrivacy, onNavigateToTerms, onNavigateToCreateAccount, googleUserHandle }) => {
    return (
        <VStack space="md" sx={styles.mainWrapper}>
            <Heading textAlign="center">It's for free</Heading>

            <GoogleButton googleHandle={googleUserHandle} />
            
            <Button sx={styles.buttonCreateAccont} onPress={onNavigateToCreateAccount}>
                <ButtonText>Create Account</ButtonText>
            </Button>

            <Box>
                <Text textAlign="center">
                    By continiung, you accept our&nbsp;
                    <Text onPress={onNavigateToTerms} sx={styles.link}>
                        Terms conditions
                    </Text>
                    and&nbsp;
                    <Text onPress={onNavigateToPrivacy} sx={styles.link}>
                        Privacy policy
                    </Text>
                </Text>
            </Box>
        </VStack>
    );
};

const styles = {
    mainWrapper: {
        px: 8,
        py: 8,
        pb: 16,
    },
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
    buttonCreateAccont: {
        bgColor: '$info400',
        borderColor: '$black',
        borderWidth: 1,
        ':active': {
            bgColor: '$info500',
        }
    },
    link: {
        color: '$info400',
        textDecorationLine: 'underline',
    },
} as StyleSxProps;