import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import LoginFormTest from './app/components/pages/LoginFormTest';
import LoginForm from './app/components/pages/LoginForm';
import SignUpForm from './app/components/pages/SignUpForm';


import MapView from 'react-native-maps';


export default class Maps extends React.Component {
    render() {
        return (

            <View style={styles.container}>




                <MapView style={styles.map}
                    region={{
                    latitude: 59.32932349999999,
                    longitude: 18.068580800000063,
                    latitudeDelta:0.1,
                    longitudeDelta:0.1
                    }}>

                    <MapView.Marker
                        coordinate={{
                        latitude: 59.32932349999999,
                        longitude: 18.068580800000063,
                        }}
                        title={'My marker title'}
                        description={'My marker description'}
                    />

                </MapView>

            </View> 

         
        );



    }
}


const styles = StyleSheet.create({
    wrapper:{
      flex:1,
    },
    container: {
        flex: 1,

        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifycontent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});

