import {
  View,
  TextInput,
  Image,
  Platform,
  ViewStyle,
  ImageSourcePropType,
  Pressable,
  Keyboard,
} from "react-native";
import React, { useState } from "react";

interface SearchBarProps {
  searchBarStyle?: ViewStyle;
  searchByNameCode?: (text: string) => void;
  searchBarPlaceHolderColor?: string;
  searchBarPlaceHolder?: string;
  searchIcon?: ImageSourcePropType;
  searchClearIcon?: ImageSourcePropType;
  onFocus?: () => void;
}

export default function SearchBar({
  searchBarStyle,
  searchByNameCode,
  searchBarPlaceHolderColor = "#A9A9A9",
  searchBarPlaceHolder = "",
  searchIcon,
  searchClearIcon,
  onFocus,
}: SearchBarProps) {
  const [text, setText] = useState("");
  const searchSrc = searchIcon ?? require("@/assets/icons/ic_search.png");
  const clearSrc = searchClearIcon ?? require("@/assets/icons/ic_close.png");

  const onChange = (t: string) => {
    const trimmedText = t.trim();
    setText(trimmedText);
    searchByNameCode?.(trimmedText);
  };

  const onClear = () => {
    setText("");
    searchByNameCode?.("");
    Keyboard.dismiss();
  };

  return (
    <View
      className="px-4 flex-row items-center h-16 py-2 bg-white rounded-xl border border-gray-300"
      style={searchBarStyle}
    >
      {/* Search Icon */}
      <Image source={searchSrc} resizeMode="contain" className="w-5 h-5" />

      {/* Input */}
      <TextInput
        inputMode="search"
        enterKeyHint="done"
        blurOnSubmit
        value={text}
        onChangeText={onChange}
        onFocus={onFocus}
        placeholder={searchBarPlaceHolder}
        placeholderTextColor={searchBarPlaceHolderColor}
        className="flex-1 ml-2.5 h-fit outline-none"
      />

      {/* Clear button */}
      {text.length > 0 && (
        <Pressable onPress={onClear} className="ml-2">
          <Image source={clearSrc} resizeMode="contain" className="w-5 h-5" />
        </Pressable>
      )}
    </View>
  );
}
