import { Box, HStack, Heading, Pressable, Text } from "@gluestack-ui/themed";
import { StyleSxProps } from "../../../constants/layout";
import Icon from 'react-native-vector-icons/MaterialIcons';

type ProceedButtonType = {
    handleSubmit: () => void;
    title: string;
    subtitle?: string;
    iconName?: 'arrow-forward' | 'update'
};

export const ProceedButton: React.FC<ProceedButtonType> = ({ handleSubmit, title, subtitle, iconName = 'arrow-forward' }) => {

    return (
        <Pressable
            sx={styles.wrapper}
            onPress={handleSubmit}
        >
            <HStack justifyContent="space-between" alignItems="center">
                <Box>
                    <Heading mb={"$2"}>{title}</Heading>
                    {subtitle && <Text>{subtitle}</Text>}
                </Box>

                <Box sx={styles.circle}>
                    <Icon name={iconName} size={26} color={'#fff'} />
                </Box>
            </HStack>
        </Pressable>
    );
};

const styles = {
    wrapper: {
        bgColor: '$green400',
        p: '$5',
        py: '$6',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderWidth: 1,
        borderColor: '$black',
        ':active': {
            opacity: 0.8,
        }
    },
    circle: {
        height: 50,
        aspectRatio: 1,
        bgColor: '$info400',
        borderRadius: '$full',
        borderColor: '$black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
} as StyleSxProps;