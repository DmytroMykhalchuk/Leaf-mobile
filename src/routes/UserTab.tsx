import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
import { TabAppRootStackParamList } from './TabRoutes';
import { UserScreen } from '../screens/UserScreen';
import { AvatarScreen } from '../screens/AvatarScreen';

export type UserTabRootStackList = {
    UserScreen: { userId: number };
    AvatarScreen: undefined;
};

export type UserTabTypes = 'UserScreen';

const Screen = createNativeStackNavigator<UserTabRootStackList>();

type UserTabProps = StackScreenProps<TabAppRootStackParamList, 'UserTab'>;

export const UserTab: React.FC<UserTabProps> = () => {
    return (
        <Screen.Navigator
            initialRouteName='UserScreen'
            screenOptions={{
                autoHideHomeIndicator: false,
                headerShown: true,
            }}>
            <Screen.Screen
                name='UserScreen'
                component={UserScreen}
                options={{
                    // header: () => <></>
                }}
            />
            <Screen.Screen
                name='AvatarScreen'
                component={AvatarScreen}
                options={{
                    // header: () => <></>
                }}
            />
        </Screen.Navigator>
    );
};
