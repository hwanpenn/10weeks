import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Details from '../screens/Details';
import LoginAndRegist from "../screens/LoginAndRegist";
import Login from "../screens/Login";
import Regist from "../screens/Regist";
import {Platform} from "react-native";

const RootStack = createStackNavigator(
    {
        Home: Home,
        Details: Details,
        LoginAndRegist: LoginAndRegist,
        Login: Login,
        Regist: Regist,
    },
    {
        initialRouteName: 'Home',
    }
);
// RootStack.navigationOptions = {
//     tabBarLabel: 'Home',
//     tabBarIcon: ({ focused }) => (
//         <TabBarIcon
//             focused={focused}
//             name={
//                 Platform.OS === 'ios'
//                     ? `ios-information-circle${focused ? '' : '-outline'}`
//                     : 'md-information-circle'
//             }
//         />
//     ),
// };
export default (RootStack);
