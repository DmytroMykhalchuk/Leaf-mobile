import { useState } from "react";
import { EmailConfirmBody } from "./Elements/EmailConfirmBody";
import { EmailConfirmFooter } from "./Elements/EmailConfirmFooter";
import { EmailConfrimHeader } from "./Elements/EmailConfrimHeader";

type EmailConfirmationType = {
};

export const EmailConfirmation: React.FC<EmailConfirmationType> = ({ }) => {
    const [isSendedCode, setIsSendedCode] = useState(false)

    const sendCode = () => {
        setIsSendedCode(true);
    };

    const verifyCode = (code: string) => {
        console.log({code})
     };

    return (
        <>
            <EmailConfrimHeader sendCode={sendCode} />
            <EmailConfirmBody isInputAvailable={isSendedCode} verifyCode={verifyCode} />
            <EmailConfirmFooter />
        </>
    );
};