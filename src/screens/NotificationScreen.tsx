import { StackScreenProps } from "@react-navigation/stack";
import { HomeTabRootStackList } from "../routes/HomeTab";
import { Text } from "@gluestack-ui/themed";

type NotificationScreenType = StackScreenProps<HomeTabRootStackList, 'NotificationScreen'>;

export const NotificationScreen: React.FC<NotificationScreenType> = ({ }) => {

    return (
        <>
            <Text>NotificationScreen</Text>
        </>
    );
};