import React, { useState } from "react";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useMutation, useQuery } from "@apollo/react-hooks";
//import LOG_IN from "./AuthQuery";
import gql from "graphql-tag";

const View = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Text = styled.Text``;

export default ({ navigation }) => {
    const emailInput = useInput("");
    const [loading, setLoading] = useState(false);
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const LOG_IN_TEMP = gql`
        mutation requestSecret($email: String!) {
            requestSecret(email: $email)
        }
    `;

    const [requestSecretMutation, { data }] = useMutation(LOG_IN_TEMP);

    const handleLogin = async () => {
        const { value } = emailInput;
        if (value === "") {
            return Alert.alert("Email can't be empty.");
        } else if (!emailRegex.test(value)) {
            return Alert.alert("That Email is invalid.");
        }

        try {
            setLoading(true);

            //const isResult = true;

            const {
                data: { requestSecret }
            } = await requestSecretMutation({ variables: { email: emailInput.value } });

            console.log(data);
            console.log(requestSecret);
            if (requestSecret) {
                Alert.alert("Check your email.");
                navigation.navigate("Confirm", { email: value });
            } else {
                Alert.alert("Account not found");
                navigation.navigate("Signup", { email: value });
            }
        } catch (e) {
            console.log(e);
            Alert.alert("Can't log in now.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <AuthInput {...emailInput} placeholder="Email" keyboardType="email-address" returnKeyType="send" onSubmitEditing={handleLogin} autoCorrect={false} />
                <AuthButton loading={loading} onPress={handleLogin} text="Log In" />
            </View>
        </TouchableWithoutFeedback>
    );
};
