import React from 'react';
import { View, Text, ScrollView, Image ,Dimensions, TouchableOpacity} from 'react-native';
import data from '../constants/data';
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const Hero = () => {
  const { banner } = data;
  return (
    <View style={{
     
      
    }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {banner.map((item, index) => (
       <TouchableOpacity key={index}>
           <View  style={{
             
             height:windowHeight *0.25,
             marginTop:windowHeight *0.01,
           
             flexDirection:"row",
             
              width:windowWidth *0.95,
              marginLeft:windowWidth *0.02,
              borderRadius:10,
              padding:4,
              backgroundColor:"white",
              elevation:5,
              marginBottom:5
            
             }}>
          <View style={{width:windowWidth *0.7}}>
           <Text style={{fontSize:18,marginLeft:10,marginTop:10}}>{item.title}?</Text>
           <View style={{flexDirection:"row",marginTop:windowHeight *0.04}}>
           <View style={{height:windowHeight *0.06,width:3,backgroundColor:"green",marginLeft:10,marginRight:10}}></View>
            <View style={{marginTop:windowHeight *0.01}}>
            <Text>{item.name}</Text>
            <Text>{item.hospital}</Text>
            </View>
           </View>
           </View>
          <View style={{width:windowWidth *0.1}}>
          <Image source={item.image} style={{ height: windowHeight *0.24, width: windowWidth *0.2,position:"relative", }} />
          </View>
           
          </View>
       </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Hero;