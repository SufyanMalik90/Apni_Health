import React, {useState} from 'react';
import { 
    View,
    Text , 
    Image ,
    StyleSheet,
    useWindowDimensions,
    ScrollView
} from 'react-native'; 
import Logo from '../../../assets/images/logo.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import Input from '../../Input/';


const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');

    const {height} = useWindowDimensions();
    //(0.3 = 30% of total height of device)

    const navigation = useNavigation();
    const onSignInPresssed = () => {
      //console.warn("Sign In");
      
      // Validate user
      navigation.navigate('Home');
    };

    const onForgotPasswordPresssed = () => {
      //console.warn("Forgot Password..");

      navigation.navigate('ForgotPassword');
    };

    const onSignUpPresssed = () => {
     // console.warn("Sign Up");
      navigation.navigate('SignUp');
    };
  return (
    <ScrollView showsVerticalScrolmlIndicator={false}>
    <View style={styles.root}> 
      
      <Image source={Logo}  style={[styles.logo,  {height: height * 0.3}]} resizeMode = "contain" /> 
        
        <Input 
        placeholder='Enter Your Username' 
        iconName='email-outline' 
        label="Username" />

        <Input 
        placeholder='Enter Your Password' 
        iconName='lock-outline' 
        label="Password" 
        password
        />
        
        <CustomButton text="Sign In" onPress={onSignInPresssed} />

        <CustomButton text="Forgot Password?" 
        onPress={onForgotPasswordPresssed} 
        type="Secoundry" //button type=secoundry for Normal Buttons
        />
        
        <SocialSignInButtons />

        <CustomButton text="Don't Have an account? Create Now" 
        onPress={onSignUpPresssed} 
        type="Secoundry" //button type=secoundry for Normal Buttons
        />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        
    },
    logo : {
        width: '70%',
        maxWidth: 300,
        maxHeight: 150,
    }
})
export default SignInScreen