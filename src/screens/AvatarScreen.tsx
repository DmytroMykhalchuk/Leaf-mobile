import { Text } from "@gluestack-ui/themed";
import { StackScreenProps } from "@react-navigation/stack";
import { UserTabRootStackList } from "../routes/UserTab";

type AvatarScreenType = StackScreenProps<UserTabRootStackList, 'AvatarScreen'>;

export const AvatarScreen: React.FC<AvatarScreenType> = ({ navigation, route }) => {

    console.log(route)

    return (
        <>
            <Text>Avatar</Text>
        </>
    );
};