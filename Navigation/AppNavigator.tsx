import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from "@expo/vector-icons"
import ProfileScreen from "../Screens/ProfileScreen"
import HomeScreen from "../Screens/HomeScreen"
import ExploreScreen from "../Screens/ExploreScreen"
import ProfileButton from "../components/ProfileButton"

// Create the navigation stacks and tabs
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// Main tab navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#2196F3",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="map" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}

// Root navigator
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={({ navigation }) => ({
            title: "SF Landmarks Guide",
            headerRight: () => (
              <ProfileButton
                size="small"
                style={{ marginRight: 16 }}
                // Navigate to profile screen when pressed
                // This is an alternative way to access profile besides the tab
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
