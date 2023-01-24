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



const DoctorRegistrationScreen = () => {
    
  const [input, setInput] = useState({
      clinicHospital: '',
      qualification : '',
      address       : '',
      phone         : '',
      name          : '', 
      city          : '',
      institute     : '',
      specialization: '',
      yearOfPass    : '',   

    });

    const [loading,setLoading] = useState(false);
    const [error, setError] = useState({});
    const Validate = () => {
      Keyboard.dismiss(); // hide the keyboard
      let Valid = true;
      if(!input.clinicHospital){
        handleError('Please Input Clinic/Hospital', 'clinicHospital');
        Valid = false;
        } else if(input.clinicHospital.length < 3) {
        handleError('Minimum Length of Clinic/Hospital is 3', 'clinicHospital');
        }
      if(!input.qualification){
            handleError('Please Input Qualification', 'qualification');
          Valid = false;  
      }else if(input.qualification.length < 4) {
            handleError('Minimum Length of Qualification is 4', 'qualification');
        }
        if(!input.institute){
            handleError('Please Input Institute', 'institute');
          Valid = false;  
      }else if(input.institute.length < 3) {
            handleError('Minimum Length of Institute is 3', 'institute');
        }
        if(!input.specialization){
            handleError('Please Input Specialization', 'specialization');
          Valid = false;  
      }else if(input.specialization.length < 5) {
            handleError('Minimum Length of Specialization is 5', 'specialization');
        }
        if(!input.yearOfPass){
            handleError('Please Input Passing Year', 'yearOfPass');
          Valid = false;  
      }else if(input.yearOfPass.length < 4) {
            handleError('Minimum Length of Specialization is 4', 'yearOfPass');
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
    handleError('Please Input Your Name', 'name');
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

    let registerDoctor = () => {
      fetch("http://10.0.2.2:5000/DrRegister", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "Name": input.name,
          "Phone": input.phone , 
          "Qualify": input.qualification,
          "InstituteName": input.institute,
          "Specialization" : input.specialization,
          "YofP": input.yearOfPass,
          "Address": input.address,
          "City": input.city,
          "Hospital_Clanic": input.clinicHospital,
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
         // AsyncStorage.setItem
         registerDoctor();
         Alert.alert('Sucessful','Record Inserted');
          
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
      

    <Text style={styles.title}>Register As A Doctor</Text>

    <Input 
        placeholder='Enter Your Full Name' 
        iconName='account-outline' 
        label="Doctor"
        error={error.name}
        onFocus={()=>{
          handleError(null,'name');
        }}
        onChangeText={(text)=>handleOnChange(text,"name")}
        />
     <Input 
        placeholder='Enter Qualification' 
        iconName='book-education-outline' 
        label="Education"
        error={error.qualification}
        onFocus={()=>{
          handleError(null,'qualification');
        }}
        onChangeText={(text)=>handleOnChange(text,"qualification")}
        />   

    <Input 
        placeholder='Enter Your Institute Name' 
        iconName='office-building' 
        label="Institute" 
        error={error.institute}
        onFocus={()=>{
          handleError(null,'institute');
        }}
        onChangeText={(text)=>handleOnChange(text,"institute")}
        />

        <Input 
        placeholder='Enter Your Specialization' 
        iconName='doctor' 
        label="Speciality" 
        error={error.specialization}
        onFocus={()=>{
          handleError(null,'specialization');
        }}
        onChangeText={(text)=>handleOnChange(text,"specialization")}
        />

        <Input 
        keyboardType ="numeric"
        placeholder='Enter Year Of Passing' 
        iconName='book-arrow-right-outline' 
        label="Passing Year" 
        error={error.yearOfPass}
        onFocus={()=>{
          handleError(null,'yearOfPass');
        }}
        onChangeText={(text)=>handleOnChange(text,"yearOfPass")}
        />

        <Input 
        placeholder='Enter Your Clinic/Hospital Name' 
        iconName='hospital-building' 
        label="Center" 
        error={error.clinicHospital}
        onFocus={()=>{
          handleError(null,'clinicHospital');
        }}
        onChangeText={(text)=>handleOnChange(text,"clinicHospital")}
        />

        <Input 
        placeholder='Clinic/Hospital Address' 
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
export default DoctorRegistrationScreen
 
