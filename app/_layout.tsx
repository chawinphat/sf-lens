import { Slot, Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  //   return <Stack />;
  return <Slot screenOptions={{ headerShown: false }} />;
}
