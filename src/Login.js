import React from 'react';
import { View, StyleSheet,Text , TextInput, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { green } from './Constants';

const Home = (props) =>{

  return (
    
      <Background>
        <View style={{marginHorizontal:30,marginVertical:260}}>
        <Text style={{color:'black',fontSize:22,fontWeight:'bold' }}>Login</Text>
        <Text style={{color:'black',fontSize:16,paddingVertical:5}}>We will send you the 4 digits Verification Code</Text>
        <TextInput style={styles.input} placeholder="       Enter your mobile number" placeholderTextColor="#04030866" />
        
          <Btn bgColor={green} textColor={'white'} btnLabel="Generate OTP" Press={()=>props.navigation.navigate("LoginOTP")}/>
        
        <Btn bgColor='white' textColor={'black'} btnLabel="Register"Press={()=>props.navigation.navigate("Register")}/>
        </View>
        
      </Background>
    
  );
}
const styles = StyleSheet.create({
  input:{
        borderRadius: 5,
        backgroundColor:'#FFFFFF',
        borderColor:'#04030899',
        alignItems: 'center',
        width: 350,
        
        paddingVertical:10,
        marginVertical:10,
  }
})
export default Home;
