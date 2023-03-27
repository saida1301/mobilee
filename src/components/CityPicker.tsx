import React, { ReactNode, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import cities from '../services/data/cities.json';
import vacancies from '../services/data/vacancies.json';
import moment from 'moment';
import { colors } from '../assets/themes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import categories from "../services/data/categories.json"
import index from '../navigations';
import CreatedDatePicker from './CreatedDatePicker';
import companies from "../services/data/companies.json"

const CityPicker = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityChange = (city: React.SetStateAction<null>) => {
    setSelectedCity(city);
  };
  const vacanciesWithCompanyNames = vacancies.map(
    (vacancy: {company_id: string; position: any}) => {
      const company = companies.find(c => c.id === vacancy.company_id);
      return {
        ...vacancy,
        company_name: company ? company.name : 'Unknown Company',
        position: `${vacancy.position}`,
      };
    },
  );

  const filteredVacancies = vacancies.filter((vacancy: { city_id: null; }) => {
    return vacancy.city_id === selectedCity;
  });

  return (
    <View>
   <View style={{flexDirection:"row", alignItems:"center", paddingHorizontal:20, flex:1}}>
   <Text style={{color:colors.black}}>Seherler:</Text>
   <Picker
           selectedValue={selectedCity}
        style={{ height: 25, width: 160, borderColor:"#8843E1" , borderRadius:12,}}
        onValueChange={handleCityChange}
      >

        {cities.map((city) => (
          <Picker.Item
            key={city.id}
            label={city.title_az}
            value={city.id}
            style={{color:colors.black}}
          />
        ))}
      </Picker>

   </View>
      {filteredVacancies.map((vacancy: {
        created_at(created_at: any): unknown;
        category_id: any;
        position: ReactNode;
        company_name: ReactNode; id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
}) => (
        <View key={vacancy.id}>
<View style={styles.container}>
<View style={styles.card} key={index}>
              <View style={styles.vacancyBox}>
                <View style={styles.vacancyDetails}>
              
                  <View style={[styles.dot, {backgroundColor: '#8843E1'}]} />
                  <Text style={styles.category}>
                    {
                      categories.find(
                        (                        category: { id: any; }) => category.id === vacancy.category_id,
                      )?.title_az
                    }
                  </Text>
                  <View>

             </View>
             <View>
       
             </View>
                </View>
        
                <View >
               
                  <Text style={styles.title}>{vacancy.position}</Text>
                 <View style={{flexDirection:"row", justifyContent:"space-between"}}>
               <View>
               <Ionicons
                    name="heart-outline"
                    size={24}
                    color="red"
                    style={styles.addToFavoritesIcon}
                  />
               <Text style={styles.company}>{vacancy.company_name}</Text>
               </View>
               <View>
             
                  <Text style={styles.createdDate}>
                    {moment(vacancy.created_at).format('DD.MM.YYYY')}
                  </Text>
               </View>
                 </View>
                </View>

             
              </View>
            </View>
</View>

        </View>
      ))}
    </View>
  );
};

export default CityPicker;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 10,

  },
  card: {
    width: 320,
    height: 135,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  vacancyBox: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 16,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
  },
  vacancyDetails: {
    padding: 7,
    backgroundColor: '#ECDBFC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    margin: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.black,
  },
  category: {
    fontSize: 16,
    color: '#8843E1',
  },
  company: {
    fontSize: 14,
    color: colors.black,
    marginTop: 5,
  },
  createdDate: {
    fontSize: 12,
    color: colors.black,
    marginTop: 5,

  },
  addToFavoritesIcon: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  showAllButton: {
    backgroundColor: '#8843E1',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
  },
  showAllText: {
    color: colors.white,
    fontSize: 16,
  },
  picker:{
 width:150,
 height:50,
 borderColor:"#8843E1",
 borderRadius:20,
 borderWidth:4
  }
});