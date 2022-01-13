/* eslint-disable prettier/prettier */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import CustomDrawer from '../components/CustomDrawer';

// import GestionClient from '../categorie/Relation Client'

import {TextInput, Appbar, IconButton, Card, Avatar} from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {LineChart} from 'react-native-chart-kit';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {getStatusBarHeight} from 'react-native-status-bar-height';

import Ionicons from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function Dashboard({route, navigation}) {
  const styles = StyleSheet.create({
    top: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '5%',
    },
    chart: {
      // marginTop: getStatusBarHeight(),
      marginTop: 16,
      alignItems: 'center',
    },
    card: {
      backgroundColor: 'pink',
      borderRadius: 24,
      margin: '3%',
    },
  });

  var x = 'test';
  const HeaderBar = props => {
    return (
      <Appbar.Header>
        {/* <Ionicons
          name="md-checkmark-circle"
          style={{backgroundColor: 'transparent',height:64,width:64}}
        /> */}
        <Text
          onclick={() => {
            console.warn('click');
          }}>
          Test
        </Text>
        <Appbar.Action
          icon="archive"
          onPress={() => {
            props.nav.openDrawer();
          }}
          style={{
            height: 48,
            width: 48,
          }}
        />

        <Appbar.Action
          icon="bing"
          onPress={() => {
            console.warn('Pressed archive');
          }}
          style={{
            height: 48,
            width: 48,
          }}
        />
        <Appbar.Content title={props.title} />
      </Appbar.Header>
    );
  };

  function HomeScreen({navigation}) {
    // console.warn(JSON.stringify(route.params));
    const [text, setText] = React.useState('');
    return (
      <View>
        <HeaderBar title="Dashboard" nav={navigation} />
        <SafeAreaView>
          <ScrollView>
            <View style={styles.chart}>
              <Text style="">Bezier Line Chart</Text>
              <LineChart
                data={{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                  ],
                  datasets: [
                    {
                      data: [
                        Math.random() * 1,
                        Math.random() * 1,
                        Math.random() * 1,
                        Math.random() * 1,
                        Math.random() * 1,
                        Math.random() * 1,
                      ],
                    },
                  ],
                }}
                width={Dimensions.get('window').width} // from react-native
                height={128}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: '#e26a00',
                  backgroundGradientFrom: '#fb8c00',
                  backgroundGradientTo: '#ffa726',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  margin: 16,
                  borderRadius: 18,
                }}
              />
            </View>
            <View>
			<SafeAreaView>
			<ScrollView>
              <Card style={styles.card}>
                <Card.Title
                  title="Test cards"
                  subtitle="Subtitle"
                  left={(props: any) => (
                    <Avatar.Icon {...props} icon="folder" />
                  )}
                  right={(props: any) => (
                    <IconButton
                      {...props}
                      icon="dots-vertical"
                      onPress={() => {}}
                    />
                  )}
                />
              </Card>
			  <Card style={styles.card}>
                <Card.Title
                  title="Test cards"
                  subtitle="Subtitle"
                  left={(props: any) => (
                    <Avatar.Icon {...props} icon="folder" />
                  )}
                  right={(props: any) => (
                    <IconButton
                      {...props}
                      icon="dots-vertical"
                      onPress={() => {}}
                    />
                  )}
                />
              </Card>
			  <Card style={styles.card}>
                <Card.Title
                  title="Test cards"
                  subtitle="Subtitle"
                  left={(props: any) => (
                    <Avatar.Icon {...props} icon="folder" />
                  )}
                  right={(props: any) => (
                    <IconButton
                      {...props}
                      icon="dots-vertical"
                      onPress={() => {}}
                    />
                  )}
                />
              </Card>
			  <Card style={styles.card}>
                <Card.Title
                  title="Test cards"
                  subtitle="Subtitle"
                  left={(props: any) => (
                    <Avatar.Icon {...props} icon="folder" />
                  )}
                  right={(props: any) => (
                    <IconButton
                      {...props}
                      icon="dots-vertical"
                      onPress={() => {}}
                    />
                  )}
                />
              </Card>
			  <Card style={styles.card}>
                <Card.Title
                  title="Test cards"
                  subtitle="Subtitle"
                  left={(props: any) => (
                    <Avatar.Icon {...props} icon="folder" />
                  )}
                  right={(props: any) => (
                    <IconButton
                      {...props}
                      icon="dots-vertical"
                      onPress={() => {}}
                    />
                  )}
                />
              </Card>
			  <Card style={styles.card}>
                <Card.Title
                  title="Test cards"
                  subtitle="Subtitle"
                  left={(props: any) => (
                    <Avatar.Icon {...props} icon="folder" />
                  )}
                  right={(props: any) => (
                    <IconButton
                      {...props}
                      icon="dots-vertical"
                      onPress={() => {}}
                    />
                  )}
                />
              </Card>
			  <Card style={styles.card}>
                <Card.Title
                  title="Test cards"
                  subtitle="Subtitle"
                  left={(props: any) => (
                    <Avatar.Icon {...props} icon="folder" />
                  )}
                  right={(props: any) => (
                    <IconButton
                      {...props}
                      icon="dots-vertical"
                      onPress={() => {}}
                    />
                  )}
                />
              </Card>
			  <Card style={styles.card}>
                <Card.Title
                  title="Test cards"
                  subtitle="Subtitle"
                  left={(props: any) => (
                    <Avatar.Icon {...props} icon="folder" />
                  )}
                  right={(props: any) => (
                    <IconButton
                      {...props}
                      icon="dots-vertical"
                      onPress={() => {}}
                    />
                  )}
                />
              </Card>
			</ScrollView>
			</SafeAreaView>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }

  function SettingsScreen({navigation}) {
    return (
      <View>
        <HeaderBar title="Parametre" nav={navigation} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Settings!</Text>
        </View>
      </View>
    );
  }

  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Relation Clients" component={SettingsScreen} />
      <Drawer.Screen name="Transactions" component={SettingsScreen} />
      <Drawer.Screen name="Approbations" component={SettingsScreen} />
      <Drawer.Screen name="Consultation" component={SettingsScreen} />
      <Drawer.Screen name="Outils" component={SettingsScreen} />
      <Drawer.Screen name="Habilitations" component={SettingsScreen} />
      <Drawer.Screen name="Sous Traitance" component={SettingsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
