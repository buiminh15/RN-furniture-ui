import React from 'react';
import {
  Linking,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {BarCodeReadEvent, RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles} from '../styles';
import {COLORS} from '../../constants';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {BottomTabNavigatorParamList} from '../types';
import {ButtonIcon, Text} from '../components';

type Props = BottomTabScreenProps<BottomTabNavigatorParamList, 'QR'>;

const QRScreen = () => {
  const onSuccess = (e: BarCodeReadEvent) => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };
  return (
    <SafeAreaView style={[commonStyles.flex1, styles.container]}>
      <View
        style={[
          commonStyles.paddingHorizontal,
          commonStyles.mtContainer,
          commonStyles.bgRed,
        ]}>
        <ButtonIcon nameIcon="arrow-back-outline" />
      </View>
      <QRCodeScanner
        containerStyle={[commonStyles.bgWhite]}
        onRead={onSuccess}
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    </SafeAreaView>
  );
};

export default QRScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
