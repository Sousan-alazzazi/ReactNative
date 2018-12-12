import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, ImageBackground} from 'react-native';


//import LoginFormTest from './app/components/pages/LoginFormTest';
//import LoginForm from './app/components/pages/LoginForm';
//import SignUpForm from './app/components/pages/SignUpForm';

//----
import { createDrawerNavigator, DrawerItems } from 'react-navigation'
import HomeScreen from './app/Screens/HomeScreen';
import SettingsScreen from './app/Screens/SettingsScreen';
import AuthenticationSettings from './app/Screens/AuthenticationSettings';
import TACSettings from './app/Screens/TACSettings';
import CarrierSettings from './app/Screens/CarrierSettings';
//----

//import MapView from 'react-native-maps';

// mark = require("../img/logo.png");


export default class App extends React.Component {
  render() {
      return (
        //call </LoginForm> to reach login screen

        //<View style={styles.container}>

         


        //    <MapView style={styles.map}
        //        region={{
        //        latitude: 59.32932349999999,
        //        longitude: 18.068580800000063,
        //        latitudeDelta:0.1,
        //        longitudeDelta:0.1
        //        }}>

        //        <MapView.Marker
        //            coordinate={{
        //            latitude: 59.32932349999999,
        //            longitude: 18.068580800000063,
        //            }}
        //            title={'My marker title'}
        //            description={'My marker description'}
        //        />

        //    </MapView>

        //</View> 

          <AppDrawerNavigator />
    );

   

  }
}


//----

const CustomeDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
            <ImageBackground source={mark} style={styles.mark} resizeMode="contain" />

        </View>

        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
    TACSettings: TACSettings,
    CarrierSettings: CarrierSettings,
    AuthenticationSettings: AuthenticationSettings

},
    {
        contentComponent: CustomeDrawerComponent

    }
)

//----

const styles = StyleSheet.create({
 //wrapper:{
 //  flex:1,
 //},
 container:{
 flex: 1, 

     //position: 'absolute',
     //top: 0,
     //left: 0,
     //bottom: 0,
     //right: 0,
     //justifycontent: 'flex-end',
     //alignItems: 'center'
    },
    //map: {
    //    position: 'absolute',
    //    top: 0,
    //    left: 0,
    //    bottom: 0,
    //    right: 0,
    //}
});

