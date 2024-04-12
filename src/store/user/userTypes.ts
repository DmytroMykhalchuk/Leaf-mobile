export type ProfileType = {
    nickname: string;
    email: string;
    picture: string;
    role: UserRoleType,
    country: string;
};

export type UserRoleType = 'student' | 'coach';