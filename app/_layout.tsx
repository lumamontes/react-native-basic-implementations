import * as SplashScreen from "expo-splash-screen";
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "/",
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'violet',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
    </GestureHandlerRootView>
  );
}
