import axios from "axios";
import { instance } from "./api"

export const commonApi = {
    checkNameUnique(nickname: string) {
        return instance.post('authorization/check-nickname-unique', { nickname })
            .then(response => response.data)
            .catch(error => {
                console.error(error, nickname);
            });
    },
    checkEmailUnique(email: string) {
        return instance.post('authorization/check-email-unique', { email })
            .then(response => response.data)
            .catch(error => {
                console.error(error, email);
            });
    },
};