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


import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Input from '../../Input';
import Loader from '../LoaderMessage/Loader';
import { AsyncStorageStatic } from 'react-native';



const PharmacyRegistrationScreen = () => {
    
  const [input, setInput] = useState({
      pharmacy: '',
      license : '',
      address : '',
      phone   : '',
      name    : '', 
      city    : '',

    });

    const [loading,setLoading] = useState(false);
    const [error, setError] = useState({});
    const Validate = () => {
      Keyboard.dismiss(); // hide the keyboard
      let Valid = true;
      if(!input.pharmacy){
        handleError('Please Input pharmacy', 'pharmacy');
        Valid = false;
        } else if(input.pharmacy.length < 3) {
        handleError('Minimum Length of Pharmacy is 3', 'pharmacy');
        }
      if(!input.license){
            handleError('Please Input license', 'license');
          Valid = false;  
      }else if(input.license.length < 12) {
            handleError('Minimum Length of License is 12', 'license');
        }
      if(!input.address){
            handleError('Please Input address', 'address'); 
      } else if(input.address.length < 7){     // minimum length for address is 6
        handleError('Minimum Length of Address is 7', 'address'); 
      } 
      if(!input.phone){
        handleError('Please Input Phone', 'phone'); 
  } else if(input.phone.length < 10){     // minimum length for address is 6
    handleError('Minimum Length of Phone is 10', 'phone'); 
  } 
  if(!input.name){
    handleError('Please Input Owner', 'name');
    Valid = false;
    } else if(input.name.length < 3) {
    handleError('Minimum Length of Name is 3', 'name');
    }
    if(!input.city){
        handleError('Please Input City', 'city');
        Valid = false;
        } else if(input.city.length < 3) {
        handleError('Minimum Length of City is 3', 'city');
        }
      if(Valid){
        register();
      }

    };

    const register = () =>{
        setLoading(true);
        setTimeout(() =>{
        setLoading(false);

        try {
         // AsyncStorage.setItem
          
        } catch (error) {
          Alert.alert('Error', 'Something Went Wrong..!!');
          
        }

      }, 2000)
    }
    // const navigation = useNavigation();

    const onSignInPresssed = () => {
      //console.warn("Sign In");

    //   navigation.navigate('SignIn');
    };

    
    const handleOnChange = (text,input) => {
      setInput((prevState)=>({...prevState,  [input]: text}));  // get text from user & set to input fields  
    };
    const handleError = (errorMessage, input) => {
      setError((prevState)=>({...prevState,  [input]: errorMessage}));  // clear error message & back to previous state  
    };
    
    const onRegisterPresssed = () => {
      Validate();
    };

    
  return (
    <SafeAreaView>
      <Loader visible={loading} />
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}> 
      

    <Text style={styles.title}>Register Your Pharmacy</Text>

    <Input 
        placeholder='Enter Your Pharmacy Name' 
        iconName='plus-network' 
        label="Pharmacy"
        error={error.pharmacy}
        onFocus={()=>{
          handleError(null,'pharmacy');
        }}
        onChangeText={(text)=>handleOnChange(text,"pharmacy")}
        />
     <Input 
        placeholder='Enter License Number' 
        iconName='page-previous-outline' 
        label="License"
        error={error.license}
        onFocus={()=>{
          handleError(null,'license');
        }}
        onChangeText={(text)=>handleOnChange(text,"license")}
        />   

    <Input 
        placeholder='Enter Your Pharmacy Address' 
        iconName='home-outline' 
        label="Address" 
        error={error.address}
        onFocus={()=>{
          handleError(null,'address');
        }}
        onChangeText={(text)=>handleOnChange(text,"address")}
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

        <Input 
        placeholder='Enter Owner Name' 
        iconName='human-male' 
        label="Owner" 
        error={error.name}
        onFocus={()=>{
          handleError(null,'name');
        }}
        onChangeText={(text)=>handleOnChange(text,"name")}
        />

        <Input 
        placeholder='Enter City Name' 
        iconName='home-city-outline' 
        label="City" 
        error={error.city}
        onFocus={()=>{
          handleError(null,'city');
        }}
        onChangeText={(text)=>handleOnChange(text,"city")}
        />  
 
    <CustomButton text="Register" onPress={onRegisterPresssed} />

    <Text style={styles.text}>By Sign Up, you confim that you accept our 
      <Text style={styles.link}> Terms of Use </Text> and <Text style={styles.link}>Privacy Policy</Text>
    </Text>   
       
        <CustomButton text="Back to Home" 
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
        backgroundColor: '#eceeff'

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
export default PharmacyRegistrationScreen
