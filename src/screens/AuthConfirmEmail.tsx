import { AuthRootStackList } from '../routes/AuthRoutes';
import { EmailConfirmation } from '../modules/Auth/EmailConfirmation';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSxProps } from '../constants/layout';
import { VStack } from '@gluestack-ui/themed';

type AuthConfirmEmailType = StackScreenProps<AuthRootStackList, 'AuthConfirmEmail'>;

export const AuthConfirmEmail: React.FC<AuthConfirmEmailType> = ({ }) => {
    return (
        <VStack space='md' sx={styles.wrapper}>
            <EmailConfirmation />
        </VStack>
    );
};

const styles = {
    wrapper: {
        flex: 1,
        pt: '$5',
        px: '$4',
        alignItems: 'center',
    }

} as StyleSxProps;