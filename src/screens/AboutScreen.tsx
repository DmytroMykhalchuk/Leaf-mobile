import { Button, ButtonText, Text, VStack } from "@gluestack-ui/themed";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeTabRootStackList } from "../routes/HomeTab";
import { useNavigation } from "@react-navigation/native";

type AboutScreenType = StackScreenProps<HomeTabRootStackList, 'AboutScreen'>

export const AboutScreen: React.FC<AboutScreenType> = ({ navigation }) => {
    const nav = useNavigation();
    const onNavigate = () => {
        navigation.goBack();
    }

    return (
        <>
            <Text>ffgs</Text>
            <VStack alignItems="center" justifyContent="center" bgColor="$purple700" p={20}>
                <Button onPress={onNavigate}>
                    <ButtonText>back</ButtonText>
                </Button>
            </VStack>
        </>
    );
};