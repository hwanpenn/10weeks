import React from 'react';
import { Platform,Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Workout from '../screens/Workout';
import Custom from '../screens/Custom';
import Punch from '../screens/Punch';
import Health from '../screens/Health';
import Video from '../screens/Video';
import Write from '../screens/Write';
import HomeScreen from '../screens/HomeScreen';
import Record from '../screens/Record';
import Rank from '../screens/Rank';
import Mine from '../screens/Mine';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Details from "../screens/Details";
import Home from "../screens/Home";

// const HomeStack = createStackNavigator({
//     Home: HomeScreen,
// });
const HomeStack = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        // Home: Home,
        Details: Details,
        Workout: Workout,
        Custom: Custom,
        Punch: Punch,
        Health: Health,
        Video: Video,
    },
    {
        initialRouteName: 'HomeScreen',
    }
);

HomeStack.navigationOptions = {
  tabBarLabel: '首页',
  tabBarIcon: ({ focused }) => (
      <Image
          source={require('../assets/icons/home.png')}
          fadeDuration={0}
          style={{width: 20, height: 20}}
      />
  ),
};

const RecordStack = createStackNavigator({
    Record: Record,
});

RecordStack.navigationOptions = {
    tabBarLabel: '记录',
    tabBarIcon: ({ focused }) => (
        <Image
            source={require('../assets/icons/record.png')}
            fadeDuration={0}
            style={{width: 20, height: 20}}
        />
  ),
};

const AddStack = createStackNavigator({
    Write: Write,
});

AddStack.navigationOptions = {
    tabBarLabel: '发布',
    tabBarIcon: ({ focused }) => (
        <Image
            source={require('../assets/icons/write.png')}
            fadeDuration={0}
            style={{width: 23, height: 23}}
        />
    ),
};

const RankStack = createStackNavigator({
    Rank: Rank,
});

RankStack.navigationOptions = {
    tabBarLabel: '排行榜',
    tabBarIcon: ({ focused }) => (
        <Image
            source={require('../assets/icons/rank.png')}
            fadeDuration={0}
            style={{width: 20, height: 20}}
        />
  ),
};
const MineStack = createStackNavigator({
  Mine: Mine,
});

MineStack.navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({ focused }) => (
        <Image
            source={require('../assets/icons/mine.png')}
            fadeDuration={0}
            style={{width: 20, height: 20}}
        />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
    RecordStack,
    AddStack,
  RankStack,
    MineStack,
});

// export default ({
//   HomeStack,
//   LinksStack,
//   SettingsStack,
// });
