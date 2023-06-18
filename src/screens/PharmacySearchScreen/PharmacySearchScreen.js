import { View, Text, ScrollView, StyleSheet, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Loader from '../LoaderMessage/Loader';
import uuid from 'react-native-uuid'



const PharmacySearchScreen = ({navigation}) => {

  const onBackPressed = ()=>{
  
    navigation.navigate('Home')
  }

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  let searchPharmacy = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://10.0.2.2:5000/PharmacySearch');
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
    searchPharmacy();
  }, []);

  return (

    <>
      <Loader visible={loading} />
      <ScrollView>
        <Loader visible={loading} />
        <View style={styles.root}>
          <View style={styles.header}>
            <Icon name='keyboard-backspace' style={styles.iconDesign}  onPress={onBackPressed}>
              <Text style={styles.header_Text}>   Pharmacy</Text>
            </Icon>
          </View>
          <View>
            {data.map((item) => (
              <View key={uuid.v4()} style={{ paddingBottom: 8, borderColor: '#dae0e2', borderWidth: 1, margin: 8, paddingHorizontal: 10, width: 340 }}>
                <Text key={uuid.v4()} style={styles.titleText}>{item.PharmacyName}</Text>
                <View key={uuid.v4()}  >
                  <Text style={styles.list}>Address:{item.Address}</Text>
                  <Text style={styles.list}>Contact:{item.Phone}</Text>
                  <Text style={styles.list}>City:{item.City}</Text>
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
    fontSize: 22,
    fontWeight: 'bold',

  },
  iconDesign: {
    fontSize: 20,
    color: '#fff',
    marginTop: 40,
    marginLeft: 20,



  },
  titleText: {
    fontSize: 20,
    fontWeight: "100",
    color: '#000',
    paddingBottom: 4,
  },
  list: {
    paddingBottom: 4,
  }
})
export default PharmacySearchScreen