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

import {TextInput,Appbar} from 'react-native-paper'
import { View,Text,StyleSheet,Dimensions,ScrollView,SafeAreaView } from 'react-native';


import{LineChart} from 'react-native-chart-kit';

import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator  } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator ();

export default function Dashboard({ route,navigation }) {

  const styles = StyleSheet.create({
    top: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '5%',
    },
    chart:{
      marginTop:'25%',
      alignItems:'center',
    }
  });

  // const openDrawer = () => {
  //   console.log("test");
  // }

  function HomeScreen() {
    // console.warn(JSON.stringify(route.params));
    const [text, setText] = React.useState('');
		return (
      <View>
    <Appbar.Header style={styles.top}>
      <Appbar.Action
      icon="archive"
       onPress={() => {console.warn('Pressed archive')}}
       style={{
         height:48,
         width:48
       }}
      />
      <Appbar.Action
      icon="archive"
       onPress={() => {console.warn('Pressed archive')}}
       style={{
         height:48,
         width:48
       }}
      />
      <Appbar.Content title="Dashboard" />
      {/* <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} /> */}
      {/* <Appbar.Action
      icon="delete"
      onPress={() => console.log('Pressed delete')}
      /> */}
      </Appbar.Header>
      <SafeAreaView>
      <ScrollView>
      <View style={styles.chart}>
      <Text style=''>Bezier Line Chart</Text>
      <LineChart
        data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 1,
            Math.random() * 1,
            Math.random() * 1,
            Math.random() * 1,
            Math.random() * 1,
            Math.random() * 1
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={128}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      margin:16,
      borderRadius: 18
        }}
      />
    </View>
      </ScrollView>
      </SafeAreaView>
    
      </View>
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
    
    
      <Drawer.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
  
    
    
 
  )

  
}
