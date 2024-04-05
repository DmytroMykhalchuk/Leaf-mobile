import { AuthHomeScreen } from '../screens/AuthHomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrivacyScreen } from '../screens/PrivacyScreen';
import { TermsScreen } from '../screens/TermsScreen';
import { AuthCreateAccountScreen } from '../screens/AuthCreateAccountScreen';
import { ScreenHeader } from '../modules/Layout/ScreenHeader';
import { HeaderLeftElement } from '../modules/Auth/HeaderLeftElement';

export type AuthRootStackList = {
    AuthHomeScreen: undefined;
    PrivacyScreen: undefined;
    TermsScreen: undefined;
    AuthCreateAccountScreen: {
        email?: string;
    };
};

const Stack = createNativeStackNavigator<AuthRootStackList>();

type AuthRoutesType = {
};

export const AuthRoutes: React.FC<AuthRoutesType> = ({ }) => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                animation: 'fade_from_bottom',
            }}
            // initialRouteName='AuthHomeScreen'
            initialRouteName='AuthCreateAccountScreen'
        >
            <Stack.Screen
                name="AuthHomeScreen"
                component={AuthHomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="PrivacyScreen"
                component={PrivacyScreen}
                options={{
                }}
            />
            <Stack.Screen
                name="TermsScreen"
                component={TermsScreen}
                options={{
                }}
            />
            <Stack.Screen
                name="AuthCreateAccountScreen"
                component={AuthCreateAccountScreen}
                options={{
                    header: () => <ScreenHeader title='Create account' leftSection={<HeaderLeftElement />} />
                }}
            />
        </Stack.Navigator>
    );
};