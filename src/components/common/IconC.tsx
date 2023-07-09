import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import {ms, s} from 'react-native-size-matters';
import {COLORS, SIZES} from '../../../constants';
import {commonStyles} from '../../styles/commonStyles';

type Props = TouchableOpacityProps & {
  iconName: string;
  size?: number;
  iconColor?: string;
};

const IconC = (props: Props) => {
  const {iconName, size, iconColor, ...otherProps} = props;
  return (
    <TouchableOpacity
      style={[
        commonStyles.itemsCenter,
        commonStyles.justifyCenter,
        styles.container,
      ]}
      {...otherProps}>
      <Icon
        name={iconName}
        width={size || ms(24)}
        height={size || ms(24)}
        fill={iconColor || COLORS.black}
      />
    </TouchableOpacity>
  );
};

export default IconC;

const styles = StyleSheet.create({
  container: {
    padding: ms(SIZES.base),

    borderWidth: s(1),
    borderRadius: ms(SIZES.radius),
    borderColor: COLORS.opacityGray,
  },
});
