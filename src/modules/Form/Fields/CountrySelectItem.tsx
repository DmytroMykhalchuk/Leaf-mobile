import { CountryType } from '../../../constants/content';
import { Image, Text, useToken } from '@gluestack-ui/themed';
import { StyleProp, StyleSheet, View } from 'react-native';
import { SxProps } from '@gluestack-style/react/lib/typescript/types';
import { ViewStyle } from 'react-native';
import { SvgUri } from 'react-native-svg';

type CountrySelectItemType = {
    item: CountryType;
    isBorderless?: boolean;
    textStyle?: Partial<SxProps<StyleProp<ViewStyle>>>;
};

export const CountrySelectItem: React.FC<CountrySelectItemType> = ({ item, isBorderless, textStyle }) => {
    const greyResolved = useToken('colors', 'light400');

    const selectButtonStyle = {
        ...stylesPrimary.countryButton,
        borderColor: isBorderless ? 'transparent' : greyResolved,
    };

    return (
        <View style={selectButtonStyle}>
            <SvgUri
                width={20}
                height={'100%'}
                uri={item.image}
            />
            <Text sx={textStyle}>{item.name}</Text>
        </View>
    );
};

const stylesPrimary = StyleSheet.create({
    countryButton: {
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },
});