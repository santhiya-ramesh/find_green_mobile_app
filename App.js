
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Login from './src/Login';
import Register from './src/Register';
import RegisterOTP from './src/RegisterOTP';
import LoginOTP from './src/LoginOTP';
import Sucesspage from './src/Sucesspage';

const Stack = createNativeStackNavigator();
function App() {
  return (
    
      <NavigationContainer>
       
        <Stack.Navigator screenOptions={{headerShown :false}}>
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} /> 
        <Stack.Screen name="RegisterOTP" component={RegisterOTP} />   
        <Stack.Screen name="LoginOTP" component={LoginOTP} />     
        <Stack.Screen name="Sucesspage" component={Sucesspage} /> 
           
      </Stack.Navigator>
        
      
    </NavigationContainer>
    
    
  );
}
export default App;



