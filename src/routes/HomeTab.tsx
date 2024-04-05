import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
import { TabAppRootStackParamList } from './TabRoutes';
import { HomeScreen } from '../screens/HomeScreen';
import { AboutScreen } from '../screens/AboutScreen';

export type HomeTabRootStackList = {
    HomeScreen: undefined;
    AboutScreen: undefined;
};

const Screen = createNativeStackNavigator<HomeTabRootStackList>();

type HomeTabProps = StackScreenProps<TabAppRootStackParamList, 'HomeTab'>;

export const HomeTab: React.FC<HomeTabProps> = () => {
    return (
        <Screen.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                autoHideHomeIndicator: false,
                headerShown: true,
            }}>
            <Screen.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    // header: () => <></>
                }}
            />
                <Screen.Screen
                name='AboutScreen'
                component={AboutScreen}
                options={{
                    // header: () => <></>
                }}
            />
        </Screen.Navigator>
    );
};
