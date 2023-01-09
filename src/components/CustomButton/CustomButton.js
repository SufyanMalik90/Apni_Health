import { 
    View, 
    Text,
    StyleSheet,
    Pressable,
 } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable onPress={onPress} 
    style={[styles.container, styles[`container_${type}`],
    bgColor ? {backgroundColor: bgColor} : {}
    ]}>
      <Text style={[styles.text, styles[`text_${type}`],
    fgColor ? {color: fgColor} : {}
    ]}>{text}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    container: {
        width: '90%',
        padding: 10,
        marginVertical: 5,
        alignItems:  'center',
        borderRadius: 30,
  
    },
    container_PRIMARY: {
      backgroundColor: '#02074c',
    },
    container_TERTIARY: {
      borderColor:'#02074c',
      borderWidth: 2,
  },
    container_Secoundry: {
      
    },
    

    text : {
       fontWeight: 'bold',
       color: '#ffffff'
    },
    text_Secoundry: {
      color: '#a9a9a9',
    },
    text_TERTIARY: {
      color: '#02074c',
    }
})
export default CustomButton