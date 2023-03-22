

import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { NavigationContainer } from "@react-navigation/native";

import BookAppointment from "./screens/BookAppointment";
import AppointmentDetails from "./screens/AppointmentDetails";
import EditAppointment from "./screens/EditAppointment";
import BottomNavigation from "./components/BottomNavigation";
import Details from "./screens/Details";
import Search from "./screens/Search";


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
      > 
      {/* <Stack.Screen name="AppointmentDetails" component={AppointmentDetails}/> */}
      <Stack.Screen name="BottomNavigation" component={BottomNavigation}/>
      <Stack.Screen name="EditAppointment" component={EditAppointment}/>
        <Stack.Screen name="BookAppointment" component={BookAppointment}/>  
      <Stack.Screen name="Details" component={Details}/>
      <Stack.Screen name="Search" component={Search}/>
      
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
