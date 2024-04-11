import { ImageOrVideo } from "react-native-image-crop-picker";
import { UserRoleType } from "../user/userTypes";

export type CreateAccountType = {
    email: string;
    nickname: string;
    avatar: ImageOrVideo;
    isEmailNotify: boolean;
    country: string;
    role: UserRoleType;
};

export type GoogleUserResponse = {
    email: string;
    familyName: string | null;
    givenName: string | null;
    id: string;
    name: string | null;
    photo: string | null;
};

export type GoogleSignType = {
    email: string | null;
    id: string | null;
};