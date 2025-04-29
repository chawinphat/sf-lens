import Dropdown from "@/components/Dropdown";
import SearchBar from "@/components/SearchBar";
import TagList from "@/components/TagList";
import { useAuthStore } from "@/store/authStore";
import React, { useState } from "react";
import { useAuth } from "@/authentication/AuthContext";
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
import AttractionCard from "@/components/AttractionCard";
import { attractions } from "@/constants/attractions";

const Home = () => {
  const router = useRouter();
  const { user } = useAuth();

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const searchData = attractions.map((item) => item.name);
  const filtered = searchData.filter((d) =>
    d.toLowerCase().includes(query.toLowerCase())
  );

  const categories = [
    "All",
    "Culture",
    "History",
    "Building",
    "Museums",
    "Views",
    "Parks",
  ];

  const displayedLandmarks =
    selectedCategory === "All"
      ? attractions
      : attractions.filter((item) =>
          item.tags.includes(selectedCategory as any)
        );

  return (
    <SafeAreaView className="flex-1">
      {(open || focused) && (
        <Pressable
          className="absolute inset-0 z-40 bg-[rgba(0,0,0,0.001)]"
          onPress={() => {
            Keyboard.dismiss();
            setOpen(false);
            setFocused(false);
          }}
        />
      )}
      <View className="flex flex-row justify-between items-start px-5 mt-[10%] mx-5">
        <View className="flex flex-col gap-2">
          <Text className="text-3xl font-bold">Hi {user?.displayName || 'Guest'}, </Text>
          <Text className="text-xl font-semibold text-gray-500">
            Welcome to
          </Text>
          <Text className="text-5xl font-bold">San Francisco</Text>
        </View>

        {/* avatar generater */}
        <Image
          source={{
            uri: "https://avatar.iran.liara.run/public",
          }}
          className="h-16 w-16 block object-contain border-2 border-gray-700 rounded-full"
        />
      </View>

      <View className="mx-5 px-5 mt-[2%] relative z-30">
        <SearchBar
          searchByNameCode={(t) => {
            setQuery(t);
            setOpen(t.length > 0);
          }}
          onFocus={() => {
            setFocused(true);
          }}
          searchBarPlaceHolder="Search landmark…"
        />
        <Dropdown
          visible={open && filtered.length > 0}
          items={filtered}
          onSelect={(item) => {
            setQuery(item);
            // …do something…
          }}
          onClose={() => setOpen(false)}
        />
      </View>
      <View className="mt-[3%] mx-5 px-5">
        <TagList
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        ></TagList>
      </View>
      <View className="flex flex-row justify-between items-center mt-[3%] mx-5 px-5">
        <Text className="text-xl font-bold">LANDMARKS you might like</Text>
      </View>
      <View className="mt-[3%] mx-5 px-5">
        <FlatList
          data={displayedLandmarks}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <AttractionCard item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
