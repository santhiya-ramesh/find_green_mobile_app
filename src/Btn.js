import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Button({bgColor, btnLabel, textColor, Press}) {
  return (
    <View>
      <TouchableOpacity 
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 5,
        borderColor:'#04030899',
        alignItems: 'center',
        width: 350,
        height:50,
        
        paddingVertical:10,
        marginVertical:10,
        }}>
        <Text style={{color: textColor, fontSize: 16, fontWeight: 'bold',paddingVertical:5}}>
        {btnLabel}
      </Text>
      </TouchableOpacity>
     </View>
  );
}
