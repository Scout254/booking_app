import { View, Text, TouchableOpacity ,ScrollView, Image, Alert} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Picker } from '@react-native-picker/picker'
import React, { useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import Doc from '../assets/doc.png'
import db from '../firebase'

const BookAppointment = ({route}) => {
  const {name,image} = route.params;
  const navigation = useNavigation();
  const saveAppointment = async (bookingDetails) => {
    try {
      // Add the appointment details to Firestore
      const bookingRef = await db.collection('bookings').add(bookingDetails);
      
      // Log the ID of the newly added appointment
      console.log('Appointment added with ID: ', bookingRef.id);
    } catch (error) {
      console.error('Error adding appointment: ', error);
    }
  };
const handleSubmit = async () => {
  const appointmentDetails = {
    doctorName: name,
    profile:image,
    date: `${daysOfWeek[new Date(selectedMonth + ' ' + selectedDay + ', ' + new Date().getFullYear()).getDay()]} ${selectedDay} ${selectedMonth}`,
    time: selectedSlot !== null ? data[selectedSlot].time : null,
    type: selectedType !== null ? type[selectedType].time : null,
    speciality: selectedSpeciality !== null ? speciality[selectedSpeciality].time : null,
  };
  

  // Save the appointment details to Firestore
  await saveAppointment(appointmentDetails);
  console.log(appointmentDetails);

  // Show a success message to the user
  navigation.navigate('AppointmentDetails');
};

  


const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [daysInMonth, setDaysInMonth] = useState(31);
  const scrollRef = useRef(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const handleDayPress = (day) => {
    setSelectedDay(day);
  
  };
  
  const [selectedType, setSelectedType] = useState(null);
  
  const [selectedSlot, setSelectedSlot] = useState(null);
 
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);
  

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    // Update daysInMonth based on selected month
    switch (month) {
      case 'February':
        break;
      case 'April':
      case 'June':
      case 'September':
      case 'November':
        setDaysInMonth(30);
        break;
      default:
        setDaysInMonth(31);
        break;
    }
  };

  const handleScroll = (event) => {
    const { x } = event.nativeEvent.contentOffset;
    scrollRef.current.scrollTo({ x });
  };



  const renderDaysInMonth = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      // Get the day of the week for this date
      const date = new Date(selectedMonth + ' ' + i + ', ' + new Date().getFullYear());
      const dayOfWeek = daysOfWeek[date.getDay()];
  
      // Determine if this day is currently selected
      const isSelectedDay = i === selectedDay;
  
      // Apply blue background color if this is the selected day
      const backgroundColor = isSelectedDay ? 'blue' : 'transparent';
  
      days.push(
        <TouchableOpacity
          key={i}
          style={{ flex: 1, alignItems: 'center', margin: 10, backgroundColor ,height:40,width:40,borderRadius:10,}}
          onPress={() => handleDayPress(i)}
        >
          <Text style={{ color: isSelectedDay ? 'white' : 'black' }}>{dayOfWeek}</Text>
          <Text style={{ color: isSelectedDay ? 'white' : 'black' }}>{i}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <ScrollView
        ref={scrollRef}
        horizontal={true}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          {days}
        </View>
      </ScrollView>
    );
  };
  
  const data =[
    {
      time:"10:10 am"
    },
    {
      time:"10:30 am"
    },
    {
      time:"11:00 am"
    },
    {
      time:"11:40 am"
    },
  ]

  const type =[
    {
      time:"In person"
    },
    {
      time:"Video Session"
    },
    {
      time:"Audio Session"
    },
    
  ]
  const speciality =[
    {
      time:"General checkup"
    },
    {
      time:"Blood Tests"
    },
    {
      time:"Special Checkup"
    },
    
  ]

  return (
    <View style={{margin:10}}>
    <View style={{flexDirection:"row",marginTop:40,alignItems:"center"}}>
   <TouchableOpacity  onPress={()=>navigation.goBack()}>
   <Ionicons name='md-chevron-back' size={30} style={{}}/>
   </TouchableOpacity>
    
    <Text style={{
      
      fontSize:20,fontWeight:"600"
      }}>Book Appointment</Text>
    </View>
    <View style={{flexDirection:"row",alignItems:"center"}}>
        <Image source={image} style={{height:60,width:60,backgroundColor:"white",borderRadius:50,}}/>
        <Text>{name}</Text>
    </View>
    <View>
    <View style={{ alignItems: 'center', marginTop: 50 }}>
    <Picker
      selectedValue={selectedMonth}
      style={{ height: 50, width: 150 }}
      onValueChange={(itemValue) => handleMonthChange(itemValue)}
    >
      <Picker.Item label="January" value="January" />
      <Picker.Item label="February" value="February" />
      <Picker.Item label="March" value="March" />
      <Picker.Item label="April" value="April" />
      <Picker.Item label="May" value="May" />
      <Picker.Item label="June" value="June" />
      <Picker.Item label="July" value="July" />
      <Picker.Item label="August" value="August" />
      <Picker.Item label="September" value="September" />
      <Picker.Item label="October" value="October" />
      <Picker.Item label="November" value="November" />
      <Picker.Item label="December" value="December" />
    </Picker>
   
   
    {renderDaysInMonth()}
    
  </View>
     
    </View>
    <View>
      <Text>Slots</Text>
      
      
      <View style={{flexDirection:"row",flexWrap:"wrap"}}>
      {data.map((item, index) => (
  <View
    key={index}
    style={{
      height: 40,
      backgroundColor: selectedSlot === index ? "blue" : "white",
      borderRadius: 10,
      padding: 5,
      elevation: 5,
      justifyContent: "center",
      alignItems: "center",
      margin: 10
    }}
    onTouchEnd={() => {
      setSelectedSlot(index);
      console.log('selected slot:', index);
    }}
    
    
  >
    <Text style={{color:selectedSlot === index ? "white":"black"}}>{item.time}</Text>
  </View>
))}

       
       
        
        
      </View>
    </View>
    <View>
      <Text>Speciality</Text>
      
      
      <View style={{flexDirection:"row",flexWrap:"wrap"}}>
      {speciality.map((item, index) => (
  <View
    key={index}
    style={{
      height: 40,
      backgroundColor: selectedSpeciality === index ? "blue" : "white",
      borderRadius: 10,
      padding: 5,
      elevation: 5,
      justifyContent: "center",
      alignItems: "center",
      margin: 10
    }}
    onTouchEnd={() => {
      setSelectedSpeciality(index);
      console.log('selected speciality:', index);
    }}
    
   
  >
    <Text style={{color:selectedSpeciality === index ? "white":"black"}}>{item.time}</Text>
  </View>
))}

       
       
        
        
      </View>
    </View>
    <View>
      <Text>Appointment type</Text>
      <View style={{flexDirection:"row",flexWrap:"wrap"}}>
      {type.map((item, index) => (
  <View
    key={index}
    style={{
      height: 40,
      backgroundColor: selectedType === index ? "blue" : "white",
      borderRadius: 10,
      padding: 5,
      elevation: 5,
      justifyContent: "center",
      alignItems: "center",
      margin: 10
    }}
    onTouchEnd={() => setSelectedType(index)}
   
  >
    <Text style={{color:selectedType === index ? "white":"black"}}>{item.time}</Text>
  </View>
))}

       
        
        
      </View>
    </View>
    <TouchableOpacity onPress={handleSubmit}>
    <View style={{height:40,backgroundColor:"blue",justifyContent:"center",alignItems:"center",borderRadius:10}}>
      <Text style={{color:"white"}}>Confirm Appointment</Text>
    </View>
    </TouchableOpacity>
  </View>
  )
}

export default BookAppointment