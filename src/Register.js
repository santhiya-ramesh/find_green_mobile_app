import React from 'react';
import { View, StyleSheet,Text ,Linking, TextInput} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { green, red } from './Constants';

const Home = (props) =>{
  return (
    
      <Background>
        <View style={{marginHorizontal:30,marginVertical:103}}>
        <Text style={{color:'black',fontSize:22,fontWeight:'bold',paddingVertical:10}}>Register!</Text>
        <Text style={{color:'#00000099',fontSize:16,paddingVertical:10}}>Already have an account? <Text style={styles.hyperlinkStyle} onPress={()=>props.navigation.navigate("Login")}> Login</Text></Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',width: 50, paddingVertical:5}}>
          <TextInput style={styles.fname} placeholder="       First Name" placeholderTextColor="#04030866" />
          <TextInput style={styles.lname} placeholder="       Last Name" placeholderTextColor="#04030866" />
        </View>
        <TextInput style={styles.input} placeholder="       Email ID" placeholderTextColor="#04030866" />
        <TextInput style={styles.input} placeholder="       Mobile Number" placeholderTextColor="#04030866" />
        <TextInput style={styles.input} placeholder="       Email ID" placeholderTextColor="#04030866" />
        <TextInput style={styles.input} placeholder="       Mobile Number" placeholderTextColor="#04030866" />
        <Btn bgColor={green} textColor={'white'} btnLabel="Create Account" Press={()=>props.navigation.navigate("RegisterOTP")}/>
        </View>
        
      </Background>
    
  );
}
const styles = StyleSheet.create({
  fname:{
    borderRadius: 5,
        backgroundColor:'#FFFFFF',
        borderColor:'#04030899',
        alignItems: 'center',
        width: 170,
        paddingVertical:10,
        marginVertical:10,
        marginHorizontal:1,
        paddingHorizontal:5,
  },
  lname:{
    borderRadius: 5,
        backgroundColor:'#FFFFFF',
        borderColor:'#04030899',
        alignItems: 'center',
        width: 170,
        paddingVertical:10,
        marginVertical:10,
        marginHorizontal:6,
        paddingHorizontal:5,
  },
  input:{
        borderRadius: 5,
        backgroundColor:'#FFFFFF',
        borderColor:'#04030899',
        alignItems: 'center',
        width: 350,
        
        paddingVertical:10,
        marginVertical:10,
  },
  hyperlinkStyle:{
    
    color:red,
  }
})
export default Home;