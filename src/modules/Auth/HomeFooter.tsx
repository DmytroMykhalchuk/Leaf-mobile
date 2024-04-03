import { Box, Button, ButtonIcon, ButtonText, Heading, Text, VStack } from "@gluestack-ui/themed";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSxProps } from "../../constants/layout";
import { GoogleIcon } from "../Icons/GoogleIcon";

type HomeFooterType = {
    onNavigateToTerms: () => void;
    onNavigateToPrivacy: () => void;
};

export const HomeFooter: React.FC<HomeFooterType> = ({ onNavigateToPrivacy, onNavigateToTerms }) => {
    const iconHeight = 24;

    return (
        <VStack space="md" sx={styles.mainWrapper}>
            <Heading textAlign="center">It's for free</Heading>
            <Button sx={styles.buttonGoogle}>
                <ButtonIcon height={iconHeight}>
                    <GoogleIcon height={iconHeight} />
                </ButtonIcon>
                <ButtonText>Continue with Google</ButtonText>
            </Button>
            <Button sx={styles.buttonCreateAccont}>
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
        bgColor: '$amber500',
        gap: 16,
        alignItems: 'center',
        justifyContent: 'center',
        ':active': {
            bgColor: '$amber600',
        },
    },
    buttonCreateAccont: {
        bgColor: '$info400',
        ':active': {
            bgColor: '$info500',
        }
    },
    link: {
        color: '$info400',
        textDecorationLine: 'underline',
    },
} as StyleSxProps