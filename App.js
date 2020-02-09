import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";

import { AppLoading } from "expo";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import options from "./apollo";

import { ThemeProvider } from "styled-components";
import styles from "./styles";
import NavController from "./components/NavController";
import { AuthProvider } from "./AuthContext";

export default function App() {
    const [loaded, setLoaded] = useState(false);
    const [client, setClient] = useState(null);

    const [isLoggedIn, setLoggedIn] = useState(null);
    const preLoad = async () => {
        try {
            // Font
            await Font.loadAsync({
                ...Ionicons.font
            });

            // Images
            Asset.loadAsync([require("./assets/logo.png")]);

            // Apollo client
            const cache = new InMemoryCache();
            await persistCache({
                cache,
                storage: AsyncStorage
            });

            const client = new ApolloClient({
                cache,
                ...options
            });

            const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
            if (!isLoggedIn || isLoggedIn === "false") {
                setLoggedIn(false);
            } else {
                setLoggedIn(true);
            }

            setLoaded(true);
            setClient(client);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        preLoad();
    }, []);

    return loaded && client && isLoggedIn !== null ? (
        <ApolloProvider client={client}>
            <ThemeProvider theme={styles}>
                <AuthProvider isLoggedIn={isLoggedIn}>
                    <NavController />
                </AuthProvider>
            </ThemeProvider>
        </ApolloProvider>
    ) : (
        <AppLoading />
    );
}
