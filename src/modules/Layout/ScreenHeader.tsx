import { Box, HStack, Heading } from "@gluestack-ui/themed";
import { StyleSxProps } from "../../constants/layout";
import { BackIcon } from "./Elements/BackIcon";

type ScreenHeaderType = {
    title: string;
    leftSection?: JSX.Element;
};

export const ScreenHeader: React.FC<ScreenHeaderType> = ({ title, leftSection }) => {

    return (
        <HStack sx={styles.wrapper}>
            <Box sx={styles.sideElements}>
                <BackIcon />
            </Box>
            <Box flex={6}>
                <Heading textAlign="center">{title}</Heading>
            </Box>
            <HStack sx={styles.sideElements} justifyContent="flex-end">
                {leftSection && leftSection}
            </HStack>
        </HStack>
    );
};

const styles = {
    wrapper: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        px: '$3',
    },
    sideElements: {
        flex: 1,
        maxWidth: 60,
    },

} as StyleSxProps