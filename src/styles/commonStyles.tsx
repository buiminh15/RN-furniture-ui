import {StyleSheet} from 'react-native';
import {mvs, s, vs} from 'react-native-size-matters';
import {COLORS, SIZES} from '../../constants';

export const commonStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyEvenly: {
    justifyContent: 'space-evenly',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  itemsEnd: {
    alignItems: 'flex-end',
  },
  flex1: {
    flex: 1,
  },
  gap: {
    gap: s(SIZES.font),
  },
  gapLg: {
    gap: s(SIZES.font * 2),
  },
  gapSm: {
    gap: s(SIZES.base / 2),
  },
  mt: {
    marginTop: vs(SIZES.font),
  },
  mtContainer: {
    marginTop: vs(SIZES.padding),
  },
  paddingHorizontal: {
    paddingHorizontal: s(SIZES.padding),
  },
  paddingVertical: {
    paddingVertical: s(SIZES.padding),
  },
  paddingVerticalSm: {
    paddingVertical: s(SIZES.font),
  },
  textCenter: {
    textAlign: 'center',
  },
  bgRed: {
    backgroundColor: 'red',
  },
  bgWhite: {
    backgroundColor: COLORS.white,
  },
  hidden: {
    overflow: 'hidden',
  },
  textShadow: {
    textShadowOffset: {
      width: s(1),
      height: s(1),
    },
    textShadowRadius: mvs(2),
    textShadowColor: '#333',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  widthFull: {
    width: '100%',
  },
  footerMb: {
    marginBottom: vs(SIZES.padding),
  },
});
