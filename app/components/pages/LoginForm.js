import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get("window");

const background = require("../img/bg2.png");
const mark = require("../img/logo2.png");
const lockIcon = require("../img/login1_lock.png");
const personIcon = require("../img/login1_person.png");

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <ImageBackground source={mark} style={styles.mark} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <ImageBackground source={personIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholder="Enter your Username or Email" 
                placeholderTextColor=" rgba(255,255,255,0.7)"
                returnKeyType="next"
                keyboardType="email-address"
                style={styles.input} 
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <ImageBackground source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholderTextColor=" rgba(255,255,255,0.7)"
                placeholder="Password" 
                style={styles.input} 
                secureTextEntry 
              />
            </View>
                    //we use"TouchableOpacity"to add button
            <TouchableOpacity activeOpacity={.5}>
              <View>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
          
            <TouchableOpacity activeOpacity={.5}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>Don't have an account?</Text>
              <TouchableOpacity activeOpacity={.5}>
                            <View>
                                <Text style={styles.signupLinkText} >Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
      paddingHorizontal: 10,
      color:'#ffffff'
  },
  button: {
    backgroundColor: "#4493cc",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight:'700',
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
    fontWeight:'700',
  }
});
AppRegistry.registerComponent('screens', () => screens);