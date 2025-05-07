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
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Attraction, Review } from "@/common/types";
import ReviewItem from "@/components/ReviewItem";
import { NativeSyntheticEvent } from "react-native";
import { attractions } from "@/constants/attractions";
import { useBookmarkStore } from "@/store/bookmarkStore";
import { shareDeepLink } from "@/common/utils";

import {
  db,
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  serverTimestamp,
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
  const [newContent, setNewContent] = useState("");
  const [showReviewDialog, setShowReviewDialog] = useState(false);

  useEffect(() => {
    const reviewsCol = collection(db, "reviews");
    const q = query(reviewsCol, where("attractionId", "==", lmid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const mapped: Review[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          attractionId: data.attractionId,
          userId: data.userId,
          username: data.username,
          userAvatarUrl: data.userAvatarUrl,
          content: data.content,
          createdAt:
            data.date && typeof data.date.toDate === "function"
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
      console.log("Cannot add review: no authenticated user");
      return;
    }
    if (!newContent.trim()) return;
    try {
      const reviewData = {
        attractionId: lmid,
        userId: user.uid,
        username: user.displayName,
        userAvatarUrl: user.photoURL,
        content: newContent.trim(),
        date: serverTimestamp(),
      };
      const docRef = await addDoc(collection(db, "reviews"), reviewData);
      setNewContent("");
    } catch (error) {
      console.error("Error adding review:", error);
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
      <View className="relative items-center px-5 py-3 bg-gray-50">
        <Pressable
          onPress={() => router.back()}
          className="absolute left-5 p-2"
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </Pressable>

        <Text className="text-lg font-semibold">{attraction.name}</Text>

        <View className="absolute right-5 flex-row space-x-4">
          <Pressable
            onPress={() => shareDeepLink(`/landmark/${lmid}`, attraction.name)}
            className="p-2"
          >
            <Feather name="share-2" size={24} color="#000" />
          </Pressable>
          <Pressable onPress={() => toggle(lmid)} className="p-2">
            <Ionicons
              name={has ? "bookmark" : "bookmark-outline"}
              size={24}
              color={has ? "#FC622C" : "#000"}
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
        {tabs.map((t, i) => {
          const label =
            t === "Reviews" && reviews.length > 0
              ? `Reviews(${reviews.length})`
              : t;
          return (
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
                {label}
              </Text>
              {tab === t && (
                <View className="mt-1 h-1 bg-black rounded-full w-8" />
              )}
            </Pressable>
          );
        })}
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
        <View style={{ width: screenWidth }} className="relative flex-1 px-5">
          {reviews.length === 0 ? (
            <View className="flex-1 items-center justify-center">
              <Text className="text-gray-500">There is no review yet.</Text>
            </View>
          ) : (
            <ScrollView
              nestedScrollEnabled
              contentContainerStyle={{ paddingBottom: 100 }}
              className="flex-1"
            >
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
                      avatarUrl: review.userAvatarUrl,
                      savedAttractionIds: [],
                    }}
                    currentUserId={user?.uid || ""}
                  />
                ))}
            </ScrollView>
          )}

          {user && (
            <Pressable
              onPress={() => setShowReviewDialog(true)}
              className="
          absolute bottom-4 left-5 right-5
          bg-[#FC622C] py-3 rounded-2xl
          flex-row justify-center items-center
        "
            >
              <MaterialIcons
                name="rate-review"
                size={24}
                color="white"
                className="mr-2"
              />
              <Text className="text-white font-semibold">Write a Review</Text>
            </Pressable>
          )}
        </View>
      </ScrollView>
      {/* ── Add Review Dialog ─────────────────── */}
      {showReviewDialog && (
        <View className="absolute inset-0 bg-black/50 items-center justify-center">
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="w-full px-6"
          >
            <View className="bg-white rounded-xl p-6">
              <Text className="text-lg font-semibold mb-4">Write a Review</Text>
              <TextInput
                multiline
                numberOfLines={4}
                placeholder="Your thoughts..."
                value={newContent}
                onChangeText={setNewContent}
                className="border border-gray-300 rounded-lg px-4 py-2 mb-6"
              />
              <View className="flex-row justify-end space-x-4">
                <Pressable
                  onPress={() => setShowReviewDialog(false)}
                  className="px-4 py-2"
                >
                  <Text className="text-gray-600 font-medium">Cancel</Text>
                </Pressable>
                <Pressable
                  onPress={async () => {
                    await handleAddReview();
                    setShowReviewDialog(false);
                  }}
                  className="px-4 py-2 bg-[#FC622C] rounded-lg"
                >
                  <Text className="text-white font-medium">Submit</Text>
                </Pressable>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      )}
    </SafeAreaView>
  );
}
