import { ScrollView, Text, VStack } from "@gluestack-ui/themed";
import { StyleSxProps } from "../constants/layout";
import { EditAccountForm } from "../modules/Form/EditAccountForm";
import { HomeTabRootStackList } from "../routes/HomeTab";
import { StackScreenProps } from "@react-navigation/stack";
import { Dimensions } from "react-native";


type ProfileEditScreenType = StackScreenProps<HomeTabRootStackList, 'ProfileEditScreen'>;

export const ProfileEditScreen: React.FC<ProfileEditScreenType> = ({ navigation }) => {
    const onNavigateChangeEmail = (email: string) => {
        navigation.push('ProfileEmailConfirmScreen', { email });
    };

    const navigateBack = () => {
        navigation.goBack();
    };

    return (
        <VStack sx={styles.wrapper}>
            <EditAccountForm
                onNavigateChangeEmail={onNavigateChangeEmail}
                navigateBack={navigateBack}
            />
        </VStack>
    );
};

const styles = {
    wrapper: {
        flex: 1,
    },
} as StyleSxProps;