import { Heading, VStack } from "@gluestack-ui/themed";
import { TextInput } from "react-native-gesture-handler";
import { ImageCrop } from "./ImageCrop";

type AccountDataType = {
};

export const AccountData: React.FC<AccountDataType> = ({ }) => {

    return (
        <VStack>
            <ImageCrop />
        </VStack>
    );
};