import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from './src/Screens/screen1';
import Screen2 from './src/Screens/screen2';
import homeScreen from './src/Screens/homeScreen';

const AuthStack = createStackNavigator();

export default App =()=> {

  return(
<NavigationContainer>
  <AuthStack.Navigator>
  <AuthStack.Screen name="Traffic App" component={homeScreen}/>
    <AuthStack.Screen name="Screen1" component={Screen1}/>
    <AuthStack.Screen name="Screen2" component={Screen2}/>

  </AuthStack.Navigator>
</NavigationContainer>

);
  }