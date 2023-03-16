import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import companies from '../services/data/companies.json';
import LinearGradient from 'react-native-linear-gradient';
const Companies = () => {
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
              paddingHorizontal: 10,
            }}>
            <View key={index} style={[styles.card, {width: containerWidth}]}>
              <View style={styles.box}></View>
              <View style={styles.text}>
                <Text style={{left: 8}}>{company.name}</Text>
                <Text style={{justifyContent: 'flex-end'}}>234</Text>
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

    justifyContent: 'space-around',
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
    gap: 50,
    flexWrap: 'nowrap',
  },
});
