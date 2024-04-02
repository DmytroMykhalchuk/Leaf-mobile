import { Button, ButtonText, Text, VStack } from "@gluestack-ui/themed";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeTabRootStackList } from "../routes/HomeTab";
import { useNavigation } from "@react-navigation/native";

type HomeScreenType = StackScreenProps<HomeTabRootStackList, 'HomeScreen'>

export const HomeScreen: React.FC<HomeScreenType> = ({ navigation }) => {

    const nav = useNavigation();
    const onNavigate = () => {
        //@ts-ignor
        // nav.push('UserTab', { params: { id: 2 } });
        // navigation.navigate('AvatarScreen')
        // navigation.navigate('UserScreen',{params:{id:2,}});
    }

    return (
        <>
            <Text>ffgs</Text>
            <VStack alignItems="center" justifyContent="center" bgColor="$purple700" p={20}>
                <Button onPress={onNavigate}>
                    <ButtonText>To user</ButtonText>
                </Button>
            </VStack>
        </>
    );
};