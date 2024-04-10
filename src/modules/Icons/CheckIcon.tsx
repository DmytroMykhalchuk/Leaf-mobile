import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Badge, BadgeIcon } from '@gluestack-ui/themed';
import { StyleSxProps } from '../../constants/layout';

type CheckIconType = {
    isChecked?: boolean;
};

export const CheckIcon: React.FC<CheckIconType> = ({ isChecked }) => {
    const bgColor = isChecked ? '$lime400' : '$light200';

    return (
        <Badge sx={styles.badge} bgColor={bgColor}>
            <BadgeIcon as={() => <Icon name="check" size={15} color={'#000'} />} />
        </Badge>
    );
};

const styles = {
    badge: {
        width: 30,
        height: 30,
        p: 0,
        borderColor: '$black',
        borderWidth: 1,
        borderRadius: "$full",
        zIndex: 1,
        variant: "solid",
        justifyContent: "center",
        alignItems: "center",
    },
} as StyleSxProps;