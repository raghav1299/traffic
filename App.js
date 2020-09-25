import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/Screens/SearchScreen';
import addScreen from './src/Screens/addScreen';
import homeScreen from './src/Screens/homeScreen';
import displayScreen from './src/Screens/displayScreen'
import { add } from "react-native-reanimated";

const AuthStack = createStackNavigator();

export default App = () => {

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Traffic App" component={homeScreen} options={{ headerShown: false }}/>
        <AuthStack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
        <AuthStack.Screen name="addScreen" component={addScreen} options={{ headerShown: false }} />
        <AuthStack.Screen name="displayScreen" component={displayScreen} options={{ headerShown: false }} />
      </AuthStack.Navigator>
    </NavigationContainer>

  );
}