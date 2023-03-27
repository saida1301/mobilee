import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import companies from '../services/data/companies.json';
import LinearGradient from 'react-native-linear-gradient';
import vacancies from '../services/data/vacancies.json';
const Companies = () => {
  const [vacancyCount, setVacancyCount] = useState(() => {
    const count = {};
    companies.forEach((company) => {
      count[company.id] = 0;
    });
    vacancies.forEach((vacancy) => {
      count[vacancy.company_id]++;
    });
    return count;
  });
  const cardWidth = 160;
  const spacing = 8;
  const containerWidth = cardWidth + spacing * 2;
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      {companies.map((company, index) => (
        <View>
          <LinearGradient
            colors={['#B298D3', '#652AB0']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            useAngle
            angle={180}
            style={{
              flex: 1,
              borderRadius: 10,
              marginHorizontal: 10,
              paddingHorizontal: 20,
            }}>
            <View key={index} style={[styles.card, {width: containerWidth}]}>
              <View style={styles.box}></View>
              <View style={styles.text}>
                <Text style={{left: 8}}>{company.name.substring(0, 12)}</Text>
                <Text style={{justifyContent: 'flex-end'}}>{vacancyCount[company.id]}</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      ))}
    </ScrollView>
  );
};

export default Companies;

const styles = StyleSheet.create({
  contentContainer: {
    position: 'relative',
    marginHorizontal: 20,

  },
  card: {
    position: 'relative',
    width: 160,
    height: 130,
    padding: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  box: {
    width: 155,
    height: 90,
    backgroundColor: '#fff',
    top:7,
    borderRadius: 5,
  },
  text: {
    position: 'absolute',
bottom:-5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 50,
    flexWrap: 'nowrap',
  },
});