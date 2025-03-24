import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Exibe visualmente um produto com nome, imagem, descrição e preço
interface ProductCardProps {
    name: string;
    description: string;
    price: number;
    imageUrl: string | null;
  }
  
  export function ProductCard({ name, description, price, imageUrl }: ProductCardProps) {
    return (
        <View style={styles.card}>
        <Text style={styles.name}>{name}</Text>

        {/* Exibe imagem do produto ou um placeholder caso não exista */}
        {imageUrl ? (
            <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            />
        ) : (
            <View style={styles.imageFallback} />
        )}

        <Text style={styles.description}>
            {description}
        </Text>

        <Text style={styles.price}>
            R$ {price.toFixed(2)}
        </Text>
        </View>

    );
  }

  const styles = StyleSheet.create({
    card: {
      width: '95%',
      padding: 10,
      borderRadius: 12,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      gap: 12,
      backgroundColor: '#f9f9f9',
    },
    name: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      color: "#555",
      marginBottom: 8,
    },
    price: {
      fontSize: 18,
      color: "#333",
      fontWeight: "600",
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 8,
      resizeMode: "cover",
      alignSelf: "center",
    },
    imageFallback: {
      width: 150,
      height: 150,
      borderRadius: 8,
      backgroundColor: "#e0e0e0",
      alignSelf: "center",
    },
  });
  