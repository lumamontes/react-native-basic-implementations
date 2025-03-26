import { StyleSheet, Text, View } from "react-native";

type BadgeProps = {
  label: string;
  variant?: "primary" | "secondary" | "disabled";
};

export default function Badge({ label, variant = "primary" }: BadgeProps) {
  return (
    <View style={[styles.badge]}>
      <View style={[styles.circle, styles[variant]]}></View>
      <Text style={styles.badgeLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderColor: "gray",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    padding: 4,
  },
  badgeLabel: {
    color: "black",
  },
  primary: {
    backgroundColor: "violet",
  },
  secondary: {
    backgroundColor: "blue",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  disabled: {
    backgroundColor: "gray",
  },
});
