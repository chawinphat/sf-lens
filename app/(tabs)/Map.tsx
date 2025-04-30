// MapScreen.tsx
// A minimal React Native page displaying a full‑screen Google map with black background.

import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";

export default function MapScreen() {
  const [region, setRegion] = useState<Region>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={setRegion}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",  // Black background behind the map
  },
  map: {
    flex: 1,
    width: "100%",
    backgroundColor: "#000",  // Ensure map container is black
  },
});
