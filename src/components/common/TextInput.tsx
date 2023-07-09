import {
  View,
  TextInput as DefaultTextInput,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-eva-icons';
import {commonStyles} from '../../styles/commonStyles';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {ms} from 'react-native-size-matters';
type CustomTextInputProps = TouchableOpacityProps &
  TextInputProps & {
    containerStyle?: ViewStyle | ViewStyle[];
    iconName?: string;
    iconColor?: string;
    iconSize?: number;
    onPress: () => void;
  };

const TextInput = (props: CustomTextInputProps) => {
  const {
    containerStyle,
    iconName,
    iconColor,
    iconSize,
    onPress,
    ...otherProps
  } = props;
  return (
    <View
      style={[
        commonStyles.row,
        commonStyles.itemsCenter,
        commonStyles.justifyBetween,
        commonStyles.bgWhite,
        containerStyle,
      ]}>
      <DefaultTextInput
        style={[FONTS.body3, commonStyles.flex1, {color: COLORS.black}]}
        {...otherProps}
      />
      {iconName && (
        <TouchableOpacity onPress={onPress} hitSlop={ms(SIZES.radius)}>
          <Icon
            name={iconName}
            color={iconColor || COLORS.white}
            width={iconSize || 24}
            height={iconSize || 24}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInput;
