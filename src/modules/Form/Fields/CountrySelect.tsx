import SelectDropdown from 'react-native-select-dropdown';
import { countries, CountryType } from '../../../constants/content';
import { CountrySelectItem } from './CountrySelectItem';
import { StyleSheet } from 'react-native';
import { StyleSxProps } from '../../../constants/layout';
import { UIFormControl } from '../../Utils/UIFormControl';
import { useState } from 'react';
import { View } from '@gluestack-ui/themed';

type CountrySelectType = {
    onChange: (country: string) => void;
    country: string;
    error?: string;
};

export const CountrySelect: React.FC<CountrySelectType> = ({ onChange, country, error }) => {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);

    const renderButton = (selectedItem: CountryType | null, isOpened: boolean) => {
        const selected = selectedItem || selectedCountry;

        return (
            <View>
                <CountrySelectItem item={selected} />
            </View>
        );
    };

    const renderItem = (item: CountryType, index: number, isSelected: boolean) => {
        return (
            <View key={index}>
                <CountrySelectItem item={item} isBorderless textStyle={styles.dropDownStyle} />
            </View>
        );
    };

    const onSelect = (selectedItem: CountryType) => {
        onChange(selectedItem.name.toLocaleLowerCase());
    };

    return (
        <UIFormControl
            label="Country"
            error={error}
        >
            <SelectDropdown
                data={countries}
                onSelect={onSelect}
                renderButton={renderButton}
                renderItem={renderItem}
                showsVerticalScrollIndicator={true}
                dropdownStyle={stylesPrimary.dropdownMenuStyle}
                defaultValue={selectedCountry}
            />
        </UIFormControl>
    );
};
const stylesPrimary = StyleSheet.create({
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
    },
    countryButton: {
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    }
});

const styles = {
    dropDownStyle: {
        fontWeight: 'bold',
    }
} as StyleSxProps;