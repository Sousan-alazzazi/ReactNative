import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from 'react-native'

const background = require("../img/bg2.png");
const backIcon = require("../img/back.png");
const personIcon = require("../img/signup_person.png");
const lockIcon = require("../img/signup_lock.png");
const emailIcon = require("../img/signup_email.png");
const birthdayIcon = require("../img/signup_birthday.png");

export default class SignUpForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
          source={background} 
          style={[styles.container, styles.bg]}
          resizeMode="cover"
        >
          <View style={styles.headerContainer}>

            <View style={styles.headerIconView}>
              <TouchableOpacity style={styles.headerBackButtonView}>
                <ImageBackground 
                  source={backIcon} 
                  style={styles.backButtonIcon} 
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.headerTitleView}>
              <Text style={styles.titleViewText}>Sign Up</Text>
            </View>

          </View>

          <View style={styles.inputsContainer}>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <ImageBackground 
                  source={personIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.userInput]}
                placeholder="Name"
                placeholderTextColor=" rgba(255,255,255,0.7)"
                            underlineColorAndroid='transparent' 
                            returnKeyType="next"
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <ImageBackground 
                  source={emailIcon} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.userInput]}
                placeholder="Email"
                placeholderTextColor=" rgba(255,255,255,0.7)" 
                            keyboardType="email-address"
                            returnKeyType="next"
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <ImageBackground 
                  source={lockIcon} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
              </View>
              <TextInput
                            secureTextEntry={true}
                            style={[styles.input, styles.userInput]}
                placeholder="Password"
                            placeholderTextColor=" rgba(255,255,255,0.7)"
                            returnKeyType="next"
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <ImageBackground 
                  source={birthdayIcon} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
              </View>
                        <TextInput
                            style={[styles.input, styles.userInput]}
                placeholder="Birthday"
                placeholderTextColor=" rgba(255,255,255,0.7)"
                underlineColorAndroid='transparent' 
              />
            </View>

          </View>

          <View style={styles.footerContainer}>

            <TouchableOpacity>
              <View style={styles.signup}>
                <Text style={styles.whiteFont}>SignUp</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.signin}>
                <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont}> Login</Text></Text>
              </View>
            </TouchableOpacity>
          </View>
          </ImageBackground>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  headerContainer: {
    flex: 1,
  },
  inputsContainer: {
    flex: 3,
    marginTop: 50,
  },
  footerContainer: {
    flex: 1
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginTop: 25,
    marginLeft: 25,
  },
  titleViewText: {
    fontSize: 40,
    color: '#fff',
  },
  inputs: {
    paddingVertical: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75,
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  signup: {
    backgroundColor: '#4493cc',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 30,
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
      color: '#FFF',
      fontWeight: '700',
    },
  userInput: {
      color: '#FFF',
    }
})