import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { Modal, ActivityIndicator, Alert } from "react-native";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as FileSystem from "expo-file-system";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { NOGGIN_KEY } from '@/secret.js';

export default function Camera() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const ref = useRef<CameraView>(null);
  const [uri, setUri] = useState<string | null>(null);
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [facing, setFacing] = useState<CameraType>("back");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!permission) return;
    if (!permission.granted && !permission.canAskAgain) return;
    if (permission.status === "undetermined") {
      requestPermission();
    }
  }, [permission]);

  const takePicture = async () => {
    try {
      const photo = await ref.current?.takePictureAsync({ quality: 0.9, base64: true });
      if (!photo) {
        return;
      }
      setUri(photo.uri);
      setDataUrl(`data:image/jpeg;base64,${photo.base64}`);
    } catch (error) {
      console.log(error);
    }
  };

  const pickFromLibrary = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.9,
      base64: true,
    });
    if (!res.canceled) {
      const asset = res.assets[0];
      setUri(asset.uri);
      setDataUrl(`data:image/jpeg;base64,${asset.base64}`);
    }
  };

  const toggleFacing = () => {
    setFacing((prev) => (prev === "back" ? "front" : "back"));
  };

  /* ---------- confirm picture ---------- */
  // add identification logic here
  // can add a result page, or just navigate to the a landmark page directly based on the result
  const confirm = async () => {
    setIsLoading(true);
    if (!dataUrl) {
      console.warn("No image data to send.");
      return;
    }
    try {
      const responseText = await fetch(
        'https://noggin.rea.gent/developed-tarantula-3172',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer rg_v1_kv7x5yxjeit90nw8t79z0lmh7bopajh3qvn4_ngk`,
          },
          body: JSON.stringify({
            // fill variables here.
            // You can use an external URL or a data URL here.
            "var1": dataUrl,
          }),
        }
      ).then(response => response.text());
      const attraction = JSON.parse(responseText);
      if (attraction.attraction_id === "none-found") {
        setIsLoading(false);
        Alert.alert(
          "No attraction found",
          "Sorry, we couldn't find any attraction like this in San Francisco. Please try again.",
          [
            {
              text: "OK",
              onPress: () => {
                setUri(null);
                setDataUrl(null);
              }
            }
          ]
        );
        return;
      }
      setIsLoading(false);
      router.push({
                pathname: "../landmark/[lmid]",
                params: { lmid: attraction.attraction_id },
              });
    } catch (error) {
      setIsLoading(false);
      console.error("Error calling LLM:", error);
    }
  };


  if (!permission) return null;

  if (!permission.granted) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text style={{ textAlign: "center" }}>
          We need your permission to use the camera
        </Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </SafeAreaView>
    );
  }

  /* ---------- render ---------- */
  if (uri) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        {isLoading && (
          <Modal transparent visible={isLoading}>
            <View style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)"
            }}>
              <ActivityIndicator size="large" color="#fff" />
            </View>
          </Modal>
        )}
        <Image
          source={{ uri: uri }}
          className="flex-1 block object-contain"
          resizeMode="contain"
        />
        <View className="absolute bottom-8 inset-x-0 flex-row justify-evenly">
          <Pressable
            onPress={
              () => {
                setUri(null)
                setDataUrl(null)
              }

            }
            className="rounded-full bg-white/80 px-8 py-3"
          >
            <Text className="font-semibold">Retake</Text>
          </Pressable>
          <Pressable
            onPress={confirm}
            className="rounded-full bg-amber-500 px-8 py-3"
          >
            <Text className="font-semibold text-white">Confirm</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  /* ---------- camera ---------- */
  return (
    <SafeAreaView className="flex-1 bg-black">
      {isLoading && (
        <Modal transparent visible={isLoading}>
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          }}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </Modal>
      )}
      <CameraView
        ref={ref}
        style={styles.camera}
        facing={facing}
        mode="picture"
        responsiveOrientationWhenOrientationLocked
      />

      <View className="absolute bottom-10 inset-x-0 flex-row items-center justify-between px-12">
        <Pressable onPress={pickFromLibrary}>
          <AntDesign name="picture" size={34} color="white" />
        </Pressable>

        <Pressable onPress={takePicture}>
          {({ pressed }) => (
            <View
              className={`h-20 w-20 rounded-full border-[5px] border-white items-center justify-center ${
                pressed ? "opacity-60" : ""
              }`}
            >
              <View className="h-16 w-16 rounded-full bg-white" />
            </View>
          )}
        </Pressable>

        {/* flip camera */}
        <Pressable onPress={toggleFacing}>
          <FontAwesome6 name="rotate-left" size={32} color="white" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    width: "100%",
  },
});
