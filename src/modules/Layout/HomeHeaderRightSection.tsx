import { StackNavigationProp } from "@react-navigation/stack";
import { HomeTabRootStackList } from "../../routes/HomeTab";
import { Badge, BadgeText, Box, Button, HStack } from "@gluestack-ui/themed";
import { AvatarButton } from "./Elements/AvatarButton";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomButtonIcon } from "../Common/CustomButtonIcon";
import { StyleSxProps } from "../../constants/layout";

type HomeHeaderRightSectionType = {
    navigation: StackNavigationProp<HomeTabRootStackList, 'HomeScreen'>;
};

export const HomeHeaderRightSection: React.FC<HomeHeaderRightSectionType> = ({ navigation }) => {
    const onOpenNotifications = () => {
        navigation.push('NotificationScreen');
    };

    const onOpenProfile = () => {
        navigation.push('ProfileScreen');
    };

    return (
        <HStack alignItems="center" space="md">
            <Box sx={styles.notifyButtonWrapper}>
                <Button size="sm" sx={styles.buttonNotification} onPress={onOpenNotifications} >
                    <Badge sx={styles.badge} >
                        <BadgeText color="$white">2</BadgeText>
                    </Badge>
                    <CustomButtonIcon size={30}>
                        <MCIcon name='bell-outline' size={30} />
                    </CustomButtonIcon>
                </Button>
            </Box>
            <AvatarButton onOpenProfile={onOpenProfile}/>
        </HStack>
    );
};

const styles = {
    badge: {
        h: 25,
        w: 25,
        bg: "$orange400",
        borderRadius: "$full",
        zIndex: 1,
        variant: "solid",
        alignSelf: "flex-end",
        borderWidth: 1,
        borderColor: '$black',
        borderStyle: 'solid',
        position: 'absolute',
        top: -6,
        right: -6,
    },
    buttonNotification: {
        bgColor: 'transparent',
        borderRadius: '$full',
        aspectRatio: 1,
        ':active': {
            transform: [{ scale: 0.9 }],
        },
    },
    notifyButtonWrapper: {
        position: 'relative',

    },
} as StyleSxProps;