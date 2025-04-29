import SearchBar from "@/components/SearchBar";
import TagList from "@/components/TagList";
import { useAuthStore } from "@/store/authStore";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  Keyboard,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import Avatar from "@/components/Avatar";
import AccountSettings from "@/components/AccountSettings";
import PlacesList from "@/components/PlacesList";
import ProfileButton from "@/components/ProfileButton";

// Importing these even though you normally wouldn't render full screens inside a small profile screen
import AppNavigator from "@/Navigation/AppNavigator";
import ExploreScreen from "@/Screens/ExploreScreen";
import HomeScreen from "@/Screens/HomeScreen";
import ProfileScreen from "@/Screens/ProfileScreen";
import App from "@/components/App"; // Be careful: if App.tsx is a main file, you usually DON'T import this into components

const Profile = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-col gap-2">

        {/* Avatar */}
        <Avatar
          size={100}
          url={null}
          onUpload={(uri: string) => {
            throw new Error("Function not implemented.");
          }}
        />

        {/* Account Settings */}
        <AccountSettings
          username={""}
          onUsernameChange={function (username: string): void {
            throw new Error("Function not implemented.");
          }}
          onPasswordChange={function (): void {
            throw new Error("Function not implemented.");
          }}
          onLogout={function (): void {
            throw new Error("Function not implemented.");
          }}
        />

        {/* Profile Button */}
        <ProfileButton />

        {/* Places Visited List */}
        <PlacesList
          title="Places Visited"
          places={[
            { id: "1", name: "Golden Gate Bridge", image: "https://example.com/golden_gate.jpg" },
            { id: "2", name: "Alcatraz Island", image: "https://example.com/alcatraz.jpg" },
            { id: "3", name: "Chinatown", image: "https://example.com/chinatown.jpg" },
            { id: "4", name: "Fisherman's Wharf", image: "https://example.com/fishermans_wharf.jpg" },
          ]}
          emptyMessage="You haven't visited any places yet."
        />

        {/* Wishlist Places */}
        <PlacesList
          title="Wishlist – Places to Visit in San Francisco"
          places={[
            { id: "5", name: "Twin Peaks", image: "https://example.com/twin_peaks.jpg" },
            { id: "6", name: "Muir Woods", image: "https://example.com/muir_woods.jpg" },
            { id: "7", name: "Palace of Fine Arts", image: "https://example.com/palace_of_fine_arts.jpg" },
            { id: "8", name: "de Young Museum", image: "https://example.com/de_young.jpg" },
          ]}
          emptyMessage="No wishlist places added yet."
        />

        {/* SearchBar */}
        <SearchBar />

        {/* TagList */}
        <TagList categories={[]} selectedCategory={""} />

        {/* Rendering imported screens/components (NOT recommended unless nested properly) */}
        {/* <ExploreScreen /> */}
        {/* <HomeScreen /> */}
        {/* <ProfileScreen /> */}
        {/* <AppNavigator /> */}git add .
        {/* <App /> */}

      </View>
    </SafeAreaView>
  );
};

export default Profile;



