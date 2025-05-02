import React from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import { useBookmarkStore } from "@/store/bookmarkStore";
import { attractions } from "@/constants/attractions";
import AttractionCard from "@/components/AttractionCard";

export default function BookmarksScreen() {
  const bookmarks = useBookmarkStore((s) => s.bookmarks);

  const items = attractions.filter((a) => bookmarks.includes(a.id));

  const data: ((typeof items)[0] | null)[] = [...items];
  if (data.length % 2 !== 0) data.push(null);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={data}
        keyExtractor={(_, i) => i.toString()}
        numColumns={2}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 32,
        }}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginBottom: 16,
        }}
        renderItem={({ item }) =>
          item ? (
            <AttractionCard item={item} small />
          ) : (
            <View className="w-[170]" />
          )
        }
      />
    </SafeAreaView>
  );
}
