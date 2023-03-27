import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../assets/themes/index';
import vacancies from '../services/data/vacancies.json';
import categories from '../services/data/categories.json';
import Ionicons from 'react-native-vector-icons/Ionicons';
import companies from '../services/data/companies.json';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

const Vacancies = ({selectedCity}:any) => {
  const navigation = useNavigation();
  const [showAllVacancies, setShowAllVacancies] = useState(false);
  const visibleVacancies = showAllVacancies ? vacancies : vacancies.slice(0, 4);

  const vacanciesWithCompanyNames = visibleVacancies.map(
    (vacancy: {company_id: string; position: any}) => {
      const company = companies.find(c => c.id === vacancy.company_id);
      return {
        ...vacancy,
        company_name: company ? company.name : 'Unknown Company',
        position: `${vacancy.position}`,
      };
    },
  );

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {vacanciesWithCompanyNames.map(
          (
            vacancy: {
              category_id: string;
              position:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              company_name:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              created_at: moment.MomentInput;
            },
            index: React.Key | null | undefined,
          ) => (
            <View style={styles.card} key={index}>
              <View style={styles.vacancyBox}>
                <View style={styles.vacancyDetails}>
              
                  <View style={[styles.dot, {backgroundColor: '#8843E1'}]} />
                  <Text style={styles.category}>
                    {
                      categories.find(
                        category => category.id === vacancy.category_id,
                      )?.title_az
                    }
                  </Text>
                  <View>
              <TouchableOpacity>
              <Ionicons
                    name="heart-outline"
                    size={24}
                    color="red"
                    style={styles.addToFavoritesIcon}
                  />
              </TouchableOpacity>
             </View>
             <View style={{justifyContent:"space-between"}}>
             <TouchableOpacity>
                  <Ionicons
                    name="heart-outline"
                    size={24}
                    color="red"
                    style={styles.addToFavoritesIcon}
                  />
                </TouchableOpacity>
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
               <View style={{justifyContent:"flex-end", alignContent:"flex-end", alignItems:"flex-end", alignSelf:"flex-end"}}>
                  <Ionicons
                    name="heart-outline"
                    size={24}
                    color="red"
                    style={styles.addToFavoritesIcon}
                  />
                  <Text style={styles.createdDate}>
                    {moment(vacancy.created_at).format('DD.MM.YYYY')}
                  </Text>
               </View>
                 </View>
                </View>

             
              </View>
            </View>
          ),
        )}
        {!showAllVacancies && (
          <TouchableOpacity
            style={styles.showAllButton}
         onPress={() => navigation.navigate('AllVacancies')}>
            <Text style={styles.showAllText}>Show All Vacancies</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default Vacancies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,

  },
  card: {
    width: 350,
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
});
