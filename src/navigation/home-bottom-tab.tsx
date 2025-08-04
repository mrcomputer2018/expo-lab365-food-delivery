import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home-screen";
import SearchScreen from "../screens/search-screnn";
import Material from "@expo/vector-icons/MaterialCommunityIcons"
import HeaderLaft from "../components/header-left";
import HeaderRight from "../components/header-right";

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
                },
                tabBarLabelStyle: { fontSize: 12 },
                headerRight: () => <HeaderRight />,
                headerLeft: () => <HeaderLaft />,
                headerTitle: "",
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: true,
                    tabBarIcon: ({color}) => (
                        <Material nane="home-outline" color={color} size={28} />
                    )
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <Material nane="magnify" color={color} size={28} />
                    )
                }}
            />
        </BottomTab.Navigator>
    );
}
