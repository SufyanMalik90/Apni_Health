import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';


const JoinUsScreen = ({navigation}) => {

  const onBackPressed = ()=>{
  
    navigation.navigate('Home')
  }

  const onRegisterDoctorPressed = ()=>{
  
    navigation.navigate('DoctorRegister')
  }
  const onRegisterPharmacyPressed = ()=>{
    
    navigation.navigate('PharmacyRegister')
  }
  return (
    <ScrollView>
    <View style={styles.root}>
        <View style={styles.header}>
            <Icon name='keyboard-backspace' style={styles.iconDesign} onPress={onBackPressed} >
            <Text style={styles.header_Text}>   Join Us to Help the Needy..</Text>
        </Icon>
        </View>
        
      
    </View>
    <View style={styles.menu}>
      <View style={styles.menu_Doctor}>
              <Icon name="doctor" style={styles.logo}  onPress={onRegisterDoctorPressed}/>
              <Text style={styles.text}>Register As Doctor</Text>
            </View>
            <View style={styles.menu_Doctor}>
              <Icon name="doctor" style={styles.logo}  onPress={onRegisterPharmacyPressed} />
              <Text style={styles.text}>Register As Pharmacy</Text>
            </View>
        {/* <Text>Hellow</Text> */}
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        // backgroundColor: '#000',
        flex: 1,
    },
    header:{
        backgroundColor: '#02074c',
        width: '100%',
        height: 95,
        borderBottomLeftRadius: 25,
        borderBottomEndRadius: 25,

    },
    header_Text:{
        fontSize: 22,
        fontWeight: 'bold',
        
    },
    iconDesign:{
        fontSize:20,
        color: '#fff',
        marginTop: 40,
        marginLeft: 20,
      
    },
    menu_Doctor: {
        width: 75,
        height: 75,
        backgroundColor: '#dae0e2',
        borderRadius: 50,
        marginBottom: 40,
        marginTop: 10,
        marginLeft: 20
      },
      logo: {
        fontSize: 50,
        color: '#874ef5',
        marginHorizontal: 12,
        marginTop: 8,
        marginBottom: 15,
      },
      menu: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 20,
        margin: 20,
        justifyContent: 'space-around',
    
      },
      text:{
        fontWeight: 'bold'
      }
})
export default JoinUsScreen
