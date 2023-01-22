import React from 'react';
import {View, ImageBackground} from 'react-native';

const Background = ({ children }) => {
  return (
    <View>
      <ImageBackground source={require("../assets/images/findgreen-bg.png")} style={{ height: 499,top:400 }} />
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  );
}

export default Background;
