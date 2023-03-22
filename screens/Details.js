import { View, Text, Image,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Doc from '../assets/doc.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
const Details = ({route}) => {
  const navigation = useNavigation();
  const {name, image, category, experience, patients} = route.params;

  const handleBooking = (name,image) => {
    
    navigation.navigate("BookAppointment", {
      image,
      name,
      category,
      experience,
      patients,
    });
  };
  

  
  return (
    <View style={{margin:10,height:windowHeight,justifyContent:"space-evenly"}}>
      
      <View style={{flexDirection:"row",marginTop:40,alignItems:"center"}}>
     <TouchableOpacity  onPress={()=>navigation.goBack()}>
     <Ionicons name='md-chevron-back' size={30} style={{}}/>
     </TouchableOpacity>
      
      <Text style={{
        marginLeft:windowWidth *0.20,
        fontSize:20,fontWeight:"600"
        }}>{name}</Text>
      </View>
      <Image
       source={image} 
       style={{width:windowWidth *0.9,
        height:windowHeight *0.34
        }}/>
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
     <TouchableOpacity>
     <View style={{
        flexDirection:"row",
        height:windowHeight *0.06,
        backgroundColor:"blue",
        alignItems:"center",
        borderRadius:10,
        padding:10
      }}>
      <Ionicons name='videocam'color={"white"}/>
      <Text style={{color:"white",paddingLeft:5}}>Voice Call</Text>
      </View>
     </TouchableOpacity>
    <TouchableOpacity>
   <TouchableOpacity>
   <View
    style={{
    flexDirection:"row",
  height:windowHeight *0.06,
  backgroundColor:"purple",
  alignItems:"center",
  borderRadius:10,
  padding:10
}}>
        <Ionicons name='ios-call'color={"white"}/>
        <Text style={{color:"white",paddingLeft:5}}
        >Video Call</Text>
        </View>
   </TouchableOpacity>
    </TouchableOpacity>
   <TouchableOpacity>
   <View style={{
        flexDirection:"row",
        height:windowHeight *0.06,
        backgroundColor:"orange",
        alignItems:"center",
        borderRadius:10,
        padding:10
      }}>
     <AntDesign name='message1' color={"white"}/>
     <Text  style={{color:"white",paddingLeft:5}}>Message</Text>
     </View>
   </TouchableOpacity>
      </View>
      <View style={{height:windowHeight *0.34,justifyContent:"space-evenly"}}>
      <Text style={{fontSize:18,fontWeight:"600"}}>{category}</Text>
      <Text>Good Health Clinic ,MBBS,FCPS</Text>
      <View style={{flexDirection:"row",}}>
      <Entypo name='star' color={"orange"}/>
      <Entypo name='star' color={"orange"}/>
      <Entypo name='star' color={"orange"}/>
      <Entypo name='star' color={"orange"}/>
      <Entypo name='star' color={"orange"}/>
      </View>
      <Text style={{fontSize:18,fontWeight:"600"}}>About {name}</Text>
      <Text>paragraph</Text>
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <View>
      <Text>Patients</Text>
      <Text>{patients}</Text>
      </View>
      <View>
      <Text>Experience</Text>
      <Text>{experience}</Text>
      </View>
      <View>
      <Text>Review</Text>
      <Text>2.05K</Text>
      </View>
      </View>
      </View>
      <TouchableOpacity onPress={()=> handleBooking(name,image) }>
      <View  style={{
        height:40,
        backgroundColor:"blue",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
       
       
      }}>
        <Text style={{textAlign:"center",color:"white"}}>Book an Appointment</Text> 
      </View>
      </TouchableOpacity>
      
    </View>
  )
}

export default Details