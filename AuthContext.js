import React, { createContext, useContext, useState } from "react";
import { AsyncStorage } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ isLoggedIn: isLoggedInProp, children }) => {
    console.log("AuthContext isLoggedInProp1", isLoggedInProp);
    const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInProp);
    // /setIsLoggedIn(isLoggedInProp);
    console.log("AuthContext isLoggedIn", isLoggedIn);

    const login = async () => {
        try {
            await AsyncStorage.setItem("isLoggedIn", "true");
            setIsLoggedIn(true);
        } catch (e) {
            console.log(e);
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.setItem("isLoggedIn", "false");
            setIsLoggedIn(false);
        } catch (e) {
            console.log(e);
        }
    };

    return <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>;
};

export const useIsLoggedIn = () => {
    const { isLoggedIn } = useContext(AuthContext);
    console.log("AuthContext useIsLoggedIn", isLoggedIn);

    return isLoggedIn;
};

export const useLogIn = () => {
    const { login } = useContext(AuthContext);
    return login;
};

export const useLogOut = () => {
    const { logout } = useContext(AuthContext);
    return logout;
};
