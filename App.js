import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { AppLoading } from "expo";

import * as Font from "expo-font";
import { Asset } from "expo-asset";

export default function App() {
    const [loaded, setLoaded] = useState(false);

    const preLoad = async () => {
        try {
            await Font.loadAsync({
                ...Ionicons.font
            });

            Asset.loadAsync([require("./assets/logo.png")]);

            setLoaded(true);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        preLoad();
        //setLoaded(false);
    }, []);

    return loaded ? (
        <View>
            <Text>This is Sample App...</Text>
        </View>
    ) : (
        <AppLoading />
    );
}
