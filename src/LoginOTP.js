
import { View, StyleSheet,Text ,Linking,TextInput} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { green, red } from './Constants';

const Home = (props) =>{
  
  return (
    
      <Background>
        <View style={{marginHorizontal:30,marginVertical:260}}>
        <Text style={{color:'black',fontSize:22,fontWeight:'bold'}}>Enter OTP</Text>
        <Text style={{color:'black',fontSize:16,paddingVertical:5}}>We have sent an OTP to 99*****173 &  ysai*****55**.com </Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',width: 50, paddingVertical:5}}>
          <TextInput style={styles.b1} />
          <TextInput style={styles.b1} />
          <TextInput style={styles.b1}  />
          <TextInput style={styles.b1}  />
        </View>
        <Text style={{color:'black',fontSize:16,paddingVertical:5}}>Didn’t receive the OTP? Click here to <Text style={styles.hyperlinkStyle} onPress={() => { Linking.openURL('https://techup.co.in');}}> Resend OTP</Text> </Text>
        <Btn bgColor={green} textColor={'white'} btnLabel="Confirm" />
        <Btn bgColor='white' textColor={'black'} btnLabel="Go back" Press={()=>props.navigation.navigate("Login")}/>
        </View>
        
      </Background>
    
  );
}
const styles = StyleSheet.create({
  hyperlinkStyle:{
    color: red,
    
  },
  b1:{
    borderRadius: 5,
        backgroundColor:'#FFFFFF',
        borderColor:'#04030899',
        alignItems: 'center',
        width: 50,
        paddingVertical:10,
        marginVertical:10,
        marginHorizontal:10,
        paddingHorizontal:10,
  },
})
export default Home;
