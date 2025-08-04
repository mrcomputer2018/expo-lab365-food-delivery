import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home-screen";
import HomeBottomTab from "./home-bottom-tab";

export default function AuthStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTab"
        component={HomeBottomTab}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  );
}
