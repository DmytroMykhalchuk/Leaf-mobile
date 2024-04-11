import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import React from 'react';
import { Box } from '@gluestack-ui/themed';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Dimensions, StyleSheet } from 'react-native';
import { Heading, HStack, Pressable, VStack } from '@gluestack-ui/themed';
import { StyleSxProps } from '../../../constants/layout';
import { TabBarProps } from 'react-native-collapsible-tab-view';
import { TabName } from 'react-native-collapsible-tab-view/lib/typescript/src/types';
import { useColorScheme } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const TabBar = (props: TabBarProps<TabName>) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const Tabs = () => props.tabNames.map((tabName, index) => {
        const animatedStyles = useAnimatedStyle(() => {
            const containerWidth = windowWidth * 0.85;
            const tabWidth = containerWidth * 0.45;
            const result = props.indexDecimal.value - index;

            return {
                transform: [{ translateX: result * tabWidth, }],
            };
        });
        return (
            <Pressable
                key={tabName}
                sx={styles.header}
                onPress={() => props.onTabPress(tabName)}
            >
                <VStack >
                    <Heading size='sm'>
                        {(props.tabProps?.get(tabName)?.label || '') as string}
                    </Heading>
                </VStack>
                <VStack sx={styles.indicatorWrapper} >
                    <Box sx={styles.unActiveIndicator} />
                    <Animated.View style={[primaryStyles.indicatorWrapper, animatedStyles]}>
                        <Box sx={styles.indicator} />
                    </Animated.View>
                </VStack>
            </Pressable>
        )
    });

    return (
        <VStack sx={styles.tabsWrapper} style={backgroundStyle}>
            <HStack sx={styles.tabsRow}>
                <Tabs />
            </HStack >
        </VStack>
    );
};


const primaryStyles = StyleSheet.create({
    indicatorWrapper: {
        position: 'absolute',
        height: 4,
        top: 1,
        width: '100%',
    },
});

const styles = {
    header: {
        width: '45%',
    },
    tabsWrapper: {
        width: '100%',
        px: '7.5%',
        py: '$3',
    },
    tabsRow: {
        width: '100%',
        justifyContent: 'space-between',
        position: 'relative',
    },
    indicatorWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 6,
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
    },
    unActiveIndicator: {
        bgColor: '$secondary600',
        width: '100%',
        height: 2,
    },
    indicator: {
        bgColor: '$info400',
        height: '100%',
        width: '100%',
    },
} as StyleSxProps;