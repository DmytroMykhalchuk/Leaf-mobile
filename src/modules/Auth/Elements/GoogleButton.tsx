import { Button, ButtonIcon, ButtonText } from '@gluestack-ui/themed';
import { GoogleIcon } from '../../Icons/GoogleIcon';
import { StyleSxProps } from '../../../constants/layout';

type GoogleButtonType = {
    onGoogle: () => void;
};

export const GoogleButton: React.FC<GoogleButtonType> = ({ onGoogle }) => {
    const iconHeight = 24;

    return (
        <Button sx={styles.buttonGoogle} onPress={onGoogle}>
            <ButtonIcon height={iconHeight}>
                <GoogleIcon height={iconHeight} />
            </ButtonIcon>
            <ButtonText>Continue with Google</ButtonText>
        </Button>
    );
};

const styles = {
    buttonGoogle: {
        borderColor: '$black',
        borderWidth: 1,
        bgColor: '$orange300',
        gap: 16,
        alignItems: 'center',
        justifyContent: 'center',
        color: '$black',
        ':active': {
            bgColor: '$orange400',
        },
    },
} as StyleSxProps;