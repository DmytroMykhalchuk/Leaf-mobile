import AsyncStorage from "@react-native-async-storage/async-storage";

export const deleteDataFormStorage = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error({ error })
    }

    return;
}