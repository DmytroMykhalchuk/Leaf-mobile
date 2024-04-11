import SelectDropdown from 'react-native-select-dropdown';
import { CoachRole, StudentRole } from '../../../constants/store';
import { RoleSelectItem } from './RoleSelectItem';
import { StyleSheet } from 'react-native';
import { StyleSxProps } from '../../../constants/layout';
import { UIFormControl } from '../../Utils/UIFormControl';
import { View } from '@gluestack-ui/themed';

type RoleSelectType = {
    onChange: (country: string) => void;
    role: string;
    error?: string;
};

export const RoleSelect: React.FC<RoleSelectType> = ({ onChange, role, error }) => {
    const renderButton = (selectedItem: string, isOpened: boolean) => {
        const selected = selectedItem || role;

        return (
            <View>
                <RoleSelectItem item={selected} />
            </View>
        );
    };

    const renderItem = (item: string, index: number, isSelected: boolean) => {
        return (
            <View key={index}>
                <RoleSelectItem item={item} isBorderless textStyle={styles.dropDownStyle} />
            </View>
        );
    };

    const onSelect = (selectedItem: string) => {
        onChange(selectedItem.toLocaleLowerCase());
    };

    return (
        <UIFormControl
            label="Role"
            error={error}
        >
            <SelectDropdown
                data={[StudentRole, CoachRole]}
                onSelect={onSelect}
                renderButton={renderButton}
                renderItem={renderItem}
                showsVerticalScrollIndicator={true}
                dropdownStyle={stylesPrimary.dropdownMenuStyle}
                defaultValue={role}
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
        borderStyle: 'solid',
        borderRadius: 4,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },
});

const styles = {
    dropDownStyle: {
        fontWeight: 'bold',
    },
} as StyleSxProps;