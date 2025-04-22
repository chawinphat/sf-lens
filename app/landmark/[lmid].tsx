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

  // dummy attraction
  const loc: LatLng = {
    latitude: 37.7749,
    longitude: -122.4194,
  };
  const attraction: Attraction = {
    id: lmid,
    name: lmid,
    overview: `
    Tucked away from the bustling main streets, this hidden gem remains one of the city's best-kept secrets, waiting patiently for curious explorers to uncover its charm. Stepping into this landmark feels like crossing a threshold into another time, where stories from generations past linger gracefully within its carefully preserved walls.

Visitors who discover this enchanting place are immediately captivated by its intricate architecture, blending ornate details with quiet elegance, whispering tales of the visionary artists and craftsmen who shaped its design. Each archway, carved facade, and stained-glass window is thoughtfully positioned, inviting your eyes to wander and your imagination to roam freely.

Beyond its physical beauty, the landmark carries a fascinating story. Originally built by a visionary architect who dreamed of creating an oasis of culture and beauty, it once served as a gathering place for artists, thinkers, and dreamers who shaped the city's creative heritage. Today, while maintaining its historical authenticity, the space continues to inspire visitors—inviting them to pause, reflect, and appreciate moments of serene beauty amidst urban life.

Come explore this quiet sanctuary where history, beauty, and imagination merge into an unforgettable experience. Here, you won't find large crowds or hurried tourists—only the timeless charm and captivating stories of a hidden treasure that's waiting patiently for you to discover it.
    `.trim(),
    location: loc,
    images:
      lmid === "Transamerica Pyramid"
        ? [
            "https://images.unsplash.com/photo-1487186431619-869dc62557b6?q=80&w=2712&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1730993688407-38b8663208b7?q=80&w=2652&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ]
        : lmid === "Golden Gate Bridge"
        ? [
            "https://images.unsplash.com/photo-1719858403364-83f7442a197e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1675186253735-c1240f66dbc8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ]
        : [
            "https://images.unsplash.com/photo-1586796140676-ae3945168a97?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1540492102407-ef9c87892184?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ],
    special:
      "Pedestrian walkways open daily from 5 AM to 6 PM. Don't miss the spectacular sunset view!",
    tags: "Building",
  };

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
          <Pressable onPress={() => {}} className="p-2">
            <Feather name="bookmark" size={24} color="#000" />
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
          {attraction.images.map((uri, i) => (
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
            {index + 1}/{attraction.images.length}
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
