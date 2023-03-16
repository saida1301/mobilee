import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../assets/themes';
import data from '../services/data/categories.json';


const CategoryItem = () => {
  const [numToShow, setNumToShow] = useState(4);
  const [numToShowLess, setNumToShowLess] = useState(false);

  const handleLoadMore = () => {
    setNumToShow(numToShow + 4);
    setNumToShowLess(true);
  };

  const handleLoadLess = () => {
    setNumToShow(4);
    setNumToShowLess(false);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {data.slice(0, numToShow).map((category, index) => (
          <View key={category.id} style={[styles.card, { marginLeft: index % 2 === 0 ? 0 : 5 }]}>
            <View style={styles.textbox}>
              <Text style={styles.text}>{category.title_az}</Text>
            </View>
    
            <View
              style={[
                styles.hover,
                { borderBottomColor: 'rgba(136, 67, 225, 0.8)', position: 'absolute', borderBottomWidth: 3, width: 45 },
              ]}
            >
              <Text style={{color:"black", left: 10,
top: 18}}>234</Text>
            </View>
          </View>
        ))}
      </View>
     {numToShow < data.length ? (
        <TouchableOpacity style={styles.button} onPress={handleLoadMore}>
          <Text style={styles.buttonText}>Daha More</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLoadLess}>
          <Text style={styles.buttonText}>Show Less</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  card: {
    position: 'relative',
    width: '48%',
    height: 100,
    backgroundColor: colors.white,
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
    color: colors.black,
marginTop: 20,
  },
  textbox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  hover: {
    position: 'absolute',
    borderRightColor: 'rgba(136, 67, 225, 0.8)',
    borderEndWidth: 3,
    left: '76%',
    height: 45,
    bottom: 0,
  },
  blur: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
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
