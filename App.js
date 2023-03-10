import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import SearchScreen from "./Screens/SearchScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import PostScreen from "./Screens/PostScreen";
import FavoritesScreen from "./Screens/FavoritesScreen";

import { NativeBaseProvider } from "native-base";

import HomeIcon from "./assets/Navbar/HomeIcon.svg";
import SearchIcon from "./assets/Navbar/SearchIcon.svg";
import PostIcon from "./assets/Navbar/PostIcon.svg";
import FavoritesIcon from "./assets/Navbar/FavoritesIcon.svg";
import ProfileIcon from "./assets/Navbar/ProfileIcon.svg";
import HomeIconS from "./assets/Navbar/HomeIconS.svg";
import SearchIconS from "./assets/Navbar/SearchIconS.svg";
import PostIconS from "./assets/Navbar/PostIconS.svg";
import FavoritesIconS from "./assets/Navbar/FavoritesIconS.svg";
import ProfileIconS from "./assets/Navbar/ProfileIconS.svg";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              borderRadius: 15,
              marginBottom: 20,
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              // margin: 10,
              marginBottom: 0,
            },
            backgroundColor: "#FBFBFB",
          }}
        >
          <BottomTab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return focused ? <HomeIconS /> : <HomeIcon />;
              },
            }}
          />
          <BottomTab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return focused ? <SearchIconS /> : <SearchIcon />;
              },
            }}
          />
          <BottomTab.Screen
            name="Post"
            component={PostScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return focused ? <PostIconS /> : <PostIcon />;
              },
            }}
          />
          <BottomTab.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return focused ? <FavoritesIconS /> : <FavoritesIcon />;
              },
            }}
          />
          <BottomTab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return focused ? <ProfileIconS /> : <ProfileIcon />;
              },
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topSide: {
    justifyContent: "flex-start",
    width: "100%",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    width: "110%",
    paddingBottom: 4,
    shadowColor: "black",
  },
});
