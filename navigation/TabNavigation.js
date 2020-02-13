import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Tabs/Home";
import Notification from "../screens/Tabs/Notification";
import Profile from "../screens/Tabs/Profile";
import Search from "../screens/Tabs/Search";

import { MaterialCommunityIcons } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();

function Add({ navigation }) {
    useEffect(() => {
        const unsubscribe = navigation.addListener("tabPress", e => {
            // Prevent default behavior
            e.preventDefault();
            // Do something manually
            console.log("click tab...");
            navigation.navigate("PhotoNavigation");
        });
        return unsubscribe;
    }, [navigation]);
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Add</Text>
        </View>
    );
}

function TabNavigation() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#e91e63",
                showLabel: true
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Add" component={Add} />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="artist-outline" color={color} size={size} />
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: "Search1"
                }}
            />
        </Tab.Navigator>
    );
}

const stackFactory = initialRoute =>
    createStackNavigator({
        InitialRoute: {
            screen: initialRoute
        }
    });

function statckFactory2(initialRoute) {
    return <Stack.Screen name="Home1" component={initialRoute} />;
}

export default TabNavigation;
