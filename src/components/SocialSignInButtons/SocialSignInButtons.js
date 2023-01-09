import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';



const SocialSignInButtons = () => {

  const onSignInWithFacebookPresssed = () => {
    console.warn("Sign In With Facebook");
  };

  const onSignInWithGooglePresssed = () => {
    console.warn("Sign In With Google");
  };

  return (
    <>
      <CustomButton text="Sign In With Facebook" 
        onPress={onSignInWithFacebookPresssed}
        bgColor = "#0716ef"
        fgColor = "#ffffff"
        />

        <CustomButton text="Sign In With Google" 
        onPress={onSignInWithGooglePresssed} 
        bgColor = "#e3a71a"
        fgColor = "#ffffff"
        />
    </>
  )
}

export default SocialSignInButtons