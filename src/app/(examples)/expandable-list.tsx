import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Animated } from "react-native";
import ExpandableContainer from "@/components/ExpandableContainer";
import Separator from "@/components/Separator";
const steps = [
  {
    title: "Step 1",
    content: "This is the content of step 1",
  },
  {
    title: "Step 2",
    content: "This is the content of step 2",
  },
  {
    title: "Step 3",
    content: "This is the content of step 3",
  },
  {
    title: "Step 4",
    content: "This is the content of step 4",
  },
  {
    title: "Step 5",
    content: "This is the content of step 5",
  },
  {
    title: "Step 6",
    content: "This is the content of step 6",
  },
  {
    title: "Step 7",
    content: "This is the content of step 7",
  },
  {
    title: "Step 8",
    content: "This is the content of step 8",
  },
  {
    title: "Step 9",
    content: "This is the content of step 9",
  },
  {
    title: "Step 10",
    content: "This is the content of step 10",
  },

];

export default function SwipeToDelete() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expandable list</Text>
      <Text style={styles.description}>
        This example demonstrates a list of expandable items, using reanimated
        for the animation.
      </Text>
      <FlatList
        style={styles.data_container}
        data={steps}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View key={index}>
            <ExpandableContainer title={item.title}>
              <Text style={{ padding: 10 }}>
              {item.content}</Text>
            </ExpandableContainer>
            {index !== steps.length - 1 && <Separator />}
          </View>
        )}
      />

      <Text>
        Example from the react-native-gesture-handler documentation at
        https://snack.expo.dev/@adamgrzybowski/react-native-gesture-handler-demo?platform=ios
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  data_container: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    marginVertical: 20,
  },
  item: {
    width: "auto",
    height: 100,
    backgroundColor: "pink",
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  leftAction: {
    flex: 1,
    backgroundColor: "#388e3c",
    justifyContent: "center",
  },
  actionText: {
    color: "white",
    fontWeight: "600",
    padding: 20,
  },
  rectButton: {
    flex: 1,
    height: 100,
    width: "auto",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: "white",
  },
  separator: {
    backgroundColor: "rgb(200, 199, 204)",
    height: StyleSheet.hairlineWidth,
  },
  fromText: {
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
  messageText: {
    color: "#999",
    backgroundColor: "transparent",
  },
  dateText: {
    backgroundColor: "transparent",
    position: "absolute",
    right: 20,
    top: 10,
    color: "#999",
    fontWeight: "bold",
  },

  FaqContainerStyle: {
    // width: '100%',
    backgroundColor: "white",
    flexDirection: "column",
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    shadowRadius: 10,
    shadowColor: "grey",
    shadowOpacity: 0.23,
    shadowOffset: { width: -2, height: 4 },
    borderRadius: 10,
  },
});
