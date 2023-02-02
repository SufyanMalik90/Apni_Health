import React, {useState} from 'react';
import { 
    View,
    Text , 
    Image ,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
    Keyboard,
    Alert
} from 'react-native'; 
import Logo from '../../../assets/images/logo.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import Input from '../../Input/';
import Loader from '../LoaderMessage/Loader';


const SignInScreen = () => {
    
  const [input, setInput] = useState({
    email: '',
    password : '',

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
    
    if(!input.password){
      handleError('Please Input Password', 'password'); 
    } else if(input.password.length < 6){     // minimum length for password is 6
      handleError('Minimum Length of Password is 6', 'password'); 
    } 
   
    if(Valid){
      register();
    }

  };

  let loginUser = () => {
    fetch("http://10.0.2.2:5000/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
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
      
      
      try {
       
        loginUser();
       Alert.alert('Welcome','To ApniHealth');
       navigation.navigate('Home');
      // console.log(`Username is: ${input.username} Email: ${input.email} Password: ${input.password} Phone: ${input.phone}`);
        
      } catch (error) {
        Alert.alert('Error', 'Something Went Wrong..!!');
        
      }

    }, 2000)
  }
  const navigation = useNavigation();

  const onSignInPresssed = () => {
    //console.warn("Sign In");
    Validate();
  };

  
  const handleOnChange = (text,input) => {
    setInput((prevState)=>({...prevState,  [input]: text}));  // get text from user & set to input fields  
  };
  const handleError = (errorMessage, input) => {
    setError((prevState)=>({...prevState,  [input]: errorMessage}));  // clear error message & back to previous state  
  };
  
    const {height} = useWindowDimensions();
    //(0.3 = 30% of total height of device)

    // const navigation = useNavigation();
    // const onSignInPresssed = () => {
    //   //console.warn("Sign In");
      
    //   // Validate user
    //   navigation.navigate('Home');
    // };

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
      <Loader visible={loading} />
    <View style={styles.root}> 
      
      <Image source={Logo}  style={[styles.logo,  {height: height * 0.3}]} resizeMode = "contain" /> 
        
      <Input 
        placeholder='Enter Your Email' 
        iconName='email-outline' 
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
        password 
        error={error.password}
        onFocus={()=>{
          handleError(null,'password');
        }}
        
        onChangeText={(text)=>handleOnChange(text,"password")}
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