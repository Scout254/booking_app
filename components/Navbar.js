import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const Navbar = () => {
  const navigation = useNavigation();
 
  return (
    <View style={{
        marginTop:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        margin:5

        
    }}>
      <Text style={{
        fontSize:24,
      }}>Find your specialist</Text>
      <View style={{
        flexDirection:"row",
        alignItems:"center"
      }}>
       <TouchableOpacity onPress={()=> navigation.navigate("Search")}>
       <EvilIcons name='search' size={30} style={{marginRight:5}}/>
       </TouchableOpacity>
       <TouchableOpacity>
       <AntDesign name='message1' size={25}/>
       </TouchableOpacity>
      </View>
    </View>
  )
}

export default Navbar