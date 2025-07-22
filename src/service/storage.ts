import AsyncStorage from "@react-native-async-storage/async-storage";

export async function storeData(key: string, value: string){
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
        console.error("Error gravar dados", error); 
    }
}

export async function getData(key: string) {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.error("Error buscando dados", error);
        return null;
    }
}

export async function removeData(key: string) {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error("Error ao remover dados", error);
    }
}

export async function clearStorage() {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.error("Error ao limpar armazenamento", error);
    }
}