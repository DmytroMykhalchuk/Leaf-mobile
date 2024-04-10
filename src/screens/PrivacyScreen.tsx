import { Heading, Text, VStack } from "@gluestack-ui/themed";

type PrivacyScreenType = {
};

export const PrivacyScreen: React.FC<PrivacyScreenType> = ({ }) => {

    return (
        <VStack p={8}>
            <Heading>Privacy policy</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla laudantium ratione? Quisquam iure est suscipit quo nulla illo corporis, culpa natus ipsam laborum quod numquam velit quos iste ea.</Text>
        </VStack>
    );
};