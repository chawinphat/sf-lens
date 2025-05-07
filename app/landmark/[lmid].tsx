import { useRouter, useLocalSearchParams } from "expo-router";
import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "@/authentication/AuthContext";
import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
  SafeAreaView,
  NativeScrollEvent,
  TextInput,
} from "react-native";
import {Ionicons } from "@expo/vector-icons";
import { Attraction, Review } from "@/common/types";
import ReviewItem from "@/components/ReviewItem";
import { NativeSyntheticEvent } from "react-native";
import { attractions } from "@/constants/attractions";
import { useBookmarkStore } from "@/store/bookmarkStore";

import {
  db,
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  serverTimestamp
} from "@/authentication/firebase";

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
  const { user } = useAuth();
  const attraction = attractions.find((item) => item.id === lmid) as Attraction;
  if (!attraction) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-lg font-semibold">Attraction not found</Text>
      </SafeAreaView>
    );
  }

  const [index, setIndex] = useState(0);
  type Tab = "Overview" | "Special" | "Reviews";
  const tabs: Tab[] = ["Overview", "Special", "Reviews"];
  const [tab, setTab] = useState<Tab>("Overview");

  const [reviews, setReviews] = useState<Review[]>([]);
  const [newContent, setNewContent] = useState('');

 
  useEffect(() => {
    const reviewsCol = collection(db, 'reviews');
    const q = query(reviewsCol, where('attractionId', '==', lmid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const mapped: Review[] = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          attractionId: data.attractionId,
          userId: data.userId,
          username: data.username,
          userAvatarUrl: data.userAvatarUrl,
          content: data.content,
          createdAt: data.date && typeof data.date.toDate === 'function'
            ? data.date.toDate()
            : data.date instanceof Date
              ? data.date
              : new Date(),
        } as Review;
      });
      setReviews(mapped);
    });
    return () => unsubscribe();
  }, [lmid]);

  // add a new review to Firestore
  const handleAddReview = async () => {
    if (!user) {
      console.log('Cannot add review: no authenticated user');
      return;
    }
    if (!newContent.trim()) return;
    try {
      const reviewData = {
        attractionId: lmid,
        userId: user.uid,
        username:user.displayName,
        content: newContent.trim(),
        date: serverTimestamp(),
      };
      const docRef = await addDoc(collection(db, 'reviews'), reviewData);
      setNewContent('');
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

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
          
          <Text className="text-lg font-semibold mb-2">
            {reviews.length > 0 ? `Reviews (${reviews.length})` : "No reviews yet"}
          </Text>

          {/* review submission */}
          <View style={{ padding: 20, borderTopWidth: 1, borderColor: '#ccc' }}>
            <TextInput
              value={newContent}
              onChangeText={setNewContent}
              placeholder="Write your review..."
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 4, marginBottom: 10 }}
            />
            <Pressable onPress={handleAddReview} style={{ alignItems: 'center', padding: 10, backgroundColor: '#007AFF', borderRadius: 4 }}>
              <Text style={{ color: '#fff' }}>Submit Review</Text>
            </Pressable>
          </View>

          {/* list of reviews */}
          {reviews
            .slice()
            .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            .map((review) => (
              <ReviewItem
                key={review.id}
                review={review}
                author={{
                  uid: review.userId,
                  username: review.username,
                  avatarUrl: review.userAvatarUrl || "https://avatar.iran.liara.run/public",
                  savedAttractionIds: [],   // required by User type
                }}
                currentUserId={user.uid}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
