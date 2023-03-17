import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../assets/themes/index';
import vacancies from '../services/data/vacancies.json';
import categories from '../services/data/categories.json';
import Ionicons from 'react-native-vector-icons/Ionicons';
import companies from '../services/data/companies.json';
import moment from 'moment';


const Vacancies = ({navigation}: any) => {
  const vacanciesWithCompanyNames = vacancies.map((vacancy: { company_id: string; position: any; }) => {
    const company = companies.find((c) => c.id === vacancy.company_id);
    return {
      ...vacancy,
      company_name: company ? company.name : 'Unknown Company',
      position: `${vacancy.position}`
    };
  });

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {vacanciesWithCompanyNames.slice(0,4).map((vacancy: { category_id: string; position: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; company_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; created_at: moment.MomentInput; }, index: React.Key | null | undefined) => (
          <View style={styles.card} key={index}>
            <View style={styles.vacancyBox}>
              <View style={styles.vacancyDetails}>
             
                  <View style={[styles.dot, { backgroundColor: '#8843E1'}]} />
                  <Text style={styles.category}>
                  {categories.find((category) => category.id === vacancy.category_id)?.title_az}
                </Text>
              
              </View>
              <TouchableOpacity>
                <Ionicons name="heart-outline" size={24} color="#C7C7C7" style={styles.addToFavoritesIcon} />
              </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.title}>{vacancy.position}</Text>
            </View>

            <View style={styles.time}>
                <View style={styles.bottom}>
                {/* <Ionicons name="heart-outline" size={24} color="#C7C7C7" style={styles.addToFavoritesIcon} /> */}
                  <Text style={styles.company}>{vacancy.company_name}</Text> 
                </View>
                <View>
                {/* <Ionicons name="heart-outline" size={24} color="#C7C7C7" style={styles.addToFavoritesIcon} /> */}
                  <Text style={styles.createdDate}>{moment(vacancy.created_at).format('DD.MM.YYYY')}</Text>
                </View>
            </View>
          </View>
        ))}
         <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("CompaniesScreen")}}>
          <Text style={styles.buttonText}>Butun vakansiyalara baxin</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Vacancies;
const styles = StyleSheet.create({
  container:{
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  card: {
    width: '100%',
    height: 135,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 16,
    flexDirection: 'column',
    paddingHorizontal: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  vacancyBox: {
    flex: 1,
    // flexDirection: 'column',

    width: '100%',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',

  },
  vacancyDetails: {
    flex: 1,
 backgroundColor:"#ECDBFC",
 flexDirection:"row",
 alignItems:"center"
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    margin: 3,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    width: '100%',
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
  time:{
    flex: 1,
    width: '100%',
    justifyContent:"space-between",
    flexDirection:"row"
  },
  bottom: {
    flex: 1,
    gap: 5
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colors.white,
  },
});
