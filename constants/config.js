import HomeStackScreen from '../src/navigation/HomeStack';

const tabs = [
  {
    name: 'HomeTab',
    icon: require('../assets/icons/flash_icon.png'),
    component: HomeStackScreen,
  },
  {
    name: 'BoxTab',
    icon: require('../assets/icons/cube_icon.png'),
    component: HomeStackScreen,
  },
  {
    name: 'CameraTab',
    icon: require('../assets/icons/camera.png'),
    component: HomeStackScreen,
  },
  {
    name: 'SearchTab',
    icon: require('../assets/icons/search_icon.png'),
    component: HomeStackScreen,
  },
  {
    name: 'FavoriteTab',
    icon: require('../assets/icons/heart_icon.png'),
    component: HomeStackScreen,
  },
];

export {tabs};
