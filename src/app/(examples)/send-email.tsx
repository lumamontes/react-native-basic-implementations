//npm install emailjs-com
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import emailjs from "emailjs-com";

export default function EmailTestScreen() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSendTestEmail = async () => {
    if (!email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    try {
      await emailjs.send(
        "send-emailtypescript",
        "template_lxn5l1w",
        { 
          to_email: email,
          user_name: name 
        },
        "1lov3S7G7PVy7YCYb"
      );

      Alert.alert("Success", `Test email sent to ${email}!`);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to send email. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register your information</Text>
      
      {/* Campo para o nome */}
      <Text style={styles.label}>Your Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      
      {/* Campo para o email */}
      <Text style={styles.label}>Your Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSendTestEmail}>
        <Text style={styles.buttonText}>Send Test Email</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});