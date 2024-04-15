import { useDispatch } from "react-redux";
import { StyleSxProps } from "../../constants/layout";
import { EmailField } from "../Form/Fields/EmailField";
import { Button, ButtonText } from "@gluestack-ui/themed";
import { requestEmailCode } from "../../store/auth/authReducer";
import { useState } from "react";
import { EmailTimerField } from "../Auth/Elements/EmailTimerField";
import { requestChangeEmail } from "../../store/user/userReducer";

type NewEmailFieldType = {
    toggleSendedCode: () => void;
    changeEmail: (email: string) => void;
};

export const NewEmailField: React.FC<NewEmailFieldType> = ({ toggleSendedCode, changeEmail }) => {
    const dispatch: any = useDispatch();

    const [isActivatedTimer, setIsActivatedTimer] = useState(false);
    const [email, setEmail] = useState('');

    const onChangeEmail = (email: string) => setEmail(email);

    const sendCode = () => {
        if (!email) return;
        dispatch(requestChangeEmail(email))
        setIsActivatedTimer(true);
        toggleSendedCode();
        changeEmail(email);
    };

    const deactivateTimer = () => setIsActivatedTimer(false);

    const isDisabledSendButton = !email.includes('@') || isActivatedTimer;

    return (
        <>
            <EmailField email={email} onChange={onChangeEmail} />
            <EmailTimerField isActived={isActivatedTimer} deactivate={deactivateTimer} />

            <Button sx={styles.buttonSend} onPress={sendCode} isDisabled={isDisabledSendButton}>
                <ButtonText>Send code</ButtonText>
            </Button>
        </>
    );
};

const styles = {
    buttonSend: {
        mt: '$2',
        bgColor: '$green400',
        borderColor: '$black',
        borderWidth: 1,
    },
} as StyleSxProps;