import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import OnBoardingScreen from '../screens/OnBoardingScreens/OnBoardingScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import PharmacySearchScreen from '../screens/PharmacySearchScreen';
import DoctorSearchScreen from '../screens/DoctorSearchScreen';
import JoinUsScreen from '../screens/JoinUsScreen';
import DoctorRegistrationScreen from '../screens/DoctorRegistrationScreen';
import PharmacyRegistrationScreen from '../screens/PharmacyRegistrationScreen';
import EmergencyScreen from '../screens/EmergencyScreen/EmergencyScreen';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="OnBoard" component={OnBoardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name="Pharmacy" component={PharmacySearchScreen} />
        <Stack.Screen name="Doctor" component={DoctorSearchScreen} />
        <Stack.Screen name="JoinUs" component={JoinUsScreen} />
        <Stack.Screen name="Emergency" component={EmergencyScreen} />

        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="PharmacyRegister" component={PharmacyRegistrationScreen} />
        <Stack.Screen name="DoctorRegister" component={DoctorRegistrationScreen} />



      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation