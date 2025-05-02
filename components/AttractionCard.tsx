import { Attraction } from "@/common/types";
import { useUserLocation } from "@/hooks/useUserLocation";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { getDistance } from "geolib";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  item: Attraction;
  small?: boolean;
};

const AttractionCard = ({ item, small }: Props) => {
  const userLoc = useUserLocation();

  let distanceText = "";
  if (userLoc) {
    const distance = getDistance(
      { latitude: userLoc.latitude, longitude: userLoc.longitude },
      { latitude: item.location.latitude, longitude: item.location.longitude }
    );

    const miles = distance / 1609.34; // convert meters to miles
    distanceText = `${miles.toFixed(1)} mi`;
  }

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "../landmark/[lmid]",
          params: { lmid: item.id },
        })
      }
      // className="w-[250] h-[400] bg-white rounded-3xl mr-5 overflow-hidden"
      className={
        small
          ? "w-[170] h-[272] bg-white rounded-3xl overflow-hidden"
          : "w-[250] h-[400] bg-white rounded-3xl mr-5 overflow-hidden"
      }
    >
      {typeof item.images_portrait === "string" &&
        item.images_portrait.length > 0 && (
          <>
            <Image
              source={{ uri: item.images_portrait }}
              className="w-full h-full object-cover rounded-3xl"
            />
            <View className="absolute bottom-0 w-full">
              <LinearGradient
                colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                className="absolute inset-0"
              >
                <Text className="text-lg font-semibold text-white px-4 pt-6">
                  {item.name}
                </Text>
                {userLoc && (
                  <View className="flex flex-row gap-x-1 px-4 pb-5 pt-1">
                    <Image
                      source={require("../assets/icons/ic_marker.png")}
                      className="w-4 h-4 block object-contain"
                    />
                    <Text className="text-white">{distanceText}</Text>
                  </View>
                )}
              </LinearGradient>
            </View>
          </>
        )}
    </Pressable>
  );
};

export default AttractionCard;
