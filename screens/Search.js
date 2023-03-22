import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text, ScrollView, Image,Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import DoctorsCard from '../components/DoctorsCard';
import data from '../constants/data';
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
function Search() {
  const { doctors } = data;
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredResults = doctors.filter(
      (doctor) =>
        doctor.category.toLowerCase().includes(search.toLowerCase())
    );
    setResults(filteredResults);
   
    console.log('results:', results.map((doctor) => doctor.name));
  };
  const navigation = useNavigation();
    const handlePress = (item) => {
      const { image, name, category, experience, patients } = item;
      navigation.navigate("Details", {
        image,
        name,
        category,
        experience,
        patients,
      });
    };
  return (
    <View>
        <View style={{ marginTop: 50, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
      <TextInput
        placeholder="Search categories"
        style={{ width: '100%', borderWidth: 1, alignItems: 'center', height: 50 }}
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <TouchableOpacity onPress={handleSearch}>
        <AntDesign name="search1" size={20} style={{ position: 'relative', right: 20 }} />
      </TouchableOpacity>
     
    </View>
    <View>
        <ScrollView>
          
        {results.length > 0 && (
        <View style={{ marginTop: 0 }}>
        {results.map((item, index) => (
          <TouchableOpacity key={index} onPress={()=>handlePress(item)}>
          <View  style={{
           marginTop:10,
            margin:10,
            padding:5,
            backgroundColor:"white",
            elevation:5,
            width:windowWidth *0.44,
            borderRadius:10,
            height:windowHeight *0.18
            }}>
              <DoctorsCard item={item} key={index}/>
          </View>
          </TouchableOpacity>
        ))}
      </View>
      
      )}
        </ScrollView>
      </View>
    </View>
  );
}

export default Search;
