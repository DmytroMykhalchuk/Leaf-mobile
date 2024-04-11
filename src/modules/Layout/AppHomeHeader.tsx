import { Box, Heading, HStack } from '@gluestack-ui/themed';
import { StyleSxProps } from '../../constants/layout';

type AppHomeHeaderType = {
    title: string;
    LeftSection?: JSX.Element;
    RightSection?: JSX.Element;
    backHandle?: () => void;
};

export const AppHomeHeader: React.FC<AppHomeHeaderType> = ({ title, LeftSection, RightSection, }) => {
    return (
        <HStack sx={styles.wrapper} alignItems='center'>
            <Box sx={styles.sideElements}>
                {LeftSection && LeftSection}
            </Box>
            <Box flex={6}>
                <Heading textAlign="center">{title}</Heading>
            </Box>
            <HStack sx={styles.sideElements} justifyContent="flex-end">
                {RightSection && RightSection}
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