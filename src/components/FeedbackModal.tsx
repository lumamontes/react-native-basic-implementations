import React from "react";
import {
  Modal,
  Pressable,
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { RatingStars } from "@/components/RatingStars";
import { Product } from "../data/fakeProducts";

// Modal para avaliação de produtos
interface FeedbackModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: () => void;
  rating: number | null;
  setRating: (value: number) => void;
  comment: string;
  setComment: (text: string) => void;
  product: Product | null;
}

export function FeedbackModal({
  visible,
  onClose,
  onSubmit,
  rating,
  setRating,
  comment,
  setComment,
  product,
}: FeedbackModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      {/* Fecha o modal ao tocar fora da tela e impede toques internos de fechar ela */}
      <Pressable style={styles.overlay} onPress={onClose}>
        <View
          style={styles.container}
          onStartShouldSetResponder={() => true}
        >
          <Text style={styles.title}>
            {product?.name ?? "Rate Product"}
          </Text>

          <RatingStars
            rating={rating}
            setRating={setRating}
            editable={true}
          />

          <Text style={{ textAlign: "center" }}>
            {rating ? `Your rating: ${rating}` : "Tap a star to rate"}
          </Text>

          <Text>Comment</Text>
          <TextInput
            placeholder="Write your comment..."
            value={comment}
            onChangeText={setComment}
            style={styles.textInput}
          />
          
          {/* Botões de ação: cancelar ou enviar */}
          <View style={styles.buttonRow}>
            <Pressable style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </Pressable>

            <Pressable style={styles.submitButton} onPress={onSubmit}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    minHeight: 120,
    textAlignVertical: "top",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 12,
    marginTop: 16,
  },
  cancelButton: {
    width: "48%",
    backgroundColor: "#e0e0e0",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButton: {
    width: "48%",
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#333",
    fontWeight: "bold",
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});