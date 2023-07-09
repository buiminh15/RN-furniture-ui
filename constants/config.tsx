import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import {ms, vs} from 'react-native-size-matters';
import {BottomIcon} from '../src/components';
import {
  CartScreen,
  EmptyScreen,
  FavoriteScreen,
  HomeScreen,
  ProfileScreen,
  QRScreen,
} from '../src/screens';
import {commonStyles} from '../src/styles';
import {BottomTabNavigatorParamList} from '../src/types';
import {COLORS} from './theme';

type BottomTypes = keyof BottomTabNavigatorParamList;

export type BottomIconType = {
  focused: boolean;
  color: string;
  size: number;
};

type BottomTabsType = {
  id: number;
  name: BottomTypes;
  component: (el?: any) => React.JSX.Element;
  icon: ({focused, color, size}: BottomIconType) => React.JSX.Element;
};

const BOTTOM_NAVS: BottomTabsType[] = [
  {
    id: 1,
    name: 'Home',
    component: HomeScreen,
    icon: ({focused, color, size}: BottomIconType) => (
      <BottomIcon
        focused={focused}
        color={color}
        size={size}
        name="Home"
        iconName="home-outline"
      />
    ),
  },
  {
    id: 2,
    name: 'Favorite',
    component: FavoriteScreen,
    icon: ({focused, color, size}: BottomIconType) => (
      <BottomIcon
        focused={focused}
        color={color}
        size={size}
        name="Schedule"
        iconName="heart-outline"
      />
    ),
  },
  {
    id: 3,
    name: 'QR',
    component: EmptyScreen,
    icon: ({focused, color, size}: BottomIconType) => (
      <TouchableOpacity
        style={[
          commonStyles.itemsCenter,
          commonStyles.justifyCenter,
          commonStyles.shadow,
          {
            width: ms(60),
            height: ms(60),
            backgroundColor: COLORS.primary,
            borderRadius: ms(500),
          },
          {
            bottom: vs(20),
          },
        ]}>
        <Icon name="camera-outline" width={30} height={30} fill={'white'} />
      </TouchableOpacity>
    ),
  },
  {
    id: 4,
    name: 'Cart',
    component: CartScreen,
    icon: ({focused, color, size}: BottomIconType) => (
      <BottomIcon
        focused={focused}
        color={color}
        size={size}
        name="WatchList"
        iconName="shopping-cart-outline"
      />
    ),
  },
  {
    id: 5,
    name: 'Profile',
    component: ProfileScreen,
    icon: ({focused, color, size}: BottomIconType) => (
      <BottomIcon
        focused={focused}
        color={color}
        size={size}
        name="Profile"
        iconName="person-outline"
      />
    ),
  },
];

export {BOTTOM_NAVS};
