import { Spinner, VStack } from "@gluestack-ui/themed";

export const UIFullScreenLoader = () => {
   return (
      <VStack
         position={'absolute'}
         zIndex={999}
         width={'100%'}
         height={'100%'}
         alignItems={'center'}
         justifyContent={'center'}
         bg='#00000092'
      >
         <Spinner
            color={'$green600'}
            accessibilityLabel="Fetching"
            size='large'
         />
      </VStack>
   );
};
