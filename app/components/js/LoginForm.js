import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  Alert
} from "react-native";

export default class LoginForm extends Component {
  onLoginPress = () => {
    this.props.navigation.navigate("Dashboard");
    // Alert.alert("Clicked");
  };
  render() {
    return (
      <View style={formStyles.container}>
        <TextInput
          style={formStyles.input}
          placeholderTextColor="#C6CCCD"
          returnKeyType="next"
          underlineColorAndroid="transparent"
          placeholder="EMAIL"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          aucoCorrect={false}
        />
        <TextInput
          style={formStyles.input}
          secureTextEntry={true}
          placeholderTextColor="#C6CCCD"
          returnKeyType="go"
          underlineColorAndroid="transparent"
          placeholder="PASSWORD"
          ref={input => (this.passwordInput = input)}
        />
        <View style={formStyles.divider} />
        <TouchableOpacity
          onPress={this.onLoginPress}
          style={formStyles.loginButtonContainer}
        >
          <Text style={formStyles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={formStyles.forgotOrRegister}>
          <TouchableOpacity>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Register Here</Text>
          </TouchableOpacity>
        </View>
        <View style={formStyles.divider} />
        <TouchableOpacity style={formStyles.guestButtonContainer}>
          <Text style={formStyles.guestButtonText}>CONTINUE AS GUEST</Text>
        </TouchableOpacity>
        <Text style={formStyles.privacyPolicy}>
          By continuing, you accept our Privacy Policy and Termus of Use
        </Text>
      </View>
    );
  }
}

const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 40,
    paddingVertical: 10
  },
  input: {
    backgroundColor: "white",
    marginHorizontal: 2,
    marginVertical: 7,
    color: "black",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#C6CCCD",
    textAlign: "center"
  },
  loginButtonContainer: {
    backgroundColor: "#C6CCCD",
    paddingVertical: 10,
    marginVertical: 7,
    borderWidth: 2,
    borderColor: "white"
  },
  loginButtonText: {
    textAlign: "center",
    color: "#333333",
    fontWeight: "700"
  },
  forgotOrRegister: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 5,
    justifyContent: "space-around"
  },
  guestButtonContainer: {
    backgroundColor: "white",
    paddingVertical: 10,
    marginVertical: 7,
    borderWidth: 1,
    borderColor: "#C6CCCD"
  },
  guestButtonText: {
    textAlign: "center",
    color: "#C6CCCD",
    fontWeight: "700"
  },
  divider: {
    height: 1.5,
    width: undefined,
    backgroundColor: "black",
    marginHorizontal: 2,
    marginVertical: 10
  },
  privacyPolicy: {
    textAlign: "center",
    fontSize: 10
  }
});
