import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToStorage = async (key: string, data: any) => {
    try {
        await AsyncStorage.setItem(key, data);
    } catch (error) {
        console.log({ error })
    }

    return;
}