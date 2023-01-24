import {
  StyleSheet,
  Text,
  View,
  Animated,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import React, {memo, useEffect, useRef, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
} from '../../comon/ResponsiveFunctions';
import {useNavigation} from '@react-navigation/native';
function ImageSlider({Data, type}) {
    const {width}=Dimensions.get('window')
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isloading, setisloading] = useState(0);
  const slideRef = useRef(null);
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const onViewRef = React.useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0]?.index);
  });

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
  // const currentIndex=useRef(0)
  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  useEffect(() => {
    let isCancelled = false;
    let timeOut = '';
    const handleSwiper = async () => {
      timeOut = await timeout(10000);
      if (!isCancelled) {
        if (currentIndex < Data.length - 1) {
          slideRef?.current?.scrollToIndex(
            {
              index: currentIndex + 1,
              animated: true,
            },
            {useOnChangeIndex: true},
          );
        } else {
          slideRef?.current?.scrollToIndex(
            {index: 0, animated: true},
            {useOnChangeIndex: true},
          );
        }
      }
    };

    handleSwiper();
    return () => {
      isCancelled = true;
      clearTimeout(timeOut);
    };
  }, [currentIndex]);

  const rendorCategory = ({item, index}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            height: hp('25%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            borderRadius: wp('5%'),
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Image
            source={{uri: item.image}}
            style={{height: '100%', width: '100%'}}
          />
        </TouchableOpacity>
      </View>
    );
  };

 
  return (
    <View style={{marginTop: hp('1%')}}>
      <FlatList
        data={Data}
        horizontal
        ref={slideRef}
        initialNumToRender={4}
        disableVirtualization={false}
        renderItem={rendorCategory}
        keyExtractor={(_, index) => index.toString()}
        listKey={(item, index) => 'mainCategory' + index.toString()}
        contentContainerStyle={{
          height: hp('35%'),
          paddingVertical: hp('2%'),
        }}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={16}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={currentIndex}
        updateCellsBatchingPeriod={5}
        maxToRenderPerBatch={5}
        windowSize={5}
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            slideRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default memo(ImageSlider);
