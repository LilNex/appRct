/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { TabNav } from './components/TabNav'
// import {Test} from './components/Test'
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
    // constructor(props) {
    //   	super(props);
    // }
	

	render() {


		function HomeScreen() {
  
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
		 
		  
		function settingsScreen() {
			return (
			  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Settings!</Text>
			  </View>
			);
		  }

		return (

			<View>	 
				 <NavigationContainer>
					{/* <Text>
						TEST CODE
					</Text>	 */}
					<Stack.Navigator>
        				<Stack.Screen name="Home" component={HomeScreen} />
      				</Stack.Navigator>
				 </NavigationContainer>
				
				
			</View>
					
		
			

			
			
		);
	}


}

// const Tab = createBottomTabNavigator();

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.black : Colors.white,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Test />  
        
        
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         {/* <Header /> */}
//         {/* <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>ApSSSp.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View> */}
//       </ScrollView>
//       

//     </SafeAreaView>

//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

