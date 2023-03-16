import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React, { useEffect } from 'react';
import AuthHeader from '../../components/AuthHeader';
import {Input} from '../../components/Input';
import { Controller, useForm } from 'react-hook-form';
import { loginThunk } from '../../store/thunks/authThunk';
import style from '../../components/Input/style';
import PassWordInput from '../../components/Input/PassWordInput';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StoreType } from '../../store';
import AgreementCheckbox from '../../components/AgreementCheckBox';
import { colors, spacing } from '../../assets/themes';
import { LoadingButton } from '../../components/Button';
import NavigateTo from '../../components/NavigateTo';
import HomeScreen from '../HomeScreen';
interface SignInForm {
  email: string;
  password: string;
  name:string
}
const SignUp = () => {
  
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<SignInForm>({
    defaultValues: {
      email: '',
      password: '',
      name:''
    },
  });
  const onSubmit = () => {
<NavigateTo title={'HomeScreen'}/>
      reset();

  };
  const dispacth = useDispatch<AppDispatch>();
  const state = useSelector((state: StoreType) => state.authStore);


  return (
    <ScrollView style={{paddingHorizontal:20}}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('mobile/src/assets/images/1İŞ.az.png')}
          style={{
            position: 'absolute',
            width: 170,
            height: 60,
            left: 90,
            top: 40,
          }}
        />
      </View>
      <View style={{flexBasis:100, marginTop:150}}>
      <View style={{marginBottom:12}}>
        <AuthHeader title={'Sign up'} showUnderline={false} textColor={colors.black} />
        <View style={{marginTop:-12}}>
        <AuthHeader title={'Create an account to get started '} showUnderline={false} textColor={colors.secondary}/>
        </View>
      </View>
      <View>
      <Controller
          control={control}
          rules={{
            required: true,
      
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
         
              error={errors.email && 'This is name'}
              autoCapitalize="none"
              onChangeText={onChange}
              autoFocus={true}


              placeholder="Name"
              value={value}
              style={style.inputStyle}
              placeholderTextColor="#000"
                  />
          )}
          name="name"
        />
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
    <PassWordInput label="Password"/>
          )}
          name="password"
        />
                <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
    <PassWordInput label="Confirm Password"/>
          )}
          name="password"
        />
      </View>
      <View>
        <AgreementCheckbox/>
      </View>
      <View>
        <LoadingButton label={'Sign Up'}  style={style.buttonStyle}
              loading={state.loading == 'pending'}
              onPress={() => {HomeScreen}}/>
      </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});


