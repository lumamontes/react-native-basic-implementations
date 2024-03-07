import React, { useState, useCallback } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";

const DATA = [
  {
    key: "item-1",
    label: "Product 1",
  },
  {
    key: "item-2",
    label: "Product 2",
  },
];

type Item = {
  key: string;
  label: string;
};

function DragAndDrop() {
  const [data, setData] = useState(DATA);

  const renderItem = useCallback(
    ({ item, drag, isActive }: RenderItemParams<Item>) => {
      return (
        <TouchableOpacity
          style={isActive ? styles.active_button : styles.button}
          onLongPress={drag}
        >
          <Text style={styles.label}>{item.label} 🖐️</Text>
          {/* reorder icon */}
        </TouchableOpacity>
      );
    },
    []
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drag and drop to reorder</Text>
      <Text style={styles.description}>
        This examples uses the library react-native-draggable-flatlist to add
        drag and drop functionality to a FlatList component.
      </Text>
      <Text style={{ paddingBottom: 10 }}>Long press any item to reorder</Text>
      <Text>
        Example from the react-native-draggable-flatlist documentation at https://github.com/computerjazz/react-native-draggable-flatlist
      </Text>
        <DraggableFlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          onDragEnd={({ data }) => setData(data)}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
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
  button: {
    flex: 1,
    height: 100,
    width: 300,
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
  active_button: {
    flex: 1,
    height: 100,
    width: "auto",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: "lightgray",
  },
  label: {
    fontWeight: "bold",
  },
});

export default DragAndDrop;
