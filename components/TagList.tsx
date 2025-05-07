import { ScrollView, Text, TouchableOpacity } from "react-native";

interface TagListProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory?: (category: string) => void;
}

const TagList = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: TagListProps) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((cat) => {
        if (cat === selectedCategory) {
          return (
            <TouchableOpacity
              onPress={() => onSelectCategory?.(cat)}
              key={cat}
              className="bg-[#FC622C] py-3 px-4 rounded-2xl mr-2"
            >
              <Text className="text-white font-semibold">{cat}</Text>
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity
              onPress={() => onSelectCategory?.(cat)}
              key={cat}
              className="bg-white py-3 px-4 rounded-2xl mr-2"
            >
              <Text className="text-gray-600 font-semibold">{cat}</Text>
            </TouchableOpacity>
          );
        }
      })}
    </ScrollView>
  );
};

export default TagList;
