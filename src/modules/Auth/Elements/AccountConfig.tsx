import { Box, CheckIcon, Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel, Heading, Input, InputField, InputIcon, InputSlot, VStack } from "@gluestack-ui/themed";
import { TextInput } from "react-native-gesture-handler";
import { ImageCrop } from "./ImageCrop";
import { UIFormControl } from "../../Utils/UIFormControl";
import { StyleSxProps } from "../../../constants/layout";
import MIcon from 'react-native-vector-icons/MaterialIcons';


type AccountConfigType = {
    toggleEmailNotidication: () => void;
    isEmailNotification: boolean;
};

export const AccountConfig: React.FC<AccountConfigType> = ({ toggleEmailNotidication, isEmailNotification }) => {
    const Icon = (props: any) => isEmailNotification
        ? <MIcon name='check' color={'#000'} {...props} />
        : null;

    return (
        <VStack px={'$4'} space={"lg"}>

            <Checkbox
                value=""
                aria-label="receive email notification"
                isChecked={isEmailNotification}
                onChange={toggleEmailNotidication}
            >
                <CheckboxIndicator sx={styles.indicator}>
                    <CheckIcon as={Icon} />
                </CheckboxIndicator>
                <CheckboxLabel>Email notification</CheckboxLabel>
            </Checkbox>

        </VStack>
    );
};

const styles = {
    indicator: {
        color: '#000',
        _icon: {
            color: '#0f0',
        },
        mr: "$2",
        borderColor: "$black",
        borderWidth: 1,
        bgColor: "$orange200",
        ':checked': {
            bgColor: "$orange300",

        }
    },

} as StyleSxProps;