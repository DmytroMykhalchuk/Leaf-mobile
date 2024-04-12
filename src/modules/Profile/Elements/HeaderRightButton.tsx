import { DotsIcon } from '../../Icons/DotsIcon';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { HomeTabRootStackList } from '../../../routes/HomeTab';
import { Menu, MenuItem, MenuItemLabel } from '@gluestack-ui/themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { profileMenuList } from '../../../constants/layout';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

type HeaderRightButtonType = {
    navigator: NativeStackNavigationProp<ParamListBase, string, undefined>;
};

export const HeaderRightButton: React.FC<HeaderRightButtonType> = ({ navigator }) => {
    const navigation = navigator as StackNavigationProp<HomeTabRootStackList, 'ProfileScreen'>;

    const onSelectChange = (keys: 'all' | Set<string | number>) => {
        if (keys === 'all')
            return;

        if (keys.has(profileMenuList[0].label)) {
            navigation.push(profileMenuList[0].path);
        }
    };

    const TriggerButton = (props: any) => (
        <TouchableOpacity {...props}>
            <DotsIcon />
        </TouchableOpacity>
    );
    return (
        <GestureHandlerRootView style={{ backgroundColor: 'transparent' }}>
            <Menu
                placement="bottom right"
                selectionMode="single"
                onSelectionChange={onSelectChange}
                crossOffset={0}
                offset={-24}
                trigger={TriggerButton}
            >
                {
                    profileMenuList.map((item) => (
                        <MenuItem key={item.label} textValue={item.label}>
                            <MenuItemLabel size='sm' ml={8}>
                                {item.label}
                            </MenuItemLabel>
                        </MenuItem>
                    ))
                }
            </Menu >
        </GestureHandlerRootView>
    );
};