import { fetchProfile } from '../store/user/userReducer';
import { getProfile } from '../store/user/userSelector';
import { HomeTabRootStackList } from '../routes/HomeTab';
import { ProfileContent } from '../modules/Profile/ProfileContent';
import { ProfileFooter } from '../modules/Profile/ProfileFooter';
import { ScrollView, VStack } from '@gluestack-ui/themed';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSxProps } from '../constants/layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

type ProfileScreenType = StackScreenProps<HomeTabRootStackList, 'ProfileScreen'>

export const ProfileScreen: React.FC<ProfileScreenType> = ({ navigation }) => {
    const profile = useSelector(getProfile);
    const dispatch: any = useDispatch();

    useEffect(() => {
        if (!profile?.picture) {
            dispatch(fetchProfile());
        }
    }, [profile]);

    return (
        <ScrollView sx={styles.wrapper}>
            <VStack space="md">
                <ProfileContent profile={profile!} />
                <ProfileFooter navigation={navigation} />
            </VStack>
        </ScrollView>
    );
};

const styles = {
    wrapper: {
        flex: 1,
        p: '$3',
    },
} as StyleSxProps;