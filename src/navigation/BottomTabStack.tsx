import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens';
import React from 'react';
import {BOTTOM_NAVS, COLORS, SIZES} from '../../constants';
import {ms, s, vs} from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

function BottomTabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenListeners={{
        tabPress: e => {
          // Prevent default action
          e.preventDefault();
          console.log('📢 [BottomTabStack.tsx:18]', e.target);
        },
      }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          height: vs(50),
          borderRadius: ms(SIZES.padding),
          bottom: vs(SIZES.padding),
          marginHorizontal: s(SIZES.base),
        },
      }}>
      {BOTTOM_NAVS.map(nav => (
        <Tab.Screen
          key={`bottom-nav-${nav.id}`}
          name={nav.name}
          component={nav.component}
          options={{
            tabBarLabel: nav.name,
            tabBarIcon: nav.icon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default BottomTabStack;
