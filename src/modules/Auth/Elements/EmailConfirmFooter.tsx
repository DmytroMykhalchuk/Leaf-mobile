import { GoogleButton } from './GoogleButton';
import { GoogleUserResponse } from '../../../store/auth/authTypes';
import { Text } from '@gluestack-ui/themed';

type EmailConfirmFooterType = {
    handleGoogleUser: (user: GoogleUserResponse) => void;
};

export const EmailConfirmFooter: React.FC<EmailConfirmFooterType> = ({ handleGoogleUser }) => {
    return (
        <>
            <Text>or</Text>
            <GoogleButton googleHandle={handleGoogleUser} />
        </>
    );
};