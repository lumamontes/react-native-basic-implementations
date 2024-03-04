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
        This example demonstrates how to use the `RefreshControl` component to add pull-to-refresh functionality to a FlatList component.
      </Text>
      <Text>
        Pull down to refresh the list.
      </Text>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.title}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
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
      width: 200,
      height: 100,
      backgroundColor: "pink",
      marginVertical: 8,
      marginHorizontal: 16,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 6,
    },
  });
  