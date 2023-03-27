import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import cities from '../services/data/cities.json';
import vacancies from '../services/data/vacancies.json';
import moment from 'moment';
import { colors } from '../assets/themes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import categories from "../services/data/categories.json"

const CreatedDatePicker = () => {
    const [selecteddate, setSelectedDate] = useState(null);

    const handleCityChange = (date: React.SetStateAction<null>) => {
        setSelectedDate(date);
      };
  return (
    <View>
    <View>
        <Text>Sirala</Text>
        <Picker 
        selectedValue={selecteddate}
        onValueChange={handleCityChange}>
        {
            vacancies.map((date: any) =>(
<Picker.Item 
label={date.deadline}/>

            ))
        }
        </Picker>
    </View>
    </View>
  )
}

export default CreatedDatePicker

const styles = StyleSheet.create({})