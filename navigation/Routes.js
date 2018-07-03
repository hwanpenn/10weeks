import React from 'react';
import { createStackNavigator } from 'react-navigation';
import {Platform, StatusBar, StyleSheet, View,} from 'react-native';
import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import Home from '../screens/Home';
import Details from '../screens/Details';
import LoginAndRegist from "../screens/LoginAndRegist";
import Login from "../screens/Login";
import Regist from "../screens/Regist";
// import {Platform} from "react-native";
import Mine from "../screens/Mine";
import Record from "../screens/Record";
import Write from "../screens/Write";
import Rank from "../screens/Rank";
import HomeScreen from "../screens/HomeScreen";

// const RootStack = createStackNavigator(
//     {
//         Home: Home,
//         Details: Details,
//         LoginAndRegist: LoginAndRegist,
//         Login: Login,
//         Regist: Regist,
//     },
//     {
//         initialRouteName: 'Home',
//     }
// );
const HomeStack = createStackNavigator({
    HomeScreen: HomeScreen,
});

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

const AppNavigator = StackNavigator({
            Home: Home,
        Details: Details,
        LoginAndRegist: LoginAndRegist,
        Login: Login,
        Regist: Regist,
}, {
    initialRouteName: 'Home',
});

export default class Routes extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                <AppNavigator />
                {/*<RootStack />*/}
            </View>
        )
    }
}
// export default (RootStack);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loginContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#020203',
    },
    buttonContainer: {
        position: 'absolute',
        right:0,
        marginLeft: "auto",
        marginRight:"auto",
        width:300,
    },
});