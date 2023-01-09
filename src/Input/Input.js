import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
 } from 'react-native'
import Reac, {useState} from 'react'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../Colour/Color'


const Input = ({label, iconName, error, password, onFocus=()=>{}, ...props }) => {

const [isFocused, setIsFocused] = useState(false);
const [hidePassword, setHidePassword] = useState(password);

  return (
    <View style={{marginBottom: 6}}>
      <Text style={styles.label}>{label}</Text>
    <View style={[styles.inputContainer,{borderColor: error ? COLORS.red :isFocused ? COLORS.darkBlue: COLORS.light }]}>
        <Icon name={iconName} style={styles.iconDesign}/>

        <TextInput 
            secureTextEntry={hidePassword}
            {...props}
            style={styles.text}
            onFocus={()=>{
                onFocus();
                setIsFocused(true);
            }}
            onBlur={()=>{
                setIsFocused(false);
            }}
        />
        {password && (
            <Icon 
            onPress={()=> setHidePassword(!hidePassword)}
            style={styles.eyeIconDesign} 
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}/>)}
        
      </View>
      {error && (<Text style={styles.errorText}>{error}</Text>)}
      
    </View>
  )
}

const styles = StyleSheet.create({
    label:{
        alignItems: 'flex-start',
        fontSize: 15,
        color: 'gray',
        marginVertical: 3,
        
    },
    inputContainer:{
        backgroundColor: 'white',
        width: 300,
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center'
    },
    iconDesign : {
        fontSize:20,
        color: '#02074c',
        marginRight: 10,  
     },
     eyeIconDesign : {
        fontSize:20,
        color: '#02074c',
        marginLeft: 10,
          
     },
    text: { 
        color: '#02074c',
        flex: 1, 
     },
     errorText: { 
        color: 'red',
        fontSize: 12,
        marginTop: 5,
         
     },
})
export default Input