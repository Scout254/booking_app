import { View, Text, Image, TouchableOpacity,Dimensions, ScrollView,RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import Doc from '../assets/doc.png'
import Feather from 'react-native-vector-icons/Feather'
import db from '../firebase'
import { useNavigation } from '@react-navigation/native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const AppointmentDetails = () => {
  const [bookings, setBookings] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    // Retrieve the appointments collection and query for all documents
    db.collection('bookings')
      .get()
      .then((querySnapshot) => {
        const bookingsArray = [];
        querySnapshot.forEach((doc) => {
          // Convert the Firestore document to a JavaScript object and add it to the appointments array
          bookingsArray.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setBookings(bookingsArray); // Update the state variable with the appointments data
      })
      .catch((error) => {
        console.log('Error getting appointments:', error);
      });
  };

  const handleDelete = (id) => {
    // Get a reference to the document you want to delete
    const appointmentRef = db.collection('bookings').doc(id);

    // Delete the document
    appointmentRef
      .delete()
      .then(() => {
        console.log('Appointment deleted successfully');
        setBookings((prevState) => prevState.filter((appointment) => appointment.id !== id)); // Update the state to remove the deleted appointment
      })
      .catch((error) => {
        console.log('Error deleting appointment:', error);
      });
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchBookings();
    setRefreshing(false);
  };
  return (
    <View style={{marginTop:50}}>
      <ScrollView refreshControl={
     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  }>
        
      {bookings?.map((item) => (
        <View key={item.id} style={{margin:10,padding:10,backgroundColor:"white",borderRadius:10,elevation:5}}>
          <View style={{ flexDirection: 'row', alignItems:"center" }}>
            <Image source={item.profile} style={{ height: 60, width: 60 }} />
            <View style={{marginLeft:20,width:windowWidth *0.6}}>
              <Text>{item.doctorName}</Text>
              <View style={{ flexDirection: 'row',alignItems:"center" }}>
                <Text>{item.type}</Text>
                <View style={{width:10,height:2,backgroundColor:"black",marginRight:5,marginLeft:5}}></View>
                <Text>{item.speciality}</Text>
              </View>
            </View>

            <Feather name="more-vertical" size={20}  style={{marginLeft:20}}/>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between',margin:5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="calendar" size={22} />
              <Text style={{ fontSize: 15,paddingLeft:5 }}>{item.date}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Feather name="clock" size={22} />
              <Text style={{ fontSize: 15,paddingLeft:5 }}>{item.time}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ backgroundColor: 'orange', borderRadius: 50, width: 10, height: 10 }}></View>
              <Text style={{paddingLeft:5}}>Rescheduled</Text>
            </View>
          </View>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <View style={{ backgroundColor: 'gray', padding: 10, borderRadius: 10, elevation: 5,width:150,height:40 }}>
              <Text style={{textAlign:"center"}}>Cancel</Text>
            </View>

          </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('EditAppointment', { id: item.id,name:item.doctorName,image:item.profile})}>
            <View style={{ backgroundColor: 'red', padding: 10, borderRadius: 10, elevation: 5,width:150,height:40 }}>
              <Text style={{textAlign:"center"}}>Edit</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      </ScrollView>
    </View>
  );
};

export default AppointmentDetails;
