import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CustomButtonIcon } from "../../Common/CustomButtonIcon";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Menu, MenuItem, MenuItemLabel, Pressable } from "@gluestack-ui/themed";
import { StyleSxProps } from "../../../constants/layout";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeTabRootStackList } from "../../../routes/HomeTab";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

type MenuListItemType = {
    label: string;
    path: 'PrivacyScreen' | 'TermsScreen';
};

const menuList: MenuListItemType[] = [
    {
        label: 'Privacy',
        path: 'PrivacyScreen',
    },
    {
        label: 'Terms',
        path: 'TermsScreen',
    },
];

type HubMenuType = {
    navigator: NativeStackNavigationProp<ParamListBase, string, undefined>;
};

export const HubMenu: React.FC<HubMenuType> = ({ navigator }) => {
    const navigation = navigator as StackNavigationProp<HomeTabRootStackList, 'HomeScreen'>;
    
    const onSelectChange = (keys: 'all' | Set<string | number>) => {
        if (keys === 'all')
            return;

        console.log(keys)
        if (keys.has(menuList[0].label)) {
            navigation.push(menuList[0].path);
        } else if (keys.has(menuList[1].label)) {
            navigation.push(menuList[1].path);
        }
    };

    const TriggerButton = (props: any) => (
        <Pressable {...props} sx={styles.button}>
            <CustomButtonIcon>
                <MCIcon name="gamepad-circle-outline" size={30} color={'#fff'} />
            </CustomButtonIcon>
        </Pressable>
    );

    return (
        <GestureHandlerRootView style={{ backgroundColor: 'transparent' }}>
            <Menu
                placement="bottom right"
                selectionMode="single"
                onSelectionChange={onSelectChange}
                crossOffset={0}
                offset={-20}
                trigger={TriggerButton}
            >
                {
                    menuList.map((item) => (
                        <MenuItem key={item.label} textValue={item.label}>
                            <MenuItemLabel size='sm' ml={8} fontSize={"$md"}>
                                {item.label}
                            </MenuItemLabel>
                        </MenuItem>
                    ))
                }
            </Menu >
        </GestureHandlerRootView>
    );
};

const styles = {
    button: {
        bgColor: '$info400',
        borderRadius: '$full',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '$black',

        ':active': {
            bgColor: '$info500',
        }
    },
} as StyleSxProps;