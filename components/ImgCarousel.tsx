import React from "react";
import {
  ScrollView,
  View,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

type ImageCarouselProps = { images: any[] };

const ImgCarousel = ({ images }: ImageCarouselProps) => {
  const { width: screenWidth } = useWindowDimensions();
  const { height: screenHeight } = useWindowDimensions();
  const [currentImage, setCurrentImage] = useState(0);

  const HEIGHT = screenHeight * 0.7;

  return (
    <View className="w-full h-3/4 rounded-b-lg">
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const idx = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
          setCurrentImage(idx);
        }}
        scrollEventThrottle={16}
      >
        {images.map((img, idx) => (
          <ImageBackground
            key={idx}
            source={img}
            resizeMode="cover"
            style={{ width: screenWidth, height: HEIGHT }}
          >
            <LinearGradient
              colors={[
                "rgba(0,0,0,0.5)",
                "rgba(0,0,0,0.2)",
                "rgba(0,0,0,0.15)",
                "transparent",
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              locations={[0, 0.2, 0.5, 1]}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: HEIGHT * 0.5,
              }}
            />
          </ImageBackground>
        ))}
      </ScrollView>

      {/* pagination */}
      <View className="flex-row justify-center items-center py-2">
        {images.map((_, idx) => (
          <View
            key={idx}
            style={{
              width: currentImage === idx ? 9 : 6,
              height: currentImage === idx ? 9 : 6,
              bottom: 24,
              borderRadius: 5,
              backgroundColor: currentImage === idx ? "#fff" : "#ccc",
              marginHorizontal: 4,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default ImgCarousel;
