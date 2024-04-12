import { Box, HStack, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import { StyleSxProps } from "../../constants/layout";
import { ProfileActionNavigation } from "./Elements/ProfileActionNavigation";
import { NotebookIcon } from "../Icons/NotebookIcon";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeTabRootStackList } from "../../routes/HomeTab";
import { FoledrIcon } from "../Icons/FoledrIcon";
import { CalendarIcon } from "../Icons/CalendarIcon";

type ProfileFooterType = {
    navigation: StackNavigationProp<HomeTabRootStackList, 'ProfileScreen'>;
};

export const ProfileFooter: React.FC<ProfileFooterType> = ({ navigation }) => {

    const onNavigateSaved = () => {
        navigation.push('ProfileSavedScreen');
    };

    const onNavigateShedule = () => {
        navigation.push('ProfileSheduleScreen');
    };

    const onNavigateCourses = () => {
        navigation.push('ProfileCoursesScreen');
    };

    return (
        <VStack space="md">
            <HStack space="md">
                <Box flex={1}>
                    <ProfileActionNavigation
                        content={{
                            count: 3,
                            Icon: <NotebookIcon size={50} />,
                            label: 'Saved',
                        }}
                        bgColor="$info200"
                        onNavigate={onNavigateSaved}
                    />
                </Box>
                <Box flex={1}>
                    <ProfileActionNavigation
                        content={{
                            count: 1,
                            Icon: <FoledrIcon size={50} />,
                            label: 'Courses',
                        }}
                        bgColor="$amber200"
                        onNavigate={onNavigateCourses}
                    />
                </Box>
                <Box flex={1}>
                    <ProfileActionNavigation
                        content={{
                            count: 11,
                            Icon: <CalendarIcon size={50} />,
                            label: 'Shedule',
                        }}
                        bgColor="$green200"
                        onNavigate={onNavigateShedule}
                    />
                </Box>
            </HStack>
        </VStack>
    );
};

const styles = {
} as StyleSxProps;