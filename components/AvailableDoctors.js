import { View, Text, ScrollView ,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import data from '../constants/data'
import DoctorCard from './DoctorCard';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const AvailableDoctors = ({ selectedCategory }) => {
    const {doctors} = data;
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
    const filteredDoctors = doctors.filter((item) => item.category === selectedCategory);
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {filteredDoctors.map((item,index)=>(
        <TouchableOpacity key={index} onPress={()=>handlePress(item)}>
        <View  style={{
         marginTop:10,
          margin:10,
          padding:5,
          backgroundColor:"white",
          elevation:5,
          width:windowWidth *0.6,
          borderRadius:10,
          height:windowHeight *0.3
          }}>
            <DoctorCard item={item} key={index}/>
        </View>
        </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
  )
}

export default AvailableDoctors