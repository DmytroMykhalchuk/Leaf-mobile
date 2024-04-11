import { countries } from "../../constants/content";
import { StudentRole } from "../../constants/store";

export const authConfig = {
    sendCodeAgainAfter: 60,
    emailConfirmLength: 5,
    maxNicknaemLength: 50,
    defaultRole: StudentRole,
    defaultCountry: countries[0].name,
};