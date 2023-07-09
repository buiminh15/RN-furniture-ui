import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-eva-icons';

type Props = TouchableOpacityProps & {
  nameIcon: string;
  size?: number;
  colorIcon?: string;
};

const ButtonIcon = (props: Props) => {
  const {nameIcon, size = 24, colorIcon = 'white', ...restProps} = props;
  return (
    <TouchableOpacity {...restProps}>
      <Icon name={nameIcon} width={size} height={size} fill={colorIcon} />
    </TouchableOpacity>
  );
};

export default ButtonIcon;
