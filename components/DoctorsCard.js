import { View, Text, Image ,Dimensions} from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const DoctorsCard = ({item}) => {
  return (
    <View style={{
      flexDirection:"row",
      
      width:"100%",
      position:"relative",
      height:"100%",
      
      }}>
      
     <View style={{flexDirection:"column",justifyContent:"space-evenly"}}>
     <Text style={{fontSize:windowHeight *0.014}}>{item.name}</Text>
      <Text style={{fontSize:windowHeight *0.014}}>{item.category}</Text>
      <View style={{flexDirection:"row"}}>
      <Entypo name='star' color={"yellow"}/> 
      <Entypo name='star' color={"yellow"}/>
      <Entypo name='star' color={"yellow"}/>
      <Entypo name='star' color={"yellow"}/>
      <Entypo name='star' color={"yellow"}/>
      </View>
      <Text style={{fontSize:windowHeight *0.014}}>Experience</Text>
      <Text style={{fontSize:windowHeight *0.014}}>{item.experience}</Text>
      <Text style={{fontSize:windowHeight *0.014}}>Patients</Text>
      <Text style={{fontSize:windowHeight *0.014}}>{item.patients}</Text>
     </View>
      <View style={{}}>
      <Image source={item.image} style={{height:windowHeight *0.10, width:windowWidth *0.14,position:"relative",top:windowHeight*0.06,right:20}}/>
      </View>
     
    </View>
  )
}

export default DoctorsCard