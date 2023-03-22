import { View, Text, ScrollView, Image ,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import data from '../constants/data'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const Categories = () => {
  const {categories} = data;
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((item,index)=>(
            <TouchableOpacity key={index}>
              <View  style={{
              margin:5,
              alignItems:"center",
              padding:5,
              backgroundColor:"white",
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
    </View>
  )
}

export default Categories