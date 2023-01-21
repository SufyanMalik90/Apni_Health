import { View, Text , Image, StyleSheet} from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'

const OnBoardingScreen = ({navigation}) => {
  return (
    <Onboarding
    onSkip={()=> navigation.navigate("SignIn")}
    onDone={()=> navigation.navigate("SignIn")}
    bottomBarHighlight={false}
    titleStyles={styles.title}
    pages={[
      {
        backgroundColor: '#edecff',
        image: <Image source={require('../../../assets/images/doc1.png')} />,
        title: 'Find Your Doctor',
        subtitle: '',
      },
      {
        backgroundColor: '#e3ecff',
        image: <Image source={require('../../../assets/images/phar.png')} />,
        title: 'Search For Pharmacy',
        subtitle: '',
      },
      {
        backgroundColor: '#dbe7ff',
        image: <Image source={require('../..//../assets/images/ser.png')} />,
        title: 'Other Medical Services',
        subtitle: '',
      },
    ]}
  />
  )
}

const styles = StyleSheet.create({
    title:{
        color: '#02074c',
        fontWeight: 'bold',
        fontSize: 24,
        fontStyle: 'italic',
        fontFamily: 'Algerian',
        
    }
})
export default OnBoardingScreen