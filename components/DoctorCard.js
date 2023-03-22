import { View, Text, Image,Dimensions } from 'react-native'
import React from 'react'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
import Entypo from 'react-native-vector-icons/Entypo'
const DoctorCard = ({item,index}) => {
  return (
    <View style={{
      flexDirection:"row",
      
      width:"100%",
      position:"relative",
      height:"100%",
      margin:5
      }}>
      
     <View style={{width:windowWidth*0.4,}}>
     <Text style={{marginTop:5}}>{item.name}</Text>
      <Text style={{marginTop:5}}>{item.category}</Text>
      <View style={{flexDirection:"row"}}>
      <Entypo name='star' color={"yellow"}/> 
      <Entypo name='star' color={"yellow"}/>
      <Entypo name='star' color={"yellow"}/>
      <Entypo name='star' color={"yellow"}/>
      <Entypo name='star' color={"yellow"}/>
      </View>
      <Text style={{marginTop:5}}>Experience</Text>
      <Text style={{marginTop:5}}>{item.experience}</Text>
      <Text style={{marginTop:5}}>Patients</Text>
      <Text style={{marginTop:5}}>{item.patients}</Text>
     </View>
      <View style={{width:windowWidth *0.5}}>
      <Image source={item.image} style={{height:windowHeight *0.18, width:windowWidth *0.18,position:"relative",top:windowHeight*0.06,right:30}}/>
      </View>
     
    </View>
  )
}

export default DoctorCard