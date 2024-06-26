import { useState } from "react";
import { EmailConfirmBody } from "./Elements/EmailConfirmBody";
import { EmailConfirmFooter } from "./Elements/EmailConfirmFooter";
import { EmailConfrimHeader } from "./Elements/EmailConfrimHeader";
import { getUverifiedEmail } from "../../store/auth/authSelector";
import { useDispatch, useSelector } from "react-redux";
import { confirmEmailByProvider, requestEmailCode, verifyEmailCode } from "../../store/auth/authReducer";
import { GoogleUserResponse } from "../../store/auth/authTypes";

type EmailConfirmationType = {
};

export const EmailConfirmation: React.FC<EmailConfirmationType> = ({ }) => {
    const dispatch: any = useDispatch();

    const uverifiedEmail = useSelector(getUverifiedEmail);

    const [isSendedCode, setIsSendedCode] = useState(false);

    const sendCode = () => {
        if (!uverifiedEmail) return;
        dispatch(requestEmailCode(uverifiedEmail))
        setIsSendedCode(true);
    };

    const handleGoogleUser = (user: GoogleUserResponse) => {
        if (user.email !== uverifiedEmail) {
            return;
        }

        dispatch(confirmEmailByProvider(user.email, user.id));
    };

    const verifyCode = (code: string) => {
        uverifiedEmail && dispatch(verifyEmailCode(uverifiedEmail, +code));
    };

    return (
        <>
            <EmailConfrimHeader sendCode={sendCode} email={uverifiedEmail} />
            <EmailConfirmBody isInputAvailable={isSendedCode} verifyCode={verifyCode} />
            <EmailConfirmFooter uverifiedEmail={uverifiedEmail as string} handleGoogleUser={handleGoogleUser} />
        </>
    );
};