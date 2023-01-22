
import { View, StyleSheet,Text ,Linking} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { green, lightgreen } from './Constants';

const Home = (props) =>{
  
  return (
    
      <Background>
        <View style={{marginHorizontal:30,marginVertical:260}}>
        <Text style={{color:'black',fontSize:22,fontWeight:'bold'}}>Welcome to Find Green</Text>
        <Text style={{color:'black',fontSize:16,paddingVertical:5}}>Searching for electric vehicle charging stations in India? Visit  
        <Text style={styles.hyperlinkStyle} onPress={() => { Linking.openURL('https://techup.co.in');}}> Find Green</Text> and select your nearest location to get a list of fast charging stations for your electric vehicles.</Text>
        <Btn bgColor={green} textColor={'white'} btnLabel="Log In" Press={()=>props.navigation.navigate("Login")}/>
        <Btn bgColor='white' textColor={'black'} btnLabel="Register" Press={()=>props.navigation.navigate("Register")}/>
        </View>
        
      </Background>
    
  );
}
const styles = StyleSheet.create({
  hyperlinkStyle:{
    color: lightgreen,
    textDecorationLine:'underline',
  }
})
export default Home;
