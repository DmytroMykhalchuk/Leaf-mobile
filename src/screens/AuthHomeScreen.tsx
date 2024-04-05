import { AuthRootStackList } from '../routes/AuthRoutes';
import { Box, Heading, VStack } from '@gluestack-ui/themed';
import { Dimensions, StyleProp, ViewStyle } from 'react-native';
import { HomeFooter } from '../modules/Auth/HomeFooter';
import { HomeSlider } from '../modules/Auth/HomeSlider';
import { StackScreenProps } from '@react-navigation/stack';
import { SxProps } from '@gluestack-style/react/lib/typescript/types';

const window = Dimensions.get('window');
const windowHeight = window.height;

type AuthHomeScreenType = StackScreenProps<AuthRootStackList, 'AuthHomeScreen'>

export const AuthHomeScreen: React.FC<AuthHomeScreenType> = ({ navigation }) => {

    const navigateToCreateAccount = (email = undefined) => {
        navigation.push('AuthCreateAccountScreen', { email });
    };

    const onNavigateToTerms = () => {
        navigation.push('TermsScreen');
    };

    const onNavigateToPrivacy = () => {
        navigation.push('PrivacyScreen');
    };

    return (
        <VStack sx={styles.mainWrapper}>
            <Box sx={styles.backgroundBox} />
            <Heading sx={styles.title}>Welcome to Leadship</Heading>
            <Box flex={1} >
                <HomeSlider />
            </Box>
            <Box>
                <HomeFooter
                    onNavigateToTerms={onNavigateToTerms}
                    onNavigateToPrivacy={onNavigateToPrivacy}
                    onNavigateToCreateAccount={navigateToCreateAccount}
                />
            </Box>
        </VStack>
    );
};

const styles = {
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: '$2xl',
        mb: 24,
    },
    mainWrapper: {
        height: windowHeight,
        flex: 1,
        pt: 12,
    },
    backgroundBox: {
        height: '40%',
        backgroundColor: '$green400',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },

} as { [key: string]: Partial<SxProps<StyleProp<ViewStyle>>> };
