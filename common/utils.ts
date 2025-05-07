// util functions
import { Share, Platform, ToastAndroid, Alert } from "react-native";
import * as Linking from "expo-linking";

export async function shareDeepLink(
  path: string,
  title: string,
  prefix?: string
) {
  try {
    // build a deep link, e.g. "sfoguide://landmark/golden‑gate‑bridge"
    const url = Linking.createURL(path, { scheme: prefix });
    const result = await Share.share({
      message: `Check out “${title}” on SF Lens`,
      url,
    });

    if (result.action === Share.sharedAction) {
      const msg = "Shared successfully!";
      if (Platform.OS === "android") {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
      } else {
        Alert.alert(msg);
      }
    }
  } catch (error) {
    console.warn("Error sharing link:", error);
  }
}
