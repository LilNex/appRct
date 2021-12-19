import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from '@react-navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const tabNavigator = createBottomTabNavigator();

export class Test extends React.Component {



    render() {
        return ( 
            <Text>Testssr</Text>
        )
    }

}
