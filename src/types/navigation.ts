export type MainStackParamList = {
  MainStackScreen: BottomTabNavigatorParamList;
  DetailScreen: undefined;
  ViewAllScreen: {
    name: string;
  };
  EditProfileScreen: undefined;
};


export type BottomTabNavigatorParamList = {
  Home: undefined;
  Booking: undefined;
  WatchList: undefined;
  Profile: undefined;
};
