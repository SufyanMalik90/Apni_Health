import { View, Text, ScrollView, StyleSheet, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import uuid from 'react-native-uuid'
import Loader from '../LoaderMessage/Loader';


const DoctorSearchScreen = ({navigation}) => {

  const onBackPressed = ()=>{
  
    navigation.navigate('Home')
  }
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  let searchDoctor = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://10.0.2.2:5000/DoctorSearch');
      const json = await response.json();
      setData(json);
      //console.log("type is", typeof data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    searchDoctor();
  }, []);
  return (
    <>
      <Loader visible={loading} />

      <ScrollView>
        <View style={styles.root}>
          <View style={styles.header}>
            <Icon name='keyboard-backspace' style={styles.iconDesign} onPress={onBackPressed}>
              <Text style={styles.header_Text}>   Doctors</Text>
            </Icon>
          </View>
          <View>
            {data.map((item) => (
              <View key={uuid.v4()} style={{ paddingBottom: 8, borderColor: '#dae0e2', borderWidth: 1, margin: 8, paddingHorizontal: 10, width: 340, }}>
                <Text key={uuid.v4()} style={styles.titleText}>Dr. {item.Name}</Text>
                <View key={uuid.v4()}  >
                  <Text style={styles.list}>Qualification:  {item.Qualification}</Text>
                  <Text style={styles.list}>InstituteName:  {item.InstituteName}</Text>
                  <Text style={styles.list}>Specialization:  {item.Specialization}</Text>
                  <Text style={styles.list}>Hospital/Clanic:  {item.Hospital_Clanic}</Text>
                  <Text style={styles.list}>Contact:  {item.Phone}</Text>
                  <Text style={styles.list}>Address:  {item.Address}</Text>
                  <Text style={styles.list}>City:  {item.City}</Text>

                </View>

              </View>
            ))}

          </View>
        </View>
      </ScrollView>
    </>
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
  titleText: {
    fontSize: 22,
    fontWeight: '100',
    color: '#000',
    paddingBottom: 10,
    textDecorationLine: 'underline'



  },
  list: {
    paddingBottom: 5,
  }
})
export default DoctorSearchScreen