import { HStack, Heading, Image, Text, VStack, useToken } from "@gluestack-ui/themed";
import { CountryText } from "../Common/CountryText";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProfileType } from "../../store/user/userTypes";
import { StyleSxProps } from "../../constants/layout";
import { View } from "react-native";

type ProfileContentType = {
    profile: ProfileType;
};

export const ProfileContent: React.FC<ProfileContentType> = ({ profile }) => {
    const greenResolved = useToken('colors', 'green500');

    return (
        <View>
            <HStack justifyContent="center" alignItems="center">
                <Image
                    source={{ uri: profile?.picture }}
                    alt="Avatar"
                    size="2xl"
                    sx={styles.profilePicture}
                />
            </HStack>
            <VStack space="sm">
                <Heading textAlign="center">{profile?.nickname}</Heading>
                <CountryText country={profile?.country} />
                <HStack sx={styles.roleWrapper} space="md">
                    <MCIcon name="school" color={greenResolved} size={24} />
                    <Text>Student</Text>
                </HStack>
            </VStack>
        </View>
    );
};

const styles = {
    profilePicture: {
        borderRadius: '$full',
        borderColor: '$orange300',
        borderWidth: 4,
        mb: '$2',
    },
    roleWrapper: {
        borderTopColor: '$warmGray500',
        borderTopWidth: 1,

        borderBottomColor: '$warmGray500',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        py: '$2',
    },
} as StyleSxProps;