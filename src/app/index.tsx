import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Link, router } from "expo-router";
import Badge from "@/components/Badge";

interface Item {
  title: string;
  description: string;
  route: string;
  badges?: { label: string; variant: "primary" | "secondary" }[];
  isComingSoon?: boolean;
}

type RenderItemParams = {
  item: Item;
  index: number;
};

const data: Item[] = [
  {
    title: "Pull to Refresh",
    description:
      "The component `RefreshControl` provides pull-to-refresh functionality for a ScrollView or FlatList component. It can be used to refresh the contents of a list or refresh the contents of a page.",
    route: "pull-to-refresh",
  },

  {
    title: "Notificação Toast",
    description:
      "Este exemplo demonstra como usar a biblioteca `react-native-toast-message` para exibir notificações temporárias.",
    route: "toast-notification",
    badges: [
      {
        label: "react-native-toast-message",
        variant: "primary",
      },
    ],
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
      },
    ],
  },

  {
    title: "Drag and drop for reordering",
    description:
      "This example demonstrates how to use the `Reorder` component to add drag-and-drop functionality to a FlatList component.",
    route: "drag-and-drop",
    badges: [
      {
        label: "react-native-gesture-handler",
        variant: "primary",
      },
      {
        label: "react-native-reanimated",
        variant: "secondary",
      },
      {
        label: "react-native-draggable-flatlist",
        variant: "primary",
      },
    ],
  },
  {
    title: "Expandable List",
    description:
      "This example demonstrates how to use the `ExpandableList` component to add expandable list functionality to a FlatList component.",
    route: "expandable-list",
    badges: [
      {
        label: "react-native-reanimated",
        variant: "secondary",
      },
    ],
  },
];


export default function App() {
  const renderItem = ({ item, index }: RenderItemParams) => (
    <Link
      key={index}
      asChild
      style={styles.item}
      href={{ pathname: item.route, params: { name: item.title } }}
    >
      <TouchableOpacity disabled={item.isComingSoon}>
        <View style={styles.container}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <Text style={styles.item_title}>{item.title}</Text>
          </View>

          <Text style={styles.item_description}>{item.description}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 4,
            }}
          >
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
    height: "auto",
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
