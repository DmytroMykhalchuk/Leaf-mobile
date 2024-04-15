import { DotsIcon } from '../../Icons/DotsIcon';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { HomeTabRootStackList } from '../../../routes/HomeTab';
import { HStack, Menu, MenuItem, MenuItemLabel } from '@gluestack-ui/themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { profileMenuList } from '../../../constants/layout';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
                            <HStack alignItems='center'>
                                <MCIcon name={item.iconName} size={26} />
                                <MenuItemLabel size='sm' ml={8} fontSize={16}>
                                    {item.label}
                                </MenuItemLabel>
                            </HStack>
                        </MenuItem>
                    ))
                }
            </Menu >
        </GestureHandlerRootView>
    );
};