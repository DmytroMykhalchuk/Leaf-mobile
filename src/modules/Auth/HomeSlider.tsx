import { Box, Center, HStack, Image, Text, VStack, useToken } from "@gluestack-ui/themed";
import { useEffect, useRef, useState } from "react";
import { Dimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PageIndicator } from "react-native-page-indicator";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { SliderItem } from "./Elements/SliderItem";
import { AuthSliderItem, authSliderData } from "../../constants/content";
import { StyleSxProps } from "../../constants/layout";
import { CaroselDecaration } from "./Elements/CaroselDecaration";

type RenderItemType = {
    item: AuthSliderItem;
    index: number;
};

const window = Dimensions.get("window");
const screenWidth = window.width;
const screenHeight = window.height;

const carouselOptions = {
    vertical: false,
    width: screenWidth * 0.85 - 24,
    height: screenHeight * 0.5,
    loop: true,
    style: {
        width: screenWidth * 0.85 - 24,
        height: screenHeight * 0.5,
    },
    autoPlay: false,
};


type HomeSliderType = {
};

export const HomeSlider: React.FC<HomeSliderType> = ({ }) => {
    const ref = useRef<ICarouselInstance>(null);
    const resolvedOrange = useToken('colors', 'orange400');

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const onSnapToItem = (index: number) => {
        index !== currentIndex && setCurrentIndex(index);
    };
    
    const sliderItemHeight = carouselOptions.height - 32;

    const renderItem = ({ item, index }: RenderItemType): JSX.Element => (
        <SliderItem
            height={sliderItemHeight}
            item={item}
            key={index}
        />
    );

    return (
        <GestureHandlerRootView>
            <VStack sx={styles.mainWrapper}>
                <CaroselDecaration />
                <Box sx={styles.carouselWrapper}>
                    <Carousel
                        {...carouselOptions}
                        ref={ref}
                        data={authSliderData}
                        onSnapToItem={onSnapToItem}
                        renderItem={renderItem}
                    />
                    <HStack justifyContent="center">
                        <PageIndicator
                            size={8}
                            color={'#fff'}
                            activeColor={resolvedOrange}
                            count={authSliderData.length}
                            current={currentIndex}
                        />
                    </HStack>
                </Box>
            </VStack>
        </GestureHandlerRootView>
    );
};

const styles = {
    mainWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        pt: 12,
        position: 'relative',
        height: carouselOptions.height,
    },
    carouselWrapper: {
        bgColor: '$white',
        height: carouselOptions.height,
        width: '85%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '$black',
        padding: 12,
        borderRadius: 42,
        zIndex: 1,
    },
} as StyleSxProps;