import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Box } from '@gluestack-ui/themed';

type GoogleIconType = {
    height: number;
};

export const GoogleIcon: React.FC<GoogleIconType> = ({ height }) => (
    <Box
        bgColor="$white"
        borderRadius="$full"
        justifyContent="center" alignItems="center"
        aspectRatio={1}
        height={height}
    >
        <MCIcon name="google" size={16} style={{}} />
    </Box>
);