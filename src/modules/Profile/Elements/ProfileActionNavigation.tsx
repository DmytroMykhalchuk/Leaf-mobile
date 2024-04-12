import { Box, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { StyleSxProps } from "../../../constants/layout";
import { NotebookIcon } from "../../Icons/NotebookIcon";

type ProfileActionNavigationType = {
    content: {
        Icon: JSX.Element,
        label: string;
        count: number;
    };
    onNavigate: () => void;
    bgColor: string;
};

export const ProfileActionNavigation: React.FC<ProfileActionNavigationType> = ({ content, onNavigate, bgColor }) => {

    return (
        <Pressable sx={styles.button} onPress={onNavigate}>
            <VStack sx={styles.wrapper} space="md">
                <Box sx={styles.iconWrapper} bgColor={bgColor}>
                    {content.Icon}
                </Box>
                <Text textAlign="center">{content.label} ({content.count})</Text>
            </VStack>
        </Pressable>
    );
};

const styles = {
    button: {
        ':active': {
            transform: [{ scale: 0.9 }]
        },
    },
    wrapper: {
        p: '$2',
    },
    iconWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        p: '$2',
        aspectRatio: 1,
        borderRadius: 1,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '$secondary500',
    }
} as StyleSxProps;