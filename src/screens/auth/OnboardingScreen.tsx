/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {appInfos} from '../../constants/appInfos';
import {globalStyles} from '../../styles/globalStyles';
import {appColors} from '../../constants/appColors';
import {Text} from '@bsdaoquang/rncomponent';

const OnboardingScreen = ({navigation}: any) => {
  const [index, setIndex] = useState(0);

  return (
    <View style={[globalStyles.container]}>
      <Swiper
        style={{}}
        index={index}
        loop={false}
        onIndexChanged={num => setIndex(num)}
        activeDotColor={appColors.white}>
        <Image
          source={require('../../assets/images/onboarding-1.png')}
          style={{
            flex: 1,
            width: appInfos.sizes.width,
            height: appInfos.sizes.height,
            resizeMode: 'cover',
          }}
        />
        <Image
          source={require('../../assets/images/onboarding-2.png')}
          style={{
            flex: 1,
            width: appInfos.sizes.width,
            height: appInfos.sizes.height,
            resizeMode: 'cover',
          }}
        />
        <Image
          source={require('../../assets/images/onboarding-3.png')}
          style={{
            flex: 1,
            width: appInfos.sizes.width,
            height: appInfos.sizes.height,
            resizeMode: 'cover',
          }}
        />
      </Swiper>

      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 20,
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text styles={[styles.text, {color: appColors.grey2}]} text="Skip" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2
              ? setIndex(indexNum => indexNum + 1)
              : navigation.navigate('LoginScreen')
          }>
          <Text styles={[styles.text]} text="Next" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  text: {
    color: appColors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});
