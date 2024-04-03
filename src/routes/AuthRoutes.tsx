import { AuthHomeScreen } from '../screens/AuthHomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrivacyScreen } from '../screens/PrivacyScreen';
import { TermsScreen } from '../screens/TermsScreen';

export type AuthRootStackList = {
    AuthHomeScreen: undefined;
    PrivacyScreen: undefined;
    TermsScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthRootStackList>();

type AuthRoutesType = {
};

export const AuthRoutes: React.FC<AuthRoutesType> = ({ }) => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'fade_from_bottom',
            }}
        >
            <Stack.Screen
                name="AuthHomeScreen"
                component={AuthHomeScreen}
            />
            <Stack.Screen
                name="PrivacyScreen"
                component={PrivacyScreen}
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="TermsScreen"
                component={TermsScreen}
                options={{
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    );
};