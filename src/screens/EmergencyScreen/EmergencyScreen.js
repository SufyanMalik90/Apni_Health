import { View, Text,StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const EmergencyScreen = ({navigation}) => {
    const onBackPressed = ()=>{
  
        navigation.navigate('Home')
      }
  return (
    <SafeAreaView>
    <View style={styles.root}>
    <View style={styles.header}>
      <Icon name='keyboard-backspace' style={styles.iconDesign}  onPress={onBackPressed}>
        <Text style={styles.header_Text}>   Emergency 'Future Plan'</Text>
      </Icon>
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
    },
    header: {
      backgroundColor: '#02074c',
      width: '100%',
      height: 95,
      borderBottomLeftRadius: 25,
      borderBottomEndRadius: 25,
  
    },
    header_Text: {
        fontSize: 20,
        fontWeight: 'bold',
        
    
      },
      iconDesign: {
        fontSize: 20,
        color: '#fff',
        marginTop: 40,
        marginLeft: 20,
    
    
    
      },
})

export default EmergencyScreen