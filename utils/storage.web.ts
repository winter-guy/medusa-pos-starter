import AsyncStorage from '@react-native-async-storage/async-storage';

// expo-secure-store ships no web implementation (its web module is an empty object),
// so on web these fall back to AsyncStorage, which is backed by window.localStorage.
// Browsers have no keychain equivalent: values stored here are readable by any script
// on this origin, unlike the native builds which use Keychain/Keystore.

export async function getItemAsync(key: string): Promise<string | null> {
  return AsyncStorage.getItem(key);
}

export async function setItemAsync(key: string, value: string): Promise<void> {
  await AsyncStorage.setItem(key, value);
}

export async function deleteItemAsync(key: string): Promise<void> {
  await AsyncStorage.removeItem(key);
}
