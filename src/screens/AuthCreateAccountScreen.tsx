import CreateAccountForm from '../modules/Auth/CreateAccountForm';
import { AuthRootStackList } from '../routes/AuthRoutes';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSxProps } from '../constants/layout';
import { VStack } from '@gluestack-ui/themed';

type AuthCreateAccountScreenType = StackScreenProps<AuthRootStackList, 'AuthCreateAccountScreen'>;

export const AuthCreateAccountScreen: React.FC<AuthCreateAccountScreenType> = ({ }) => {
    return (
        <VStack sx={styles.wrapper}>
            <CreateAccountForm />
        </VStack>
    );
};

const styles = {
    wrapper: {
        flex: 1,
        pt: '$5',
    },
} as StyleSxProps;