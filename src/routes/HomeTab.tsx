import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
import { TabAppRootStackParamList } from './TabRoutes';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ScreenHeader } from '../modules/Layout/ScreenHeader';
import { AppHomeHeader } from '../modules/Layout/AppHomeHeader';
import { HomeHeaderRightSection } from '../modules/Home/Elements/HomeHeaderRightSection';
import { HubMenu } from '../modules/Home/Elements/HubMenu';
import { NotificationScreen } from '../screens/NotificationScreen';
import { PrivacyScreen } from '../screens/PrivacyScreen';
import { TermsScreen } from '../screens/TermsScreen';
import { BackIcon } from '../modules/Layout/Elements/BackIcon';
import { HeaderRightButton } from '../modules/Profile/Elements/HeaderRightButton';
import { ProfileEditScreen } from '../screens/ProfileEditScreen';
import { ProfileSavedScreen } from '../screens/ProfileSavedScreen';
import { ProfileSheduleScreen } from '../screens/ProfileSheduleScreen';
import { ProfileCoursesScreen } from '../screens/ProfileCoursesScreen';
import { ProfileEmailConfirmScreen } from '../screens/ProfileEmailConfirmScreen';
import { ProfileNewEmailScreen } from '../screens/ProfileNewEmailScreen';

export type HomeTabRootStackList = {
    HomeScreen: undefined;
    ProfileScreen: undefined;
    NotificationScreen: undefined;
    PrivacyScreen: undefined;
    TermsScreen: undefined;
    ProfileEditScreen: undefined;
    ProfileSavedScreen: undefined;
    ProfileSheduleScreen: undefined;
    ProfileCoursesScreen: undefined;
    ProfileEmailConfirmScreen: { email: string; };
    ProfileNewEmailScreen: undefined;
};

const Screen = createNativeStackNavigator<HomeTabRootStackList>();


export const HomeTab = () => {
    return (
        <Screen.Navigator
            initialRouteName='ProfileEditScreen'
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
                        RightSection={<HomeHeaderRightSection navigator={props.navigation} />}
                        LeftSection={<HubMenu navigator={props.navigation} />}
                    />
                }}
            />
            <Screen.Screen
                name='ProfileScreen'
                component={ProfileScreen}
                options={{
                    header: (props) => <AppHomeHeader
                        title='Profile'
                        RightSection={<HeaderRightButton navigator={props.navigation} />}
                        LeftSection={<BackIcon />}
                    />
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
            <Screen.Screen
                name='ProfileEditScreen'
                component={ProfileEditScreen}
                options={{
                    header: (props) => <AppHomeHeader
                        title='Edit profile'
                        LeftSection={<BackIcon />}
                    />
                }}
            />
            <Screen.Screen
                name='ProfileSavedScreen'
                component={ProfileSavedScreen}
                options={{}}
            />
            <Screen.Screen
                name='ProfileSheduleScreen'
                component={ProfileSheduleScreen}
                options={{}}
            />
            <Screen.Screen
                name='ProfileCoursesScreen'
                component={ProfileCoursesScreen}
                options={{}}
            />

            <Screen.Screen
                name='ProfileEmailConfirmScreen'
                component={ProfileEmailConfirmScreen}
                options={{
                    header: (props) => <AppHomeHeader
                        title='Email edit'
                        LeftSection={<BackIcon />}
                    />
                }}
            />
            <Screen.Screen
                name='ProfileNewEmailScreen'
                component={ProfileNewEmailScreen}
                options={{
                    header: (props) => <AppHomeHeader
                        title='New Email'
                        LeftSection={<BackIcon />}
                    />
                }}
            />
        </Screen.Navigator>
    );
};