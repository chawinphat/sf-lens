// MapScreen.tsx
// A React Native map screen using @gorhom/bottom-sheet, sourcing pins from constants/attractions, styled with nativewind like Home.

import React, { useRef, useState, useCallback, useMemo } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Linking,
  FlatList,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView, { Marker, PROVIDER_DEFAULT, Region } from "react-native-maps";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { attractions } from "@/constants/attractions";
import type { Attraction } from "@/common/types";
import { useRouter } from "expo-router";
import { useBookmarkStore } from "@/store/bookmarkStore";
import SearchBar from "@/components/SearchBar";

export default function MapScreen() {
  const router = useRouter();
  const [region, setRegion] = useState<Region>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [selected, setSelected] = useState<Attraction | null>(null);

  // Bookmark state & toggle
  const has = useBookmarkStore((s) =>
    selected ? s.hasBookmark(selected.id) : false
  );
  const toggle = useBookmarkStore((s) => s.toggle);

  // Search state
  const [query, setQuery] = useState<string>("");
  const filtered = useMemo(
    () =>
      query.trim() === ""
        ? []
        : attractions.filter((a) =>
            a.name.toLowerCase().includes(query.toLowerCase())
          ),
    [query]
  );

  const sheetRef = useRef<BottomSheet>(null);
  const mapRef = useRef<MapView>(null);

  const snapPoints = ["40%"];

  const openDirections = useCallback((lat: number, lng: number) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    Linking.openURL(url);
  }, []);

  const onMarkerPress = useCallback(
    (id: string) => {
      const item = attractions.find((a) => a.id === id) || null;
      if (!item) return;

      mapRef.current?.animateToRegion(
        {
          latitude: item.location.latitude,
          longitude: item.location.longitude,
          latitudeDelta: region.latitudeDelta,
          longitudeDelta: region.longitudeDelta,
        },
        300 /* duration in ms */
      );
      setSelected(item);
      sheetRef.current?.expand();
    },
    [region]
  );

  const selectAttraction = useCallback(
    (item: Attraction) => {
      onMarkerPress(item.id);
      setQuery("");
    },
    [onMarkerPress]
  );

  const onClose = useCallback(() => {
    sheetRef.current?.close();
    setSelected(null);
  }, []);

  return (
    <GestureHandlerRootView className="flex-1">
      {/* Map Container */}
      <View className="flex-1 w-full">
        {/* Search Bar */}
        <View className="absolute top-16 w-full px-4 z-10">
          <SearchBar
            searchBarPlaceHolder="Search attractions..."
            searchByNameCode={setQuery}
          />
          {filtered.length > 0 && (
            <View className="bg-white rounded-b-xl overflow-hidden shadow">
              <FlatList
                data={filtered}
                keyExtractor={(item) => item.id}
                style={{ maxHeight: 200 }}
                renderItem={({ item }) => (
                  <Pressable
                    className="px-4 py-3 border-b border-gray-200"
                    onPress={() => selectAttraction(item)}
                  >
                    <Text className="text-base">{item.name}</Text>
                  </Pressable>
                )}
              />
            </View>
          )}
        </View>

        <MapView
          ref={mapRef}
          provider={PROVIDER_DEFAULT}
          style={{ flex: 1 }}
          initialRegion={region}
          onRegionChangeComplete={setRegion}
          showsPointsOfInterest={false}
          showsBuildings={false}
          showsIndoors={false}
          customMapStyle={[
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ]}
        >
          {attractions.map((a) => (
            <Marker
              key={a.id}
              coordinate={a.location}
              onPress={() => onMarkerPress(a.id)}>
              <View className="items-center">
                <Image
                  source={{ uri: a.images_landscape[0] }}
                  style={{ width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: "#fff" }}  /> 
              </View>
            </Marker>
          ))}
        </MapView>
      </View>

      {/* Bottom Sheet */}
      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        enableContentPanningGesture={false}
        enableOverDrag={false}
        onClose={onClose}
        backgroundStyle={{ borderRadius: 24, backgroundColor: "white" }}
        handleIndicatorStyle={{ width: 60, height: 6, backgroundColor: "#ccc" }}
      >
        <BottomSheetView className="flex-1 pt-1 px-5">
          {selected ? (
            <View className="flex-1 flex-col">
              {/* Title */}
              <Text className="text-2xl font-bold -mt-2 mb-3">
                {selected.name}
              </Text>

              {/* Actions */}
              <View className="flex-row space-x-2 mb-3">
                <Pressable
                  className="px-3 py-3 mr-2 bg-orange-500/20 rounded-full"
                  onPress={() =>
                    openDirections(
                      selected.location.latitude,
                      selected.location.longitude
                    )
                  }
                >
                  <Text className="text-md font-medium text-orange-800">
                    Directions
                  </Text>
                </Pressable>
                <Pressable
                  className="px-3 py-3 mr-2 bg-orange-500/20 rounded-full"
                  onPress={() => selected && toggle(selected.id)}
                >
                  <Text className="text-md font-medium text-orange-800">
                    {has ? "Saved" : "Save"}
                  </Text>
                </Pressable>
                <Pressable className="px-3 py-3 mr-2 bg-orange-500/20 rounded-full">
                  <Text className="text-md font-medium text-orange-800">
                    Share
                  </Text>
                </Pressable>
                <Pressable
                  className="self-start px-4 py-3 bg-orange-700 rounded-full"
                  onPress={() => {
                    router.push({
                      pathname: "../landmark/[lmid]",
                      params: { lmid: selected.id },
                    });
                  }}
                >
                  <Text className="text-md font-medium text-white">
                    More Details
                  </Text>
                </Pressable>
              </View>

              {/* Image Carousel */}
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={true}
                className="space-x-3 mb-6"
              >
                {selected.images_landscape.map((uri, i) => (
                  <Image
                    key={i}
                    source={{ uri }}
                    className="w-60 h-35 rounded-xl mr-2"
                    resizeMode="cover"
                  />
                ))}
              </ScrollView>

              {/* Overview (fills remaining space, clipped) */}
              <View className="flex-1 overflow-hidden">
                <Text
                  className="text-lg text-gray-700"
                  numberOfLines={10}
                  ellipsizeMode="tail"
                >
                  {selected.overview}
                </Text>
              </View>
            </View>
          ) : (
            <Text className="text-center text-gray-500">
              Tap a pin to see details
            </Text>
          )}
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
