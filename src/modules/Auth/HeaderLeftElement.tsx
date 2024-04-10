import MIcon from 'react-native-vector-icons/MaterialIcons';
import { CustomButtonIcon } from '../Common/CustomButtonIcon';
import { LanguageSelector } from '../Common/LanguageSelector';
import { Menu, MenuItem, MenuItemLabel } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

const menuList = [
    {
        key: 'Theme',
        textValue: 'Theme',
        iconName: 'dark-mode',
        label: 'Theme mode',
    },
    {
        key: 'Language',
        textValue: 'Language',
        iconName: 'language',
        label: 'Language',
    },
];

type HeaderLeftElementType = {
};

export const HeaderLeftElement: React.FC<HeaderLeftElementType> = ({ }) => {
    const [isOpenLanguageSelect, setIsOpenLanguageSelect] = useState(false);

    const onToggleLangugeSelect = () => setIsOpenLanguageSelect(!isOpenLanguageSelect);

    const onSelectChange = (keys: 'all' | Set<string | number>) => {
        if (keys === 'all')
            return;

        if (keys.has(menuList[0].key)) {
        } else if (keys.has(menuList[1].key)) {
            onToggleLangugeSelect();
        }
    };

    const TriggerButton = (props: any) => (
        <TouchableOpacity {...props}>
            <CustomButtonIcon>
                <MIcon name="settings" size={30} />
            </CustomButtonIcon>
        </TouchableOpacity>
    );

    return (
        <>
            <Menu
                placement="bottom right"
                selectionMode="single"
                onSelectionChange={onSelectChange}
                crossOffset={0}
                offset={-24}
                trigger={TriggerButton}
            >
                {
                    menuList.map((item) => (
                        <MenuItem key={item.key} textValue={item.textValue}>
                            <MIcon name={item.iconName} size={24} />
                            <MenuItemLabel size='sm' ml={8}>
                                {item.label}
                            </MenuItemLabel>
                        </MenuItem>
                    ))
                }
            </Menu >

            <LanguageSelector isOpen={isOpenLanguageSelect} onClose={onToggleLangugeSelect} />
        </>
    );
};