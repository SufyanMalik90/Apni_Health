
import React from 'react';

import {
  SafeAreaView,
  
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import Navigation from './src/navigation/Navigation';
import ImageSlider from './src/components/ImageSlider';
import OnBoardingScreen from './src/screens/OnBoardingScreens';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import PharmacyRegistrationScreen from './src/screens/PharmacyRegistrationScreen';
import DoctorRegistrationScreen from './src/screens/DoctorRegistrationScreen';
import PharmacySearchScreen from './src/screens/PharmacySearchScreen';
import HomeScreen from './src/screens/HomeScreen';
import JoinUsScreen from './src/screens/JoinUsScreen';
import DoctorSearchScreen from './src/screens/DoctorSearchScreen';

const App = () => {
  

  return (
    <SafeAreaView style={styles.root}>
      {/* <SignInScreen /> */}
      {/* <SignUpScreen /> */}
     {/* <ConfirmEmailScreen /> */}
     {/* <ForgotPasswordScreen /> */}
     {/* <HomeScreen /> */}
     {/* <PharmacySearchScreen /> */}
     {/* <DoctorSearchScreen /> */}
     <Navigation />
     {/* <JoinUsScreen /> */}
     {/* <PharmacyRegistrationScreen /> */}
    {/* <DoctorRegistrationScreen /> */}
     {/* <SplashScreen /> */}
     {/* <OnBoardingScreen /> */}
     {/* <ImageSlider /> */}
     {/* <ImageSliderHome /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root : {
    flex : 1,
    backgroundColor: '#F9FBFC',
  }
});

export default App;
