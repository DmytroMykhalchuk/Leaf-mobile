import { Button, ButtonText, Text } from "@gluestack-ui/themed";
import { StackScreenProps } from "@react-navigation/stack";
import { UserTabRootStackList } from "../routes/UserTab";
import { useDispatch } from "react-redux";
import { logout } from "../store/user/userReducer";

type UserType = StackScreenProps<UserTabRootStackList, 'UserScreen'>;

export const UserScreen: React.FC<UserType> = ({ navigation, route }) => {
    const dispatch: any = useDispatch();

    console.log(route)
    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <Text>User</Text>
            <Button onPress={onLogout}>
                <ButtonText>logout</ButtonText>
            </Button>
        </>
    );
};