import {StyleSheet, View, Text, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import AuthHeader from '../../components/AuthHeader';
import {LoadingButton} from '../../components/Button';
import {Input} from '../../components/Input';
import {useForm, Controller} from 'react-hook-form';
import style from '../../components/Input/style';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, StoreType} from '../../store';
import {loginThunk} from '../../store/thunks/authThunk';
import HomeScreen from '../HomeScreen';
import PassWordInput from '../../components/Input/PassWordInput';
import { colors, spacing } from '../../assets/themes';
import CaruselSliderItem from '../../components/CaruselSlider';
import CaruselSlider from '../../components/CaruselSlider';


interface LoginForm {
  email: string;
  password: string;
}

const Login = ({navigation}: any) => {
  const dispacth = useDispatch<AppDispatch>();
  const state = useSelector((state: StoreType) => state.authStore);
 

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: LoginForm) => {
    dispacth(loginThunk(data)).then(() => {
      reset();
    });
  };

  useEffect(() => {
    if (state.loading == 'fullfied') {
      navigation="register"
    }
  }, [state.loading]);
  

  return (
    <View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('mobile/src/assets/images/1İŞ.az.png')}
          style={{
            position: 'absolute',
            width: 300,
            height: 100,
            top: 100,
          }}
        />
      </View>

      <View
        style={{
          width: '100%',
          padding: 20,
          alignSelf: 'center',
          marginTop: 280,
        }}>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              error={errors.email && 'This is email'}
              autoCapitalize="none"
              onChangeText={onChange}
              autoFocus={true}
              keyboardType="email-address"
              autoComplete="email"
              placeholder="Email"
              value={value}
              labelStyle={{ fontWeight: 'bold', fontSize: 16, color: 'red' }}
              style={style.inputStyle}
              placeholderTextColor="#000"
              label="Your email"
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
    <PassWordInput/>
          )}
          name="password"
        />
        <AuthHeader title="Forgot PassWord?" navigateTo="register" 
       showUnderline={true} textColor={colors.primary}
/>
        <LoadingButton
          loading={state.loading == 'pending'}
          onPress={handleSubmit(onSubmit)}
          style={style.buttonStyle}
          label="Continue"
        />

        <View style={{flexDirection:"row", alignItems:'center', justifyContent:"center", paddingTop:spacing.medium}}>
          <Text style={{color:"#71727A"}}>Not a member?</Text>
          <AuthHeader title=" Register Now" navigateTo="register"  showUnderline={true} textColor={colors.primary}
/> 
        </View>
              
        <View style={{borderBottomWidth: 1, borderBottomColor: '#D4D6DD', padding:spacing.small}}></View>
 
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
