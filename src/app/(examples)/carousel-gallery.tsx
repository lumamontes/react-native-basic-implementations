import * as React from "react";
import { useState } from "react";
import { Dimensions, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { interpolate } from "react-native-reanimated";
import Carousel, { TAnimationStyle } from "react-native-reanimated-carousel";
import { SlideItem } from "@/components/slideItem";
import { carouselImages } from "@/constants/carousel_images";
import * as ImagePicker from 'expo-image-picker';

const window = Dimensions.get("screen");
const PAGE_WIDTH = window.width;

function Index() {
  const [images, setImages] = useState(carouselImages);
  const itemSize = 240;
  const centerOffset = PAGE_WIDTH / 2 - itemSize / 2;

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const newImage = { uri: result.assets[0].uri };
        setImages(prevImages => [...prevImages, newImage]);
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  const animationStyle: TAnimationStyle = React.useCallback(
    (value: number) => {
      "worklet";

      const itemGap = interpolate(
        value,
        [-3, -2, -1, 0, 1, 2, 3],
        [-50, -30, 0, 0, 0, 30, 50]
      );

      const translateX =
        interpolate(value, [-1, 0, 1], [-itemSize, 0, itemSize]) +
        centerOffset -
        itemGap;

      const translateY = interpolate(
        value,
        [-1, -0.5, 0, 0.5, 1],
        [60, 45, 40, 45, 60]
      );

      const scale = interpolate(
        value,
        [-1, -0.5, 0, 0.5, 1],
        [0.8, 0.85, 1.2, 0.85, 0.8]
      );

      const opacity = interpolate(
        value,
        [-1, -0.5, 0, 0.5, 1],
        [0.3, 0.5, 1, 0.5, 0.3]
      );

      return {
        transform: [
          { translateX },
          { translateY },
          { scale }
        ],
        opacity
      };
    },
    [centerOffset]
  );

  return (
    <View
      id="carousel-component"
      style={styles.container}
    >
      <Carousel
        width={itemSize}
        height={itemSize}
        style={{
          width: PAGE_WIDTH,
          height: PAGE_WIDTH,
        }}
        loop
        data={images}
        renderItem={({ index }) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => {
              console.log(index);
            }}
            containerStyle={{ flex: 1 }}
            style={{ flex: 1 }}
          >
            <View
              style={{
                backgroundColor: "white",
                flex: 1,
                borderRadius: 50,
                justifyContent: "center",
                overflow: "hidden",
                alignItems: "center",
              }}
            >
              <View style={{ width: "100%", height: "100%" }}>
                <SlideItem index={index} source={images[index]} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
        customAnimation={animationStyle}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={pickImage}
      >
        <Text style={styles.addButtonText}>+ Add Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Index;
