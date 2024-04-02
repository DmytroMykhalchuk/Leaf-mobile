import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { memo } from 'react';
import { TabRoutes } from './TabRoutes';
import { Text } from '@gluestack-ui/themed';

export type AppRootStackParamList = {
    AppRoutes: undefined;
};

const HomeStack = createNativeStackNavigator<AppRootStackParamList>();

export type AppScreensType = 'AppRoutes';

export const AppRoutes = memo(() => {

    return (
        <HomeStack.Navigator initialRouteName={'AppRoutes'}
            screenOptions={{
                animation: 'slide_from_bottom',
            }}>
            <HomeStack.Screen
                name="AppRoutes"
                component={TabRoutes}
                options={{
                    headerShown: false,
                }}
            />
        </HomeStack.Navigator>
    );
});