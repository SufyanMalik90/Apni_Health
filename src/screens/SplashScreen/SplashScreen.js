import { View, Text , Image, StyleSheet, StatusBar} from 'react-native'
import React from 'react'
import Logo from '../../../assets/images/logo.png';


const SplashScreen = ({navigation}) => {

  

  setTimeout(()=>{
   navigation.replace("OnBoard")
  },3000)
  return (
    <View style={styles.root}>
        <StatusBar barStyle="light-content" hidden={true} backgroundColor="#fff"/>
      <Image source={Logo}  style={styles.logo} resizeMode = "contain" />
      
    </View>

  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
       
        
    },
    logo : {
        width: '80%',
        maxWidth: 300,
        maxHeight: 150,
    }
})
export default SplashScreen