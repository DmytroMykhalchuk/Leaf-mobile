import { AppRootStackParamList } from './AppRoutes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { memo, useEffect } from 'react';
import { useColorMode, useToken } from '@gluestack-style/react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { darkMode } from '../constants/layout';
import { RedirectComponent } from '../modules/Utils/RedirectComponent';
import { HomeTab } from './HomeTab';
import { UserTab } from './UserTab';
import { Text } from '@gluestack-ui/themed';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MIcon from 'react-native-vector-icons/MaterialIcons';

export type TabAppRootStackParamList = {
    HomeTab: undefined;
    UserTab: undefined;
};

export type TabAppScreensType = 'HomeTab' | 'UserTab';

const Tab = createBottomTabNavigator<TabAppRootStackParamList>();

type TabRoutesType = {
    navigation: StackNavigationProp<AppRootStackParamList, 'AppRoutes'>;
};

export const TabRoutes: React.FC<TabRoutesType> = memo(({ navigation }) => {
    const { t: translation } = useTranslation();
    const dispatch: any = useDispatch();

    const colorMode = useColorMode();

    const resolvedSecondary = useToken('colors', 'green700');
    const resolvedPurple = useToken('colors', 'purple400');

    const isDarkMode = colorMode === darkMode;

    return (<>
        <RedirectComponent stack='App' />
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: isDarkMode ? '#fff' : resolvedSecondary,
                tabBarIconStyle: { fontSize: 20 },
                tabBarStyle: {
                    // borderTopWidth: 0,
                },
                tabBarBadgeStyle: {
                    backgroundColor: resolvedPurple,
                },
                headerShown: false,
            }}
            initialRouteName="HomeTab"
        >
            <Tab.Screen name='HomeTab'
                component={HomeTab}
                options={{
                    tabBarLabel: translation('home'),
                    tabBarIcon: ({ focused, size, color }) => <MCIcon color={color} name='home' size={size} />,
                }}
            />
            <Tab.Screen name='UserTab'
                component={UserTab}
                options={{
                    tabBarLabel: translation('user'),
                    tabBarIcon: ({ focused, size, color }) => <MIcon color={color} name='person' size={size} />,
                }}
            />
        </Tab.Navigator>
    </>
    );
});
