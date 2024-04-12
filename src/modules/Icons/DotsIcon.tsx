import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomButtonIcon } from '../Common/CustomButtonIcon';

type DotsIconType = {
};

export const DotsIcon: React.FC<DotsIconType> = ({ }) => {

    return (
        <CustomButtonIcon>
            <MCIcon name="dots-horizontal" size={30}/>
        </CustomButtonIcon>
    );
};