import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";

const Tab = createMaterialTopTabNavigator();

function PhotoTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="SelectPhoto" component={SelectPhoto} />
            <Tab.Screen name="TakePhoto" component={TakePhoto} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();
function PhotoNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PhotoTabs" component={PhotoTabs} />
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
        </Stack.Navigator>
    );
}

export default PhotoNavigation;
