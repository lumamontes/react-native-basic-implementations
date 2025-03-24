import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator } from "react-native";
import { Button } from "@/components/Button";
import Toast from 'react-native-toast-message';
import { ProductCard } from "@/components/ProductCard";
import { FeedbackModal } from "@/components/FeedbackModal";
import { loadFakeProducts, Product } from "../../../src/data/fakeProducts";

export default function ReviewModalScreen() {
    
    const [products, setProducts] = useState<Product[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState<number | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // Simula chamada a API com atraso para preencher lista de produtos      
    useEffect(() => {
      setTimeout(() => {
        const data = loadFakeProducts();
        setProducts(data);
      }, 1000);
    }, []);          

    // Define o produto atual e abre a modal de avaliação
    function openModalFor(product: Product) {
      setSelectedProduct(product);
      setComment("");
      setRating(null);
      setIsModalOpen(true);
    }

    // Validação simples do formulário
    function isFormValid() {
      return rating && comment.trim().length > 0;
    }
    
    // Manipula o envio do feedback com validação e toasts
    function handleSubmit() {
      if (!isFormValid()) {
        Toast.show({
          type: 'error',
          text1: 'Feedback submission failed',
          text2: 'Please provide a rating and a comment before submitting.',
          visibilityTime: 2000,
        });
        return;
      }
      // Simula envio com feedback visual
      Toast.show({
        type: 'success',
        text1: 'Feedback submitted',
        text2: 'Thanks for your review!',
        visibilityTime: 2000,
      });
    
      resetForm();
    }
    
    // Reseta os campos e fecha a modal
    function resetForm() {
      setIsModalOpen(false);
      setComment("");
      setRating(null);
    }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.length === 0 ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007BFF" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        // Mapeia e renderiza todos os produtos simulados
        products.map((item, index) => (
          <View key={index} style={{ marginBottom: 16 }}>
            <ProductCard
              name={item.name}
              description={item.description}
              price={item.price}
              imageUrl={item.imageUrl}
            />
            <View style={styles.feedbackButtonContainer}>
              <Button
                title="Rate Product"
                onPress={() => openModalFor(item)}
              />
            </View>
          </View>
        ))
      )}

      <FeedbackModal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        rating={rating}
        setRating={setRating}
        comment={comment}
        setComment={setComment}
        product={selectedProduct}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    loadingText: {
      fontSize: 18,
      color: "#777",
      textAlign: "center",
    },
    feedbackButtonContainer: {
      marginTop: 5,
    },
    loadingContainer: {
      flex: 1,
      minHeight: 400,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  