import { Box, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import { AuthSliderItem } from "../../../constants/content";
import { StyleSxProps } from "../../../constants/layout";

type SliderItemType = {
    item: AuthSliderItem;
    height: number;
};

export const SliderItem: React.FC<SliderItemType> = ({ item, height }) => {

    return (
        <VStack minHeight={height * 0.9} sx={styles.mainWrapper}>
            <Box sx={styles.imageWrapper}>
                <Image
                    source={{ uri: item.image, }}
                    alt=""
                    sx={styles.image}
                />
            </Box>
            <Heading sx={styles.title}>
                {item.title}
            </Heading>
            <Text>
                {item.description}
            </Text>
        </VStack>
    );
};

const styles = {
    mainWrapper:{
        alignItems:'center',
        justifyContent:'center',
        zIndex:10,
    },
    title: {
        textAlign: 'center',
        mb: 8,
    },
    imageWrapper: {
        height: '50%',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        p: '5%',
        width: '100%',
    },
    image: {
        height: '100%',
        width: '90%',
    }
} as StyleSxProps;