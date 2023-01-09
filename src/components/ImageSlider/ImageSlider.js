import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'


const ImageSlider = () => {
  return (
    <View style={styles.root}>
       <Swiper
            loop
            autoplay
            height={200}
            width={600}
            
            dot={
                <View style={{
                    width: 15, 
                    height: 5,
                    backgroundColor: '#02074c',
                    borderRadius: 4,
                    marginHorizontal: 5,
                   }}
                />
            }
            activeDot={
                    <View style={{ 
                        width: 15, 
                        height: 5,
                        backgroundColor: 'red',
                        borderRadius: 5,
                        marginHorizontal: 5,
                    }}
                    />
            }>
        <Image 
            source={require('../../../assets/images/slider.jpg')}
            resizeMode="center"
            style={styles.image}
        />
        <Image 
            source={require('../../../assets/images/slider2.jpg')}
            resizeMode="center"
            style={styles.image}
        />
        <Image 
            source={require('../../../assets/images/slider3.jpg')}
            resizeMode="center"
            style={styles.image}
        />
        </Swiper>
      <Text>ImageSlider</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        
        
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 30,
        
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: 400,
        height: 100,
        
    }
})

export default ImageSlider