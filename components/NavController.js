import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
import TabNavigation from "../navigation/TabNavigation";

export default () => {
    const isLoggedIn = useIsLoggedIn();

    console.log("NavController", isLoggedIn);
    const logIn = useLogIn();
    const logOut = useLogOut();

    return <View style={{ flex: 1 }}>{isLoggedIn ? <TabNavigation /> : <AuthNavigation />}</View>;
};
