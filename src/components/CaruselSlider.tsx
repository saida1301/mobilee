import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Data= [
  { id: '1', image: require("mobile/src/assets/images/saida.png"), content:"lorem" },
  { id: '2', image: require("mobile/src/assets/images/saida.png"), content:"lorem morem"},
  { id: '3', image: require("mobile/src/assets/images/saida.png"), content:"lorem porem" },
  { id: '4', image: require("mobile/src/assets/images/saida.png"), content:"lorem vjniujgv" },
  { id: '5', image: require("mobile/src/assets/images/saida.png"), content:"lorem ofijnhrutg" },
];

const Card = ({ image}:any) => {
  return (
<View style={{paddingVertical:20}}>
<View style={styles.card}>
   <Image source={image} 
   style={{width:300, height:300}}/>
    </View>
</View>
  );
};

const CaruselSlider = () => {
  const cardWidth = 350; 
  const spacing = 1; 
  const containerWidth = cardWidth + spacing * 1.2; 


  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
  
      
      contentContainerStyle={styles.contentContainer}
    >
      {Data.map((item) => (
        <View style={[styles.cardContainer, { width: containerWidth }]} key={item.id}>
          <Card title={item.image} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10, 
  },
  cardContainer: {
    position: 'relative',
    marginHorizontal: 5, 
  },
  card: {
    width: 350,
    height: 160,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth:3,
    borderColor:"#8843E1",

  },
});

export default CaruselSlider;