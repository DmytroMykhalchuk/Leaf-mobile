import { Box, Button, ButtonText, Text, VStack } from "@gluestack-ui/themed";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeTabRootStackList } from "../routes/HomeTab";
import { View } from "react-native";

type ProfileScreenType = StackScreenProps<HomeTabRootStackList, 'ProfileScreen'>

export const ProfileScreen: React.FC<ProfileScreenType> = ({ navigation }) => {
    const onNavigate = () => {
        navigation.goBack();
    }

    return (
        <>
            <Text>ProfileScreen</Text>
            <VStack alignItems="center" justifyContent="center" bgColor="$purple700" p={20}>
                <Button onPress={onNavigate}>
                    <ButtonText>back</ButtonText>
                </Button>
            </VStack>
            <VStack
                // flex={1}
                // alignItems="center"
                // justifyContent="center"
                hardShadow="4"
            >
                <Box
                    sx={{
                        // bgColor:'$violet500',
                        width: 180,
                        height: 130,
                        borderWidth: 1,
                        // borderColor:'$black',
                        // shadowOffset:{width:-40,height:60},
                        // p:0,
                        // elevation: 10,

                    }}
                    // softShadow="4"
                    // shadowOpacity={'$10'}
                    p={12}
                    style={{
                        // shadowColor: '#000',
                        // shadowOffset: { width: -4, height: 70 },
                        // shadowOpacity: 1,
                        // shadowRadius: 100,
                        // elevation: 21
                    }}
                >
                    {/* <Box bgColor="$green400" flex={1}>
                        <Text>dasf</Text>
                    </Box> */}
                </Box>
                <View style={{
                    width: 180,
                    height: 130,
                    borderWidth: 1,
                    shadowColor: '#000',
                    elevation: 5,
                }}>
                    {/* <Box
                        sx={{
                            width: 400,
                            height: 10,
                            bgColor: '$amber300'
                        }}
                    /> */}

                </View>
            </VStack>
        </>
    );
};