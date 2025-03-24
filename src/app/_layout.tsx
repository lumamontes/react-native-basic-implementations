import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import App from "./index";
import Toast from 'react-native-toast-message';
import toastConfig from '@/components/toastConfig';

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
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
      </Stack>
      <Toast config={toastConfig} topOffset={60} />
    </GestureHandlerRootView>
  );
}