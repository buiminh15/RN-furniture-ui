import {View, Text} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-eva-icons';
import {BottomIconType} from '../../constants/config';
import {ms} from 'react-native-size-matters';
import {SIZES} from '../../constants';

type Props = BottomIconType & {
  iconName: string;
  name: string;
};

const BottomIcon = ({focused, color, size, name, iconName}: Props) => {
  return (
    <View>
      {focused && (
        <View>
          <Icon
            name={iconName}
            width={ms(size + SIZES.base / 2)}
            height={ms(size + SIZES.base / 2)}
            fill={color}
          />
        </View>
      )}

      {!focused && (
        <Icon name={iconName} width={size} height={size} fill={color} />
      )}
    </View>
  );
};

export default BottomIcon;
