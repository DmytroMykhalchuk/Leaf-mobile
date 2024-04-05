import { VStack, ButtonIcon } from "@gluestack-ui/themed";

type CustomButtonIconType = {
    size?: number;
    children: JSX.Element;
};

export const CustomButtonIcon: React.FC<CustomButtonIconType> = ({ children, size = 40 }) => (
    <ButtonIcon w={size} h={size}>
        <VStack
            w={size} h={size}
            alignItems='center' justifyContent='center'
        >
            {children}
        </VStack>
    </ButtonIcon>
);
