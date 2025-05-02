import { useRouter, useLocalSearchParams } from "expo-router";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
  SafeAreaView,
  NativeScrollEvent,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Attraction, Review, User, LatLng } from "@/common/types";
import ReviewItem from "@/components/ReviewItem";
import { NativeSyntheticEvent } from "react-native";
import { attractions } from "@/constants/attractions";
import { useBookmarkStore } from "@/store/bookmarkStore";

const { width: screenWidth } = Dimensions.get("window");

export function TabContent({ text }: { text: string }) {
  return (
    <View style={{ width: screenWidth }} className="flex-1">
      <ScrollView
        nestedScrollEnabled // for android
        keyboardDismissMode="on-drag"
        contentContainerStyle={{ padding: 20 }}
      >
        <Text className="text-gray-800 leading-7">{text}</Text>
      </ScrollView>
    </View>
  );
}

export default function LandmarkDetail() {
  const router = useRouter();
  const { lmid } = useLocalSearchParams<{ lmid: string }>();
  const attraction = attractions.find((item) => item.id === lmid) as Attraction;
  if (!attraction) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-lg font-semibold">Attraction not found</Text>
      </SafeAreaView>
    );
  }

  const dummyUsers: Record<string, User> = {
    user1: {
      uid: "user1",
      username: "Alice",
      avatarUrl: "https://avatar.iran.liara.run/public",
      savedAttractionIds: [],
    },
    user2: {
      uid: "user2",
      username: "Bob",
      avatarUrl: "https://avatar.iran.liara.run/public",
      savedAttractionIds: [],
    },
  };

  // dummy reviews
  const dummyReviews: Review[] = [
    {
      id: "r1",
      userId: "user1",
      attractionId: lmid as string,
      content:
        "Amazing place! The architecture is stunning and the view is breathtaking.",
      createdAt: new Date("2025-04-10"),
    },
    {
      id: "r2",
      userId: "user2",
      attractionId: lmid as string,
      content:
        "Loved it, but it was quite crowded when I visited during the weekend.",
      createdAt: new Date("2025-04-08"),
    },
  ];

  const [index, setIndex] = useState(0);
  type Tab = "Overview" | "Special" | "Reviews";
  const tabs: Tab[] = ["Overview", "Special", "Reviews"];
  const [tab, setTab] = useState<Tab>("Overview");
  const scrollRef = useRef<ScrollView>(null);

  const onTabPress = (t: Tab, idx: number) => {
    setTab(t);
    scrollRef.current?.scrollTo({ x: idx * screenWidth, animated: true });
  };

  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const page = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
    setTab(tabs[page]);
  };

  const has = useBookmarkStore((s) => s.hasBookmark(lmid as string));
  const toggle = useBookmarkStore((s) => s.toggle);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* header */}
      <View className="flex-row items-center justify-between px-5 py-3">
        <Pressable onPress={() => router.back()} className="p-2">
          <Ionicons name="arrow-back" size={24} color="#000" />
        </Pressable>
        <Text className="flex-1 text-center text-lg font-semibold">
          {attraction.name}
        </Text>
        <View className="flex-row space-x-4">
          {/* <Pressable onPress={() => {}} className="p-2">
            <Feather name="share-2" size={24} color="#000" />
          </Pressable> */}
          <Pressable onPress={() => toggle(lmid as string)} className="p-2">
            {/* <Feather name="bookmark" size={24} color="#000" /> */}
            <Ionicons
              name={has ? "bookmark" : "bookmark-outline"}
              size={24}
              color={has ? "#F59E0B" : "#000"}
            />
          </Pressable>
        </View>
      </View>

      {/* image carousel */}
      <View className="relative">
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => {
            const idx = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
            setIndex(idx);
          }}
          scrollEventThrottle={16}
        >
          {attraction.images_landscape.map((uri, i) => (
            <Image
              key={i}
              source={{ uri }}
              style={{ width: screenWidth, height: 250 }}
              className="object-cover"
            />
          ))}
        </ScrollView>
        <View className="absolute bottom-3 left-4 bg-black bg-opacity-50 px-2 py-1 rounded-md">
          <Text className="text-white text-sm">
            {index + 1}/{attraction.images_landscape.length}
          </Text>
        </View>
      </View>

      {/* tab bar */}
      <View className="flex-row justify-around mt-4 border-b border-gray-300">
        {tabs.map((t, i) => (
          <Pressable
            key={t}
            onPress={() => onTabPress(t, i)}
            className="py-2 flex-1 items-center"
          >
            <Text
              className={`text-base font-semibold ${
                tab === t ? "text-black" : "text-gray-500"
              }`}
            >
              {t}
            </Text>
            {tab === t && (
              <View className="mt-1 h-1 bg-black rounded-full w-8" />
            )}
          </Pressable>
        ))}
      </View>

      {/* swipable tabs */}
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
        className="flex-1"
      >
        {/* Overview */}
        <TabContent text={attraction.overview} />

        {/* Special */}
        <TabContent text={attraction.special || ""} />

        {/* Reviews */}
        <View style={{ width: screenWidth }} className="px-5 py-4">
          {dummyReviews.map((review) => {
            const author = dummyUsers[review.userId];
            return (
              <ReviewItem
                key={review.id}
                review={review}
                author={author}
                currentUserId="user1"
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
