import CreateAccountForm from '../modules/Auth/CreateAccountForm';
import { AuthRootStackList } from '../routes/AuthRoutes';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSxProps } from '../constants/layout';
import { VStack } from '@gluestack-ui/themed';
import { useSelector } from 'react-redux';
import { getGoogleSign } from '../store/auth/authSelector';

type AuthCreateAccountScreenType = StackScreenProps<AuthRootStackList, 'AuthCreateAccountScreen'>;

export const AuthCreateAccountScreen: React.FC<AuthCreateAccountScreenType> = ({ navigation, route }) => {
    const googleSign = useSelector(getGoogleSign);

    const navigateToEmailVerification = () => {
        navigation.push('AuthConfirmEmail');
    };

    return (
        <VStack sx={styles.wrapper}>
            <CreateAccountForm
                googleSign={googleSign}
                navigateToEmailVerification={navigateToEmailVerification}
            />
        </VStack>
    );
};

const styles = {
    wrapper: {
        flex: 1,
        pt: '$5',
    },
} as StyleSxProps;