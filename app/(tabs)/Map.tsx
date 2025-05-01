// MapScreen.tsx
// A React Native map screen using @gorhom/bottom-sheet with pan-down-to-close, sourcing pins from constants/attractions.

import React, { useRef, useState, useCallback, useMemo } from "react";
import { View, Text, Image, Pressable, Linking, Dimensions, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView, { Marker, PROVIDER_DEFAULT, Region } from "react-native-maps";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { attractions } from "@/constants/attractions";
import type { Attraction } from "@/common/types";

// Pin type derived from Attraction
interface Pin {
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  description: string;
  imageUrl: string;
}

export default function MapScreen() {
  const [region, setRegion] = useState<Region>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [selectedPin, setSelectedPin] = useState<Pin | null>(null);

  // BottomSheet ref and snap points
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["40%"], []);

  // Build pins array from attractions constant
  const pins: Pin[] = useMemo(
    () =>
      attractions.map((a: Attraction) => ({
        id: a.id,
        latitude: a.location.latitude,
        longitude: a.location.longitude,
        name: a.name,
        description: a.overview,
        imageUrl: a.images_landscape[0] || a.images_portrait || "",
      })),
    []
  );

  const openDirections = useCallback((lat: number, lng: number) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    Linking.openURL(url);
  }, []);

  const handleMarkerPress = useCallback((pin: Pin) => {
    setSelectedPin(pin);
    sheetRef.current?.expand();
  }, []);

  const handleClose = useCallback(() => {
    sheetRef.current?.close();
    setSelectedPin(null);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* Map */}
      <MapView
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={setRegion}
        showsPointsOfInterest={false}
        showsBuildings={false}
        showsIndoors={false}
      >
        {pins.map((pin) => (
          <Marker
            key={pin.id}
            coordinate={{ latitude: pin.latitude, longitude: pin.longitude }}
            onPress={() => handleMarkerPress(pin)}
          />
        ))}
      </MapView>

      {/* Bottom sheet */}
      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        handleIndicatorStyle={styles.indicator}
        onClose={handleClose}
      >
        <BottomSheetView style={styles.sheetContent}>
          {selectedPin ? (
            <>
              <View style={styles.imageWrapper}>
                <Image
                  source={{ uri: selectedPin.imageUrl }}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.title}>{selectedPin.name}</Text>
              <Text style={styles.description}>{selectedPin.description}</Text>
              <Pressable
                style={styles.button}
                onPress={() => openDirections(selectedPin.latitude, selectedPin.longitude)}
              >
                <Text style={styles.buttonText}>Get Directions</Text>
              </Pressable>
            </>
          ) : (
            <Text style={styles.placeholder}>Select a pin to see info</Text>
          )}
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  indicator: { backgroundColor: '#ccc', width: 40 },
  sheetContent: { flex: 1, alignItems: 'center', padding: 16 },
  imageWrapper: { width: '100%', height: 120, borderRadius: 8, overflow: 'hidden', marginBottom: 8 },
  image: { width: '100%', height: '100%' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  description: { fontSize: 14, color: '#555', textAlign: 'center', marginBottom: 12 },
  button: { backgroundColor: '#007AFF', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 6 },
  buttonText: { color: '#fff', fontWeight: '600' },
  placeholder: { fontSize: 14, color: '#888' },
});
