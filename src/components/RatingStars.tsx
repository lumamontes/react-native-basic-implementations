import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

// Componente para avaliação com estrelas
interface RatingStarsProps {
  rating: number | null;
  setRating?: (value: number) => void;
  editable?: boolean;
}

export function RatingStars({
  rating,
  setRating,
  editable = true,
}: RatingStarsProps) {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((star) => {
        const isSelected = rating !== null && rating >= star;
        const starStyle = isSelected ? styles.starSelected : styles.star;
        
        // Permite selecionar a nota ao tocar numa estrela
        const handlePress = () => {
          if (editable && setRating) {
            setRating(star);
          }
        };

        return (
          <Pressable key={star} onPress={handlePress} disabled={!editable}>
            <Text style={starStyle}>★</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 12,
  },
  star: {
    fontSize: 32,
    color: "#ccc",
    marginHorizontal: 5,
  },
  starSelected: {
    fontSize: 32,
    color: "#f1c40f",
    marginHorizontal: 5,
  },
});
