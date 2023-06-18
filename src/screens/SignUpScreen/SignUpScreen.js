import React, {useState} from 'react';
import { 
    View,
    Text , 
    StyleSheet,
    ScrollView,
    Keyboard,
    SafeAreaView,
    Alert,
    
} from 'react-native'; 


import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import Input from '../../Input';
import Loader from '../LoaderMessage/Loader';

import { AsyncStorageStatic } from 'react-native';



const SignUpScreen = () => {
    
  const [input, setInput] = useState({
      email: '',
      username : '',
      password : '',
      phone    : '',

    });

    const [loading,setLoading] = useState(false);
    const [error, setError] = useState({});

    const Validate = () => {
      Keyboard.dismiss(); // hide the keyboard
      let Valid = true;
      if(!input.email){
        handleError('Please Input Email', 'email');
        Valid = false;
        } else if(!input.email.match(/\S+@\S+\.\S+/)) {
        handleError('Please Input Valid Email', 'email');
        }
      if(!input.username){
          handleError('Please Input Username', 'username');
          Valid = false;  
      };
      if(!input.password){
        handleError('Please Input Password', 'password'); 
      } else if(input.password.length < 6){     // minimum length for password is 6
        handleError('Minimum Length of Password is 5', 'password'); 
      } 
      if(!input.phone){
        handleError('Please Input Phone', 'phone'); 
  } else if(input.phone.length < 10){     // minimum length for address is 6
    handleError('Minimum Length of Phone is 10', 'phone'); 
  } 
      if(Valid){
        register();
      }

    };

    let createUser = () => {
      fetch("http://10.0.2.2:5000/signup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          "username": input.username,
          "phone": input.phone, 
          "email": input.email,
          "pass": input.password
        })
      })
      .then(res => res.json())
      .then((result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      )
    };
    const register = () =>{
      setLoading(true);
      setTimeout(() =>{
        setLoading(false);
        // createUser();
        
        try {
         
         createUser();
         Alert.alert('Sucessful','Record Inserted');
         navigation.navigate('SignIn');
        // console.log(`Username is: ${input.username} Email: ${input.email} Password: ${input.password} Phone: ${input.phone}`);
          
        } catch (error) {
          Alert.alert('Error', 'Something Went Wrong..!!');
          
        }

      }, 2000)
    }
    const navigation = useNavigation();

    const onSignInPresssed = () => {
      //console.warn("Sign In");

      navigation.navigate('SignIn');
    };

    
    const handleOnChange = (text,input) => {
      setInput((prevState)=>({...prevState,  [input]: text}));  // get text from user & set to input fields  
    };
    const handleError = (errorMessage, input) => {
      setError((prevState)=>({...prevState,  [input]: errorMessage}));  // clear error message & back to previous state  
    };
    
    const onSignUpPresssed = () => {
      //console.warn("Sign Up");
      Validate();
    };

    
  return (
    <SafeAreaView>
      <Loader visible={loading} />
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}> 
      

    <Text style={styles.title}>Create an Account</Text>

    <Input 
        placeholder='Enter Your Username' 
        iconName='account-outline' 
        label="Username"
        error={error.username}
        onFocus={()=>{
          handleError(null,'username');
        }}
        onChangeText={(text)=>handleOnChange(text,"username")}
        />
        

    <Input 
        placeholder='Enter Your Email' 
        iconName='email' 
        label="Email" 
        error={error.email}
        onFocus={()=>{
          handleError(null,'email');
        }}
        onChangeText={(text)=>handleOnChange(text,"email")}
        />
    
    <Input 
        placeholder='Enter Your Password' 
        iconName='lock-outline' 
        label="Password" 
        error={error.password}
        onFocus={()=>{
          handleError(null,'password');
        }}
        password 
        onChangeText={(text)=>handleOnChange(text,"password")}
        />   
        
        <Input 
        keyboardType ="numeric" 
        placeholder='Enter Your Phone Number' 
        iconName='phone' 
        label="Contact" 
        error={error.phone}
        onFocus={()=>{
          handleError(null,'phone');
        }}
        onChangeText={(text)=>handleOnChange(text,"phone")}
        />  
 
    <CustomButton text="Sign Up" onPress={onSignUpPresssed} />

    <Text style={styles.text}>By Sign Up, you confim that you accept our 
      <Text style={styles.link}> Terms of Use </Text> and <Text style={styles.link}>Privacy Policy</Text>
    </Text>   
        
    {/* <SocialSignInButtons /> */}

        <CustomButton text="Have an account? Sign In" 
        onPress={onSignInPresssed} 
        type="Secoundry" //button type=secoundry for Normal Buttons
        />
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 10,

    },
    logo : {
        width: '70%',
        maxWidth: 300,
        maxHeight: 150,
    },
    title: {
      fontSize : 24,
      fontWeight : 'bold',
      color : '#051c69',
      margin : 5,
    },
    text: {
      color: '#939b9b',
      marginVertical: 10,
    },
    link: {
      color: '#fdb075',
    }
})
export default SignUpScreen