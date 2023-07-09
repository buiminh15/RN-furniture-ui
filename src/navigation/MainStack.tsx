import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {OnBoardScreen, QRScreen} from '../screens';
import {MainStackParamList} from '../types/navigation';
import BottomTabStack from './BottomTabStack';

const Stack = createNativeStackNavigator<MainStackParamList>();
const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="QRScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboard" component={OnBoardScreen} />
      <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
      <Stack.Screen name="QRScreen" component={QRScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
