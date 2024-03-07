import React, { useState } from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";

const dummyData = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
];

export default function PullToRefresh() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    //Add you actual logic to refresh the data here
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pull to Refresh</Text>
      <Text style={styles.description}>
        This example demonstrates how to use the `RefreshControl` component to
        add pull-to-refresh functionality to a FlatList component.
      </Text>
      <Text style={{ paddingBottom: 6 }}>Pull down to refresh the list.</Text>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => item.title}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <Text>
        Example from the react native documentation at
        https://reactnative.dev/docs/refreshcontrol
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
    width: 300,
    height: 100,
    flex: 1,
    alignItems: "center",
    borderRadius: 6,
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
});
