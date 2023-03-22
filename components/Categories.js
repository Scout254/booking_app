import { View, Text, ScrollView, Image ,Dimensions, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import data from '../constants/data'
import AvailableDoctors from './AvailableDoctors'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const Categories = () => {
  const {categories} = data;
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((item,index)=>(
            <TouchableOpacity key={index} onPress={() => handleCategorySelect(item.name)}>
              <View  style={{
              margin:5,
              alignItems:"center",
              padding:5,
              backgroundColor:selectedCategory === item.name ? "gray" : "white",
              elevation:5,
              borderRadius:10
              
            }}>
                <Image source={item.image}
                 style={{width:40,height:40}}/>
                <Text style={{fontSize:12}}>{item.name}</Text>
            </View>
            </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",margin:5}}>
        <Text>AvailableDoctors</Text>
       
       <Text>View All</Text>
       
      </View>
      <AvailableDoctors selectedCategory={selectedCategory} />
    </View>
  )
}

export default Categories