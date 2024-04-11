import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
import { TabAppRootStackParamList } from './TabRoutes';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ScreenHeader } from '../modules/Layout/ScreenHeader';
import { AppHomeHeader } from '../modules/Layout/AppHomeHeader';
import { HomeHeaderRightSection } from '../modules/Layout/HomeHeaderRightSection';
import { HubMenu } from '../modules/Layout/HubMenu';
import { NotificationScreen } from '../screens/NotificationScreen';
import { PrivacyScreen } from '../screens/PrivacyScreen';
import { TermsScreen } from '../screens/TermsScreen';

export type HomeTabRootStackList = {
    HomeScreen: undefined;
    ProfileScreen: undefined;
    NotificationScreen: undefined;
    PrivacyScreen: undefined;
    TermsScreen: undefined;
};

const Screen = createNativeStackNavigator<HomeTabRootStackList>();


export const HomeTab = () => {
    return (
        <Screen.Navigator
            initialRouteName='ProfileScreen'
            screenOptions={{
                autoHideHomeIndicator: false,
                headerShown: true,
            }}>
            <Screen.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    header: (props) => <AppHomeHeader
                        title='Home'
                        //@ts-ignore
                        RightSection={<HomeHeaderRightSection navigation={props.navigation} />}
                        //@ts-ignore
                        LeftSection={<HubMenu navigation={props.navigation} />}
                    />
                }}
            />
            <Screen.Screen
                name='ProfileScreen'
                component={ProfileScreen}
                options={{
                    // header: () => <></>
                }}
            />
            <Screen.Screen
                name='NotificationScreen'
                component={NotificationScreen}
                options={{
                    // header: () => <></>
                }}
            />
            <Screen.Screen
                name="PrivacyScreen"
                component={PrivacyScreen}
                options={{
                }}
            />
            <Screen.Screen
                name="TermsScreen"
                component={TermsScreen}
                options={{
                }}
            />
        </Screen.Navigator>
    );
};
