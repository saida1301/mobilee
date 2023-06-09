import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CarouselSlider from '../components/CaruselSlider';
import SearchInput from '../components/Input/SearchInput';
import AuthHeader from '../components/AuthHeader';
import CategoryItem from '../components/CategoryItem';
import {colors} from '../assets/themes';
import Companies from '../components/Companies';
import Vacancies from '../components/Vacancies';
import CompanySearchScreen from './CompanySearchScreen';
import CityPicker from '../components/CityPicker';
import CreatedDatePicker from '../components/CreatedDatePicker';
import CategoryPicker from '../components/CategoryPicker';







const HomeScreen = () => {
  
  return (
    <ScrollView>
{/* <CompanySearchScreen/>
      <CarouselSlider />
      <AuthHeader title={'Popular categoriyalar'} textColor={colors.black} />

      <CategoryItem />
      <AuthHeader title={'Sirketler'} textColor={colors.black} />
      <Companies />
      <AuthHeader title={'Yeni Vakansiyalar'} textColor={colors.black} />
      <Vacancies /> */}
{/* <CityPicker/> */}
<CategoryPicker/>
    </ScrollView>
  );
};

export default HomeScreen;
