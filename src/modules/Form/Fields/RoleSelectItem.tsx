import { CountryType } from '../../../constants/content';
import { Image, Text, useToken } from '@gluestack-ui/themed';
import { StyleProp, StyleSheet, View } from 'react-native';
import { StyleSxProps } from '../../../constants/layout';
import { ViewStyle } from 'react-native';
import { SxProps } from '@gluestack-style/react/lib/typescript/types';

type RoleSelectItemType = {
    item: string;
    isBorderless?: boolean;
    textStyle?: Partial<SxProps<StyleProp<ViewStyle>>>;
};

export const RoleSelectItem: React.FC<RoleSelectItemType> = ({ item, isBorderless, textStyle }) => {
    const greyResolved = useToken('colors', 'light400');

    const selectButtonStyle = {
        ...stylesPrimary.countryButton,
        borderColor: isBorderless ? 'transparent' : greyResolved,
    };

    const label=item[0].toUpperCase()+ item.substring(1);
    
    return (
        <View style={selectButtonStyle}>
            <Text sx={textStyle}>{label}</Text>
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