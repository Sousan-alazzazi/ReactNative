import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, Left, Right, Icon } from 'native-base';


class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Header>
                    <Left>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                </Header>

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text>Account Settings screen</Text>

                </View>

            </View>
        );
    }
}
export default SettingsScreen;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    }
});
