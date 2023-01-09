import { 
    View,
     Text,
     TextInput,
     StyleSheet,
     } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CustomInput = ({value, setValue, iconName, error,  placeholder, secureTextEntry, autoCorrect,
   onFocus=()=>{}, ...props
  }) => {
    const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      
      <TextInput
      
      value={value}
      onChangeText={setValue}
      placeholder = {placeholder} 
      secureTextEntry = {secureTextEntry}
      autoCorrect = {autoCorrect}
      onFocus={()=>{
        onFocus();
        setIsFocused(true);
      }}
      onBlur={()=>{
        setIsFocused(false);
      }}
      // name = {iconName}
      style={styles.input}/>
      {/* <Icon name={iconName} style={styles.iconDesign}/> */}
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '90%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 5, 
  
    },
    input : {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    iconDesign : {
     fontSize:25,
     color: 'red',
     width:30
  },
})
export default CustomInput