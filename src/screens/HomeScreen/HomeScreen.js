import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  useWindowDimensions,
} from 'react-native'
import React, { useState } from 'react'
import ImageSlider from '../../components/ImageSlider'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';




const HomeScreen = () => {

  const navigation = useNavigation();

  const onPharmacyPressed = () => {
    navigation.navigate('Pharmacy')
  }

  const onDoctorPressed = () => {
    navigation.navigate('Doctor')
  }
  const onJoinUsPressed = () => {
    navigation.navigate('JoinUs')
  }
  const onEmergencyUsPressed = () => {
    navigation.navigate('Emergency')
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.text}>ApniHealth</Text>
          <View style={styles.menu}>

            <View style={styles.menu_Doctor}>
              <Icon name="doctor" style={styles.logo} onPress={onDoctorPressed} />
              <Text style={styles.menu_text}>Search Doctor</Text>
            </View>

            <View style={styles.menu_Doctor}>
              <Icon name="hospital-box-outline" style={styles.logo} onPress={onPharmacyPressed} />
              <Text style={styles.menu_text}>Search Pharmacy</Text>
            </View>

            <View style={styles.menu_Doctor}>
              <Icon name="alarm-light" style={styles.logo} onPress={onEmergencyUsPressed} />
              <Text style={styles.menu_text}>Emergency</Text>
            </View>



          </View>
          <View style={styles.menu}>
            <View style={styles.menu_Join}>
              <Icon name="alarm-light" style={styles.logo} onPress={onJoinUsPressed} />
              <Text style={styles.menu_text}>Join Us</Text>
            </View>
            <View style={styles.menu_Join}>
              <Icon name="alarm-light" style={styles.logo} onPress={onJoinUsPressed} />
              <Text style={styles.menu_text}>Join Us</Text>
            </View>
          </View>

        </View>



      </View>
      <View style={styles.slider}>
        <ImageSlider Data={Data} />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    // padding: 10,

    alignItems: 'center',
  },
  header: {
    backgroundColor: '#02074c',
    width: '100%',
    height: 90,
    borderBottomLeftRadius: 25,
    borderBottomEndRadius: 25,

  },
  text: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 20,
    marginHorizontal: 15,
    marginTop: 12,

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
  menu_Join: {
    width: 75,
    height: 75,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    marginBottom: 5,
    marginLeft: 12,
    marginTop: 12,
  },
  menu: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 20,
    margin: 20,
    marginBottom: 25,
    justifyContent: 'space-around',

  },
  logo: {
    fontSize: 50,
    color: '#874ef5',
    marginHorizontal: 12,
    marginTop: 8,
    marginBottom: 15,
  },
  slider: {
    marginTop: 170,
  },
  menu_text: {
    color: '#000',
    marginTop: 5,
    marginLeft: 11,
    marginRight: 4,
    fontWeight: 'bold',
    width: 80,
  }
});


export default HomeScreen;
const Data = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGUEyBLv55ON26qh52shEMF8Y0Ntd4M8_kQ&usqp=CAU'


  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGUEyBLv55ON26qh52shEMF8Y0Ntd4M8_kQ&usqp=CAU'
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGUEyBLv55ON26qh52shEMF8Y0Ntd4M8_kQ&usqp=CAU'
  },
  {
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGUEyBLv55ON26qh52shEMF8Y0Ntd4M8_kQ&usqp=CAU'
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGUEyBLv55ON26qh52shEMF8Y0Ntd4M8_kQ&usqp=CAU'
  },
  {
    id: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGUEyBLv55ON26qh52shEMF8Y0Ntd4M8_kQ&usqp=CAU'
  },
]