import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import Search from "../screens/Search";

const Tab = createBottomTabNavigator();

function Add({ navigation }) {
    // useEffect(() => {
    //     const unsubscribe = navigation.addListener("tabPress", e => {
    //         // Prevent default behavior
    //         e.preventDefault();

    //         // Do something manually
    //         console.log("click tab...");
    //     });

    //     return unsubscribe;
    // }, [navigation]);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Add</Text>
        </View>
    );
}

function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Notification" component={Notification} />
                <Tab.Screen name="Add" component={Add} />
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen
                    name="Search"
                    component={Search}
                    options={{
                        tabBarLabel: "Search1111"
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default TabNavigation;