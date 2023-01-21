
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

const App = () => {
  

  return (
    <SafeAreaView style={styles.root}>
      {/* <SignInScreen /> */}
      {/* <SignUpScreen /> */}
     {/* <ConfirmEmailScreen /> */}
     {/* <ForgotPasswordScreen /> */}
     <Navigation />
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
