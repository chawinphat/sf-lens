import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { DEMO_USER_LOCATION } from "@/constants/location";

export function useUserLocation({ demo = true } = {}) {
  const [location, setLocation] = useState(DEMO_USER_LOCATION);

  useEffect(() => {
    if (demo) return; // skip real GPS in demo mode

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;
      const pos = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    })();
  }, [demo]);

  return location;
}
