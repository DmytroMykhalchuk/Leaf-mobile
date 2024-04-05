import { Options } from "react-native-image-crop-picker";

const common = {
    width: 400,
    height: 400,
    cropping: true,
    includeExif: true,
    cropperToolbarTitle: 'Cropping...',
    mediaType: 'photo',
    forceJpg: true,
    cropperToolbarColor: 'black',
    cropperToolbarWidgetColor: 'green',
    cropperActiveWidgetColor: 'blue',
    cropperStatusBarColor: 'black',
    cropperTintColor: 'yellow',
};

export const croppingConfig = {
    gallery: {
        ...common,
    } as Options,
    camera: {
        ...common,
    }as Options,
};