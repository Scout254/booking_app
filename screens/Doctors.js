import { View, Text, ScrollView ,Dimensions, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import data from '../constants/data'

import DoctorsCard from '../components/DoctorsCard'
import { useNavigation } from '@react-navigation/native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const Doctors = () => {
    const {doctors,categories} = data;
    const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

    const handleCategorySelect = (categoryName) => {
      setSelectedCategory(categoryName);
    };
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
    <View style={{marginTop:windowHeight *0.06,}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((item,index)=>(
          <TouchableOpacity key={index} onPress={() => handleCategorySelect(item.name)}>
            <View  style={{height:50,marginBottom:10,justifyContent:"center",margin:4,padding:5}}>
            <Text 
              style={{
                fontSize: 16,
                color: selectedCategory === item.name ? "black" : "black",
                borderBottomWidth: selectedCategory === item.name ? 4 : 0,
                borderBottomColor: "black",
                padding:5,
                fontWeight:selectedCategory === item.name ? "900":"200"
              }}
            >
              {item.name}
            </Text>

          </View>
          </TouchableOpacity>
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
     
      {filteredDoctors.map((item,index)=>(
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