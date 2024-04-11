import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Actionsheet,
    ActionsheetBackdrop,
    ActionsheetContent,
    ActionsheetDragIndicator,
    ActionsheetDragIndicatorWrapper,
    ActionsheetItem,
    ActionsheetItemText,
    Badge,
    Box,
    HStack,
    Image,
    Pressable
} from '@gluestack-ui/themed';
import { BadgeIcon } from '@gluestack-ui/themed';
import { croppingConfig } from '../../../configs/auth/cropping';
import { StyleSxProps } from '../../../constants/layout';
import { useState } from 'react';
import { Text } from '@gluestack-ui/themed';

type ImageCropType = {
    onChangeAvatar: (avatar: ImageOrVideo) => void;
    error?: string;
    handleChange: (trigger: string) => void;
};

export const ImageCrop: React.FC<ImageCropType> = ({ handleChange, onChangeAvatar, error }) => {
    const [isOpenSheet, setIsOpenSheet] = useState(false);
    const [savedIamge, setSavedIamge] = useState(null as null | ImageOrVideo)

    const toggleSheet = () => setIsOpenSheet((prev: boolean) => !prev);

    const onOpenCameraCrop = () => {
        toggleSheet();

        ImagePicker.openCamera({
            ...croppingConfig.camera
        }).then(image => {
            setSavedIamge(image)
            onChangeAvatar(image)
            handleChange('')
        });
    };

    const onOpenGalleryCrop = () => {
        toggleSheet();

        ImagePicker.openPicker({
            ...croppingConfig.gallery
        }).then(image => {
            setSavedIamge(image)
            onChangeAvatar(image)
            handleChange('')
        });
    };

    return (
        <>
            <HStack sx={styles.wrapper}>
                <Pressable onPress={toggleSheet} position="absolute">
                    <Badge sx={styles.badge}>
                        <BadgeIcon as={() => <MCIcon name="camera" size={16} color={'#fff'} />} />
                    </Badge>
                    <Box sx={styles.avatarPlaceholder}
                    >
                        {
                            savedIamge?.path && <Image
                                aspectRatio={1}
                                source={{ uri: savedIamge?.path }}
                                alt="avatar"
                            />
                        }
                    </Box >
                </Pressable>
            </HStack>
            {error && <Text textAlign='center' color='$error400'>{error}</Text>}
            <Actionsheet
                isOpen={isOpenSheet}
                onClose={toggleSheet}
                zIndex={999}
                closeOnOverlayClick
            >
                <ActionsheetBackdrop />
                <ActionsheetContent h="100%" zIndex={999}>
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>
                    <ActionsheetItem onPress={onOpenCameraCrop} >
                        <MCIcon name='camera-outline' size={30} />
                        <ActionsheetItemText>Camera</ActionsheetItemText>
                    </ActionsheetItem>
                    <ActionsheetItem onPress={onOpenGalleryCrop} >
                        <MCIcon name='folder-image' size={30} />
                        <ActionsheetItemText>Gallery</ActionsheetItemText>
                    </ActionsheetItem>
                </ActionsheetContent>
            </Actionsheet>
        </>
    );
};

const styles = {
    wrapper: {
        height: 80,
        justifyContent: 'center',
    },

    badge: {
        width: 30,
        height: 30,
        p: 0,
        bg: "$info400",
        borderRadius: "$full",
        zIndex: 1,
        variant: "solid",
        position: "absolute",
        bottom: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
    },

    avatarPlaceholder: {
        borderRadius: '$full',
        height: 80,
        aspectRatio: 1,
        bgColor: "$backgroundLight600",
        overflow: "hidden",
    },
} as StyleSxProps;