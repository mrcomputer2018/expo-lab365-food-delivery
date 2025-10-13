import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home-screen";
import SearchScreen from "../screens/search-screnn";
import Material from "@expo/vector-icons/MaterialCommunityIcons"
import HeaderRight from "../components/header-right";
import ProfileScreen from "../screens/profile-screen";
import HeaderLeft from "../components/header-left";
import TestScreen from "../screens/test-screen";

export default function HomeBottomTab() {
    const BottomTab = createBottomTabNavigator();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveBackgroundColor: "#E5F4E7",
                tabBarActiveTintColor: "#66BE70",
                tabBarInactiveTintColor: "#a0a0a0",
                animation: "shift",
                tabBarStyle: {
                    height: 60,
                    borderTopColor: "#66BE70"
                },
                tabBarLabelStyle: { fontSize: 12 },
                headerRight: () => <HeaderRight />,
                headerLeft: () => <HeaderLeft />,
                headerTitle: "",
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: true,
                    tabBarIcon: ({color}) => (
                        <Material name="home-outline" color={color} size={28} />
                    )
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    headerShown: true,
                    tabBarIcon: ({color}) => (
                        <Material name="magnify" color={color} size={28} />
                    )
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: true,
                    tabBarIcon: ({color}) => (
                        <Material name="account" color={color} size={28} />
                    )
                }}
            />

            <BottomTab.Screen
                name="Test"
                component={TestScreen}
                options={{
                    headerShown: true,
                    tabBarIcon: ({color}) => (
                        <Material name="account" color={color} size={28} />
                    )
                }}
            />
        </BottomTab.Navigator>
    );
}
