import { View, Text, ScrollView ,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import data from '../constants/data'

import DoctorsCard from '../components/DoctorsCard'
import { useNavigation } from '@react-navigation/native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const Doctors = () => {
    const {doctors,categories} = data;
    const navigation = useNavigation();
    const handlePress = (item) => {
      const { image, name, category, experience, patients } = item;
      navigation.navigate("Details", {
        image,
        name,
        category,
        experience,
        patients,
      });
    };
  return (
    <View style={{marginTop:windowHeight *0.06,}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((item,index)=>(
          <View key={index} style={{height:50,marginBottom:10,justifyContent:"center",margin:4,padding:5}}>
            <Text style={{fontSize:16}}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    <ScrollView showsVerticalScrollIndicator={false}
    style={{
      marginBottom:windowHeight *0.10
    }}
    >
      
      <View style={{
      flexDirection:"row",
      flexWrap:"wrap",
      
    }}>
     
      {doctors.map((item,index)=>(
        <TouchableOpacity key={index} onPress={()=>handlePress(item)}>
        <View  style={{
         marginTop:10,
          margin:10,
          padding:5,
          backgroundColor:"white",
          elevation:5,
          width:windowWidth *0.44,
          borderRadius:10,
          height:windowHeight *0.18
          }}>
            <DoctorsCard item={item} key={index}/>
        </View>
        </TouchableOpacity>
      ))}
    </View>
    </ScrollView>
    </View>
  )
}

export default Doctors