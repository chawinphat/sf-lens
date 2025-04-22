import { View, Text, Image } from "react-native";
import { Review, User } from "@/common/types";

interface ReviewItemProps {
  review: Review;
  author: User;
  currentUserId: string;
}

export default function ReviewItem({
  review,
  author,
  currentUserId,
}: ReviewItemProps) {
  const isMine = author.uid === currentUserId;
  return (
    <View className="flex-row p-4 border-b border-gray-200">
      {/* avatar */}
      <Image
        source={{ uri: author.avatarUrl }}
        className="w-10 h-10 rounded-full mr-3 border border-gray-400"
      />
      <View className="flex-1">
        <View className="flex-row items-center">
          <Text className="font-semibold text-gray-800">{author.username}</Text>
          {isMine && (
            <Text className="ml-2 text-sm text-orange-600 font-medium">
              [You]
            </Text>
          )}
          <Text className="ml-auto text-xs text-gray-500">
            {review.createdAt.toLocaleDateString()}
          </Text>
        </View>
        {/* content */}
        <Text className="mt-1 text-gray-700">{review.content}</Text>
      </View>
    </View>
  );
}
