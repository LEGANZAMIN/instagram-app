import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Signup from "../screens/Auth/Signup";
import Confirm from "../screens/Auth/Confirm";
import Login from "../screens/Auth/Login";
import AuthHome from "../screens/Auth/AuthHome";

const Stack = createStackNavigator();
function AuthNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AuthHome" headerMode="screen">
                <Stack.Screen name="Confirm" component={Confirm} />
                <Stack.Screen name="AuthHome" component={AuthHome} />

                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// const AuthNavigation = createStackNavigator({
//     AuthHome,
//     Signup,
//     Login,
//     Confirm
// });

//export default createAppContainer(AuthNavigation);

export default AuthNavigation;
