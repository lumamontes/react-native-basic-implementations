import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Link, router } from "expo-router";
import Badge from "@/components/Badge";

const data = [
  {
    title: "Pull to Refresh",
    description:
      "The component `RefreshControl` provides pull-to-refresh functionality for a ScrollView or FlatList component. It can be used to refresh the contents of a list or refresh the contents of a page.",
    route: "pull-to-refresh",
  },
  {
    title: "Swipe to Delete",
    description:
      "This example demonstrates how to use the `Swipeable` component to add swipe-to-delete functionality to a FlatList component.",
    route: "swipe-to-delete",
    badges: [
      {
        label: "react-native-gesture-handler",
        variant: "primary",
      },
      {
        label: "react-native-reanimated",
        variant: "secondary",
      }
    ],
  },
];

export default function App() {
  const renderItem = ({ item, index }) => (
    <Link
      key={index}
      asChild
      style={styles.item}
      href={{ pathname: item.route, params: { name: item.title } }}
    >
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.item_title}>{item.title}</Text>
          <Text style={styles.item_description}>{item.description}</Text>
          <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 4 }}>
          {item.badges &&
            item.badges.map((badge, index) => {
              return (
                <Badge
                  key={index}
                  label={badge.label}
                  variant={badge.variant}
                />
              );
            })}
            </View>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>React Native Basics</Text>
          <Text style={styles.description}>
            A collection of some basic react native features with practical
            implementations
          </Text>
        </View>
        {data.map((item, index) => {
          return renderItem({ item, index });
        })}

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
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
  item: {
    height: 200,
    backgroundColor: "#FFFE",
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
  },
  item_title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  item_description: {
    fontSize: 18,
    color: "gray",
  },
});
