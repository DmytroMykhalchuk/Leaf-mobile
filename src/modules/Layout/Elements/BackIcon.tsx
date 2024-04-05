import MIcon from 'react-native-vector-icons/MaterialIcons';
import { CustomButtonIcon } from '../../Common/CustomButtonIcon';
import { Button } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

type BackIconType = {
};

export const BackIcon: React.FC<BackIconType> = ({ }) => {
    const navigation = useNavigation();

    const onBack = () => {
        navigation.goBack();
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
                borderStyle: 'solid',
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