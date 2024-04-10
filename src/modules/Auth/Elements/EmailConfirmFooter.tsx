import { Text } from "@gluestack-ui/themed";
import { GoogleButton } from "./GoogleButton";
import { GoogleUserResponse } from "../../../store/auth/authTypes";
import { useDispatch } from "react-redux";
import { confirmEmailByProvider } from "../../../store/auth/authReducer";

type EmailConfirmFooterType = {
    uverifiedEmail: string;
};

export const EmailConfirmFooter: React.FC<EmailConfirmFooterType> = ({ uverifiedEmail }) => {
    const dispatch: any = useDispatch();

    const handleGoogleUser = (user: GoogleUserResponse) => {
        if (user.email !== uverifiedEmail) {
            //todo notify about different email 
            return;
        }

        dispatch(confirmEmailByProvider(user.email, user.id));
    };

    return (
        <>
            <Text>or</Text>
            <GoogleButton googleHandle={handleGoogleUser} />
        </>
    );
};