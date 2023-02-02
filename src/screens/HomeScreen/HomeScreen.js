import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  useWindowDimensions,
<<<<<<< HEAD
 } from 'react-native'
import React, {useState}  from 'react'
import ImageSlider from '../../components/ImageSlider'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';


=======
} from 'react-native';
import React from 'react';
import {withSafeAreaInsets} from 'react-native-safe-area-context';
import ImageSlider from '../../components/ImageSlider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
>>>>>>> cc82fcdb265f2aa97371b19d19840a54563f5066


const HomeScreen = () => {

  const navigation = useNavigation();

  const onPharmacyPressed = ()=> {
    navigation.navigate('Pharmacy')
  }

  const onDoctorPressed = ()=> {
    navigation.navigate('Doctor')
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.text}>ApniHealth</Text>

        <View style={styles.menu_Emergency}>
          <View style={styles.menu_Doctor}>
            <Icon name="doctor" style={styles.logo} />
            <Text style={styles.doctor_text}>
              Doctor
              <Text style={styles.doctor_search}>Search doctor around you</Text>
            </Text>
          </View>

<<<<<<< HEAD
        <Icon name='doctor' style={styles.logo} onPress={onDoctorPressed}/>
        <Text style={styles.doctor_text}>Doctor
          <Text style={styles.doctor_search}>Search doctor around you</Text>
        </Text>
      </View>

      <View style={styles.menu_Doctor} >
      <Icon name='clipboard-plus-outline' style={styles.logo} onPress={onPharmacyPressed}/>
        <Text style={styles.pharmacy_text}>Pharmacy</Text>
        
=======
          <View style={styles.menu_Doctor}>
            <Icon name="clipboard-plus-outline" style={styles.logo} />
            <Text style={styles.pharmacy_text}>Pharmacy</Text>
          </View>

          <View style={styles.menu_Doctor}>
            <Icon name="alpha-e-box-outline" style={styles.logo} />
            <Text style={styles.emergency_text}>Emergency</Text>
          </View>
        </View>
>>>>>>> cc82fcdb265f2aa97371b19d19840a54563f5066
      </View>
      <ImageSlider Data={Data} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    // padding: 10,
    backgroundColor: '#02074c',
    width: '100%',
    height: '50%',
    borderBottomLeftRadius: 25,
    borderBottomEndRadius: 25,
  },
  text: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 20,
    marginHorizontal: 15,
    marginTop:10
  },
  doctor_text: {
    marginTop: 15,
    fontSize: 15,
    width: 55,
    marginLeft: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  pharmacy_text: {
    marginTop: 15,
    fontSize: 15,
    width: 70,
    marginLeft: 3,
    fontWeight: 'bold',
    color: 'black',
  },
  emergency_text: {
    marginTop: 15,
    fontSize: 15,
    width: 80,
    marginLeft: 2,
    fontWeight: 'bold',
    color: 'black',
  },
  doctor_search: {
    fontSize: 12,
    width: 100,
    height: 250,
    padding: 15,
    color: 'gray',
    // backgroundColor: '#abc'
  },
  menu_Doctor: {
    width: 75,
    height: 75,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    marginBottom: 5,
  },
  menu_Emergency: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 20,
    margin: 20,
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 50,
    color: '#874ef5',
    marginHorizontal: 12,
    marginTop: 8,
    marginBottom: 5,
  },
});


export default HomeScreen;
const Data=[
  {
    id:1,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGUEyBLv55ON26qh52shEMF8Y0Ntd4M8_kQ&usqp=CAU'
  },
  {
    id:2,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGUEyBLv55ON26qh52shEMF8Y0Ntd4M8_kQ&usqp=CAU'
  },
  {
    id:3,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGUEyBLv55ON26qh52shEMF8Y0Ntd4M8_kQ&usqp=CAU'
  },
  {
    id:4,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGUEyBLv55ON26qh52shEMF8Y0Ntd4M8_kQ&usqp=CAU'
  },
  {
    id:5,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGUEyBLv55ON26qh52shEMF8Y0Ntd4M8_kQ&usqp=CAU'
  },
  {
    id:6,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGUEyBLv55ON26qh52shEMF8Y0Ntd4M8_kQ&usqp=CAU'
  },
]