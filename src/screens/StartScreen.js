/* eslint-disable prettier/prettier */
import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
// import {Button as cButton} from '../components/Button';
import {Button} from 'react-native';
import Paragraph from '../components/Paragraph';
// import Alert from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Login</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
        title = 'Login' onPress={()=>{
          console.log('test')
        }}
        ></Button>
      {/* <Button
        mode="contained"
        style={{
          color:'red'
        }}
        onPress={() => {
          Alert.alert('Simple Button pressed');
          navigation.navigate('LoginScreen');}
        }
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button> */}
    </Background>
  )
}
