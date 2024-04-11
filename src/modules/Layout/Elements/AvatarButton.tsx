import { useSelector } from "react-redux";
import { getProfilePicture } from "../../../store/user/userSelector";
import { Image, Pressable } from "@gluestack-ui/themed";
import { StyleSxProps } from "../../../constants/layout";

type AvatarButtonType = {
    onOpenProfile: () => void;
};

export const AvatarButton: React.FC<AvatarButtonType> = ({ onOpenProfile }) => {
    const avatar = useSelector(getProfilePicture);

    return (
        <Pressable
            sx={styles.button}
            hardShadow="3"
            onPress={onOpenProfile}
        >
            <Image
                source={{ uri: avatar }}
                alt="avatar"
                size="sm"
                sx={styles.image}
            />
        </Pressable>
    );
};


const styles = {
    button: {
        borderRadius: '$full',
        p: 2,
        ':active': {
            transform: [{ scale: 0.9 }],
        }
    },
    image: {
        borderRadius: '$full',
        aspectRatio: 1,
        width: 40,
        height: 40,

    },
} as StyleSxProps;