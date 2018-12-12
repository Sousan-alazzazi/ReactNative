import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, Left, Right, Icon } from 'native-base';


class CarrierSettings extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <Text>Carrier Settings</Text>

            </View>
        );
    }
}
export default CarrierSettings;


const styles = StyleSheet.create({

    container: {
        flex: 1,

    }
});
