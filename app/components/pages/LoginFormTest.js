import React from 'react';

import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
        <View style={styles.formContainer}>
          <TextInput
          placeholder='Username'
          style={styles.textInput}
          placeholderTextColor='#fff'
           underlineColorAndroid={'transparent'}
           underlineColorIos={'transparent'} />

            <TextInput
            placeholder='Password'
            placeholderTextColor='#fff'
            secureTextEntry={true}
            style={styles.textInput}
            
            underlineColorIos={'transparent'} />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.btntext}>Login</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({

    formContainer:{
      alignSelf: 'stretch',
      paddingLeft: 20,
      paddingRight: 20,
    },
    textInput:{
      alignSelf: 'stretch',
      padding: 20,
      backgroundColor: '#4393ce',
      borderRadius: 10,
      marginBottom: 20,
   
    },

    button:{
        alignSelf: 'stretch',
        marginTop: 20, 
        backgroundColor: '#4393ce',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
    },
    btntext:{
      color: '#fff',
      fontSize: 18,
    },
});


