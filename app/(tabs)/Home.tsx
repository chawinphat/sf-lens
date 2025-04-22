import Dropdown from "@/components/Dropdown";
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

const Home = () => {
  const router = useRouter();
  const { user } = useAuthStore();

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const searchData = [
    "golden gate bridge",
    "alcatraz island",
    "pier-39",
    "fishermans wharf",
  ]; // replace w/filtered data
  const filtered = searchData.filter((d) =>
    d.toLowerCase().includes(query.toLowerCase())
  );

  const categories = ["All", "Culture", "History", "Building", "Museums"];

  const landmarks = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1519627745017-8f1c7ec8d37d?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Building",
      name: "Transamerica Pyramid",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1719858403455-9a2582eca805?q=80&w=2598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Culture",
      name: "Golden Gate Bridge",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1576912656434-b1a36d08fb3e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Culture",
      name: "Alcatraz Island",
    },

    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1610478125655-52767177cca9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Building",
      name: "Pier 39",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1619045786810-2e1027a9f324?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Culture",
      name: "Fisherman's Wharf",
    },
  ]; // replace w/filtered data

  const displayedLandmarks =
    selectedCategory === "All"
      ? landmarks
      : landmarks.filter((landmark) => landmark.tag === selectedCategory);

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
      <View className="flex flex-row justify-between items-center px-5 mt-20 mx-5">
        <View className="flex flex-col gap-2">
          <Text className="text-3xl font-bold">Hi, {user?.username}</Text>
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
          className="h-16 w-16 block object-contain border-2 border-gray-700 rounded-full mt-10"
        />
      </View>

      <View className="mx-5 px-5 mt-6 relative z-30">
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
      <View className="mt-3 mx-5 px-5">
        <TagList
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        ></TagList>
      </View>
      <View className="flex flex-row justify-between items-center mt-3 mx-5 px-5">
        <Text className="text-xl font-bold">LANDMARKS you might like</Text>
      </View>
      <View className="mt-3 mx-5 px-5">
        <FlatList
          data={displayedLandmarks}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "../landmark/[lmid]",
                  params: { lmid: item.name },
                })
              }
              className="w-[250] h-[400] bg-white rounded-3xl mr-5 overflow-hidden"
            >
              <Image
                source={{ uri: item.image }}
                className="w-full h-full object-cover rounded-3xl"
              />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
