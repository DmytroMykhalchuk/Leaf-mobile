import { Text } from "@gluestack-ui/themed";
import { GoogleButton } from "./GoogleButton";

type EmailConfirmFooterType = {
};

export const EmailConfirmFooter: React.FC<EmailConfirmFooterType> = ({ }) => {

    return (
        <>
            <Text>or</Text>
            <GoogleButton onGoogle={() => { }} />
        </>
    );
};