import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from '@react-navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export class TabNav extends React.Component {


    constructor(props) {
        super(props);
        // const Stack = createNativeStackNavigator();
    }

  homeScreen() {
  
    return (
    <View style={{ 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' 
      }}>
      <Text>Home Screen</Text>
    </View>
    );
  }
 
  
   settingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

   render () {
    // const this.Stack = createNativeStackNavigator();

    // return (
      
      
    // );
  }


}
// export default TabNav;