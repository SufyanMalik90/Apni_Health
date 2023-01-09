import React, {useState} from 'react';
import { 
    View,
    Text , 
    StyleSheet,
    ScrollView
} from 'react-native'; 
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';


const ForgotPasswordScreen = () => {
    
    const [username, setUsername] = useState('');

    const navigation = useNavigation();    
    const onSignInPresssed = () => {
      //console.warn("Sign In");

      navigation.navigate('SignIn');
    };

    const onResendPresssed = () => {
      console.warn("Resend Pressed");
    };

    const onSendPresssed = () => {
      console.warn("Send");
    };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}> 
       

    <Text style={styles.title}>Reset Your Password</Text>
        
    <CustomInput 
        placeholder="Username"
        value={username}
        setValue={setUsername} />
    
        
    <CustomButton 
    text="Send" 
    onPress={onSendPresssed} />
  
    <CustomButton
     text="Back to Sign In" 
     onPress={onSignInPresssed} 
     type="Secoundry" //button type= Secoundry for normal Buttons
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
export default ForgotPasswordScreen