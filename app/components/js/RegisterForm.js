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

export default class RegisterForm extends Component {
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
          placeholder="NAME"
          onSubmitEditing={() => this.nameInput.focus()}
          autoCapitalize="none"
          aucoCorrect={false}
        />
        <TextInput
          style={formStyles.input}
          placeholderTextColor="#C6CCCD"
          returnKeyType="next"
          underlineColorAndroid="transparent"
          placeholder="EMAIL"
          onSubmitEditing={() => this.emailInput.focus()}
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
        <TextInput
          style={formStyles.input}
          secureTextEntry={true}
          placeholderTextColor="#C6CCCD"
          returnKeyType="go"
          underlineColorAndroid="transparent"
          placeholder="CONFIRM PASSWORD"
          ref={input => (this.confirmPasswordInput = input)}
        />
        <TextInput
          style={formStyles.input}
          secureTextEntry={true}
          placeholderTextColor="#C6CCCD"
          returnKeyType="go"
          underlineColorAndroid="transparent"
          placeholder="MOBILE NUMBER"
          ref={input => (this.mobileNumberInput = input)}
        />
        <View style={formStyles.divider} />
        <TouchableOpacity
          onPress={this.onLoginPress}
          style={formStyles.registerButtonContainer}
        >
          <Text style={formStyles.registerButtonText}>REGISTER</Text>
        </TouchableOpacity>
        <Text style={formStyles.privacyPolicy}>
          By continuing, you accept our{" "}
          <Text
            onPress={() => {
              this.props.navigation.navigate("PrivacyPolicy");
            }}
          >
            Privacy Policy and Terms of Use
          </Text>
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
    paddingVertical: 10,
    justifyContent: "space-between"
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
  registerButtonContainer: {
    backgroundColor: "#C6CCCD",
    paddingVertical: 10,
    marginVertical: 7,
    borderWidth: 2,
    borderColor: "white"
  },
  registerButtonText: {
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
    height: 1,
    width: undefined,
    backgroundColor: "black",
    marginHorizontal: 2,
    marginVertical: 10
  },
  privacyPolicy: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold"
  }
});
