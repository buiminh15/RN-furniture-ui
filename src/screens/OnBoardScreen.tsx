import React from 'react';
import {ImageBackground, Pressable, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, SIZES, images} from '../../constants';
import {Text} from '../components';
import {commonStyles} from '../styles';
import {ms, vs} from 'react-native-size-matters';
import {Icon} from 'react-native-eva-icons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation';

type Props = NativeStackScreenProps<MainStackParamList, 'Onboard'>;

const OnBoardScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={[commonStyles.flex1]}>
      <ImageBackground
        source={images.bg}
        resizeMode="cover"
        style={[commonStyles.flex1]}>
        <View
          style={[
            commonStyles.row,
            commonStyles.itemsEnd,
            commonStyles.justifyBetween,
            StyleSheet.absoluteFillObject,
            {bottom: vs(SIZES.padding)},
            commonStyles.paddingHorizontal,
            commonStyles.gapLg,
          ]}>
          <Text textBaseType="xl" style={[commonStyles.flex1]}>
            Find the best home furniture for your room.
          </Text>

          <Pressable
            onPress={() => navigation.navigate('BottomTabStack')}
            style={[
              styles.btn,
              commonStyles.itemsCenter,
              commonStyles.justifyCenter,
            ]}>
            <Icon
              name="arrow-ios-forward-outline"
              width={25}
              height={25}
              fill={'white'}
            />
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  btn: {
    width: ms(SIZES.padding * 2),
    height: ms(SIZES.padding * 2),
    backgroundColor: COLORS.primary,
    borderRadius: ms(SIZES.base),
  },
});
