/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
// import { Button as rButton } from 'react-native';
import Paragraph from '../components/Paragraph';
import Alert from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Login</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      {/* <rButton title='testtt'/> */}
      {/* <Button
        title = 'Login' mode="contained" onPress={()=>{
          console.log('test')
        }}
        ></Button> */}
      <Button
        mode="contained"
        // style={{
        //   color:'red'
        // }}
        onPress={() => {
          // Alert.alert('Simple Button pressed');
          navigation.navigate('LoginScreen');}
        }
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() =>{ navigation.navigate('RegisterScreen')
        console.log('btn rgstr')  
      }}
      >
        Sign Up
      </Button>
    </Background>
  )
}
