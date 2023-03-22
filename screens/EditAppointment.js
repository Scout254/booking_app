import { View, Text, TouchableOpacity ,ScrollView, Image, Alert} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Picker } from '@react-native-picker/picker'
import React, { useState, useRef,useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Doc from '../assets/doc.png'
import db from '../firebase'
import moment from 'moment/moment'

const EditAppointment = ({route}) => {
  
  const { id,name,image } = route.params;
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    const fetchAppointment = async () => {
      const appointmentRef = await db.collection('bookings').doc(id).get();
      setAppointment(appointmentRef.data());
    };
    fetchAppointment();
    
  }, []);

  const navigation = useNavigation();
 
  const [selectedType, setSelectedType] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState('');
  const [selectedMonth, setSelectedMonth] = useState(null); 
const [selectedDay, setSelectedDay] = useState(null); 


useEffect(() => {
  if (appointment) {
    console.log(appointment.date);

    // Split the appointment date string into day of week, day of month, and month
    const [dayOfWeek, dayOfMonth, month] = appointment.date.split(' ');

    // Construct a date object using moment.js
    const date = moment(`${dayOfWeek} ${dayOfMonth} ${month}`, 'D MMMM');

    setSelectedMonth(date.month());
    console.log("selectedMonth:", selectedMonth);

    setSelectedDay(date.date());
    console.log("selectedDay:", selectedDay);

    setSelectedType(type.findIndex(item => item.time === appointment.type));
    setSelectedSlot(data.findIndex(item => item.time === appointment.time));
    setSelectedSpeciality(speciality.findIndex(item => item.time === appointment.speciality));
  }
}, [appointment]);
  

  
  const handleSubmit = async () => {
    const appointmentDetails = {
      date: `${selectedMonth} ${selectedDay}, ${new Date().getFullYear()}`,
      time: selectedSlot !== null ? data[selectedSlot].time : null,
      type: selectedType !== null ? type[selectedType].time : null,
      speciality: selectedSpeciality !== null ? speciality[selectedSpeciality].time : null,
    };
  
    try {
      await db.collection('bookings').doc(id).update(appointmentDetails);
      console.log(appointmentDetails)
      navigation.navigate('AppointmentDetails');
    } catch (error) {
      console.error('Error updating appointment: ', error);
      Alert.alert('Error', 'An error occurred while updating the appointment.');
    }
  };
  

  


const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


// console.log("selecteday:",selectedDay)
// console.log("month",selectedMonth)


  
  const [daysInMonth, setDaysInMonth] = useState(31);
  const scrollRef = useRef(null);
 
  const handleDayPress = (day) => {
    setSelectedDay(day);
  
  };
 

  

  const handleMonthChange = (month) => {
    switch (month) {
      case 0: // January
      case 2: // March
      case 4: // May
      case 6: // July
      case 7: // August
      case 9: // October
      case 11: // December
        setDaysInMonth(31);
        break;
      case 1: // February
        // Check if the current year is a leap year
        const isLeapYear = new Date().getFullYear() % 4 === 0;
        setDaysInMonth(isLeapYear ? 29 : 28);
        break;
      default: // April, June, September, November
        setDaysInMonth(30);
        break;
    }
    setSelectedMonth(month);
  };
  
  // const selectedMonthString = moment().month(selectedMonth).format('MMMM');

  const handleScroll = (event) => {
    const { x } = event.nativeEvent.contentOffset;
    scrollRef.current.scrollTo({ x });
  };



  const renderDaysInMonth = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      // Get the day, month, and day of week for this date
      const date = moment(`${i} ${selectedMonth}`, 'DD MM');
      const dayOfWeek = date.format('ddd');
      const month = date.format('MMMM');
    
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
      }}>Edit Appointment</Text>
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
    onValueChange={handleMonthChange}
  >
    <Picker.Item label="January" value={0} />
    <Picker.Item label="February" value={1} />
    <Picker.Item label="March" value={2} />
    <Picker.Item label="April" value={3} />
    <Picker.Item label="May" value={4} />
    <Picker.Item label="June" value={5} />
    <Picker.Item label="July" value={6} />
    <Picker.Item label="August" value={7} />
    <Picker.Item label="September" value={8} />
    <Picker.Item label="October" value={9} />
    <Picker.Item label="November" value={10} />
    <Picker.Item label="December" value={11} />
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
      <Text style={{color:"white"}}>Reschedule Appointment</Text>
    </View>
    </TouchableOpacity>
  </View>
  )
}

export default EditAppointment