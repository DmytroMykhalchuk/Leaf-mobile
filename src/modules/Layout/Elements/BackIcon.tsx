import MIcon from 'react-native-vector-icons/MaterialIcons';
import { Button } from '@gluestack-ui/themed';
import { CustomButtonIcon } from '../../Common/CustomButtonIcon';
import { useNavigation } from '@react-navigation/native';

type BackIconType = {
    backHandle?: () => void;
};

export const BackIcon: React.FC<BackIconType> = ({ backHandle }) => {
    const navigation = useNavigation();

    const onBack = () => {
        navigation.goBack();
        backHandle && backHandle();
    };

    const iconSize = 20;

    return (
        <Button
            borderRadius="$full"
            aspectRatio={1}
            bgColor='$orange300'
            size='sm'
            onPress={onBack}
            sx={{
                borderWidth: 1,
                borderColor: '#000',
                ':active': {
                    bgColor: '$orange400',
                }
            }}
        >
            <CustomButtonIcon size={30}>
                <MIcon
                    name='arrow-back'
                    size={iconSize}
                    color={'#000'}
                />
            </CustomButtonIcon>
        </Button>
    );
};