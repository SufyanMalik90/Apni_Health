import React, {useState} from 'react';
import { 
    View,
    Text ,
    StyleSheet,
    useWindowDimensions,
    ScrollView
} from 'react-native'; 
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';



const ConfirmEmailScreen = () => {
    
    const [code, setCode] = useState('');

    const {height} = useWindowDimensions();
    //(0.3 = 30% of total height of device)
    const onSignInPresssed = () => {
      console.warn("Sign In");
    };

    const onResendPresssed = () => {
      console.warn("Resend Pressed");
    };

    const onConfirmPresssed = () => {
      console.warn("Confirm");
    };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}> 
       

    <Text style={styles.title}>Confirm Your Email</Text>
        
    <CustomInput 
        placeholder="Enter Your Confirmation Code"
        value={code}
        setValue={setCode} />
    
        
    <CustomButton 
    text="Confirm" 
    onPress={onConfirmPresssed} />
  

    <CustomButton
     text="Resend Code" 
     onPress={onResendPresssed} 
     type="TERTIARY" //button type=TERTIARY for other Buttons
        /> 
        
    <CustomButton
     text="Back to Sign In" 
     onPress={onSignInPresssed} 
     type="Secoundry" //button type= secoundry for Normal Buttons
        />
   
    </View>
    </ScrollView>
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
export default ConfirmEmailScreen