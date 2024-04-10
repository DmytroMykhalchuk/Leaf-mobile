import { AuthHomeScreen } from '../screens/AuthHomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrivacyScreen } from '../screens/PrivacyScreen';
import { TermsScreen } from '../screens/TermsScreen';
import { AuthCreateAccountScreen } from '../screens/AuthCreateAccountScreen';
import { ScreenHeader } from '../modules/Layout/ScreenHeader';
import { HeaderLeftElement } from '../modules/Auth/HeaderLeftElement';
import { AuthConfirmEmail } from '../screens/AuthConfirmEmail';
import { clearUnverifiedEmail } from '../store/auth/authReducer';
import { useDispatch } from 'react-redux';

export type AuthRootStackList = {
    AuthHomeScreen: undefined;
    PrivacyScreen: undefined;
    TermsScreen: undefined;
    AuthCreateAccountScreen: undefined;
    AuthConfirmEmail: undefined;
};

const Stack = createNativeStackNavigator<AuthRootStackList>();

type AuthRoutesType = {
};

export const AuthRoutes: React.FC<AuthRoutesType> = ({ }) => {
    const dispatch: any = useDispatch();

    const backEmailConfirmation = () => {
        dispatch(clearUnverifiedEmail());
    };

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                animation: 'fade_from_bottom',
            }}
            initialRouteName='AuthHomeScreen'
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

            <Stack.Screen
                name="AuthConfirmEmail"
                component={AuthConfirmEmail}
                options={{
                    header: () => <ScreenHeader
                        title='Confirm email'
                        leftSection={<HeaderLeftElement />}
                        backHandle={backEmailConfirmation}
                    />
                }}
            />
        </Stack.Navigator>
    );
};