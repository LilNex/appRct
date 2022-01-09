/* eslint-disable prettier/prettier */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

import {TextInput} from 'react-native-paper'
import { View,Text } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Dashboard({ route,navigation }) {
  function HomeScreen() {
    // console.warn(JSON.stringify(route.params));
    const [text, setText] = React.useState('');
		return (
      <View>
        <View style={{flexDirection:'row'}}>
          <Button style={{width:'10%'}} icon='bing'></Button>
          <TextInput style={{width:'80%',height:'5%'}}
            label="Search"
            value={text}
            onChangeText={text => setText(text)}
          />
        </View>
      </View>


			// <View style={{ 
			// 	flex: 1,
			// 	alignItems: 'center',
			// 	justifyContent: 'center' 
			//   }}>
			//   <Text>{route.params.user}</Text>
			// </View>
		);
		}
		 
		  
		function SettingsScreen() {
			return (
			  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Settings!</Text>
			  </View>
			);
		  }

  return (
    // <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    // </NavigationContainer>
    
    //  <Logo />
    //   <Header>Let’s start</Header>
    //   <Paragraph>
    //     Your amazing app starts here. Open you favorite code editor and start
    //     editing this project.
    //   </Paragraph>
    //   <Button
    //     mode="outlined"
    //     onPress={() =>
    //       navigation.reset({
    //         index: 0,
    //         routes: [{ name: 'StartScreen' }],
    //       })
    //     }
    //   >
    //     Logout
    //   </Button> 
  )
}
