import { View, Text, ScrollView , TouchableOpacity} from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'

import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();
  const handleDoctors =()=>{
    navigation.navigate("Doctors")
  }
  return (
    <View>
      <ScrollView>
      <Navbar/>
      <Hero/>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",margin:5}}>
        <Text>Categories</Text>
        <TouchableOpacity>
       <Text>View All</Text>
       </TouchableOpacity>
      </View>
      <Categories/>
      
    
      </ScrollView>
    </View>
  )
}

export default Home