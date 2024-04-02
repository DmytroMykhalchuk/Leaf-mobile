import { Text } from "@gluestack-ui/themed";
import { StackScreenProps } from "@react-navigation/stack";
import { UserTabRootStackList } from "../routes/UserTab";

type UserType = StackScreenProps<UserTabRootStackList, 'UserScreen'>;

export const UserScreen: React.FC<UserType> = ({ navigation, route }) => {

    console.log(route)
    
    return (
        <>
            <Text>User</Text>
        </>
    );
};