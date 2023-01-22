import React from 'react';
import { View, StyleSheet,Text , Image,TextInput, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { green } from './Constants';

const Home = (props) =>{

  return (
    
      <Background>
        <View style={{marginHorizontal:30,marginVertical:260}}>
            <Image style={{alignItems:'center',justify: 'center',marginLeft:120
          }} source={require('../assets/images/Tick.png')}></Image>
            <Text style={styles.input}>Find Green account created successfully</Text>
          <Btn bgColor={green} textColor={'white'} btnLabel="Continue" />
        
        
        </View>
        
      </Background>
    
  );
}
const styles = StyleSheet.create({
  input:{
        
       width:346,
       height:48,
        alignItems: 'center',
        width: 350,
        paddingHorizontal:22,
        fontSize:20,
        
        fontWeight:'bold',
        paddingVertical:10,
        marginVertical:10,
  }
})
export default Home;
