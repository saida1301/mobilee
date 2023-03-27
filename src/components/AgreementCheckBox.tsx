import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from 'react-native-check-box';
import { color } from 'react-native-elements/dist/helpers';
import { colors } from '../assets/themes';


const AgreementCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);


  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.flex}>
     <CheckBox
  isChecked={isChecked}
  onClick={handleCheckbox}

/>
<Text style={{color:"black",marginLeft:7}}>I've read and agree with the Terms and Conditions and the Privacy Policy.</Text>
    </View>
  );
};

export default AgreementCheckbox;

const styles = StyleSheet.create({
  flex:{ flexDirection: 'row', alignItems: 'center',
  marginBottom:12,
  justifyContent:"space-around" }
});
