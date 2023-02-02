import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'

const DoctorSearchScreen = () => {
  return (
    <ScrollView>
    <View style={styles.root}>
        <View style={styles.header}>
            <Icon name='keyboard-backspace' style={styles.iconDesign}>
            <Text style={styles.header_Text}>  Doctor</Text>
        </Icon>
        </View>
      <View>
        <Text>Hellow</Text>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
    },
    header:{
        backgroundColor: '#02074c',
        width: '100%',
        height: 95,
        borderBottomLeftRadius: 25,
        borderBottomEndRadius: 25,

    },
    header_Text:{
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    iconDesign:{
        fontSize:20,
        color: '#fff',
        marginTop: 40,
        marginLeft: 20,
        
       
       
    }
})
export default DoctorSearchScreen