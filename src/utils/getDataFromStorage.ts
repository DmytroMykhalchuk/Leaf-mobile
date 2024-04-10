import AsyncStorage from "@react-native-async-storage/async-storage";

export const getDataFromStorage = async (key: string) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        console.error({ error })
    }

    return;
}