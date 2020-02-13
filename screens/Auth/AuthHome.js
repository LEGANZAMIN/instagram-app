import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import constants from "../../constants";

const View = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Image = styled.Image`
    width: ${constants.width / 2.5};
    margin-bottom: -50px;
`;

const Touchable = styled.TouchableOpacity``;

const ButtonContainer = styled.TouchableOpacity``;
const SignupButton = styled.View`
    background-color: ${props => props.theme.blueColor};
    padding: 10px;
    margin: 0px 50px;
    border-radius: 3px;
    width: ${constants.width / 2};
    margin-bottom: 25px;
`;
const SignupButtonText = styled.Text`
    color: white;
    text-align: center;
    font-weight: 600;
`;

const LoginLink = styled.View``;
const LoginLinkText = styled.Text`
    color: ${props => props.theme.blueColor};
`;

export default ({ navigation }) => (
    <View>
        <Image resizeMode={"contain"} source={require("../../assets/logo.png")} />
        <Touchable onPress={() => navigation.navigate("Signup")}>
            <SignupButton>
                <SignupButtonText>Create New Account</SignupButtonText>
            </SignupButton>
        </Touchable>
        <Touchable onPress={() => navigation.navigate("Login")}>
            <LoginLink>
                <LoginLinkText>Log In</LoginLinkText>
            </LoginLink>
        </Touchable>
    </View>
);
