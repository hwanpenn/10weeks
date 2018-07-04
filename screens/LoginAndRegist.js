import React from 'react';
import { View, Text } from 'react-native';
import { Platform, StyleSheet,Image,Dimensions,TouchableHighlight } from 'react-native';
import {widthMul,heightMul} from '../constants/Layout.js';

class LoginAndRegist extends React.Component {
    static navigationOptions = {
        header: null,
    };
    _handleIsOpenClickLogin = () => {
        console.log("登陆")
        this.props.navigation.navigate('Login')
    };
    _handleIsOpenClickRegist = () => {
        console.log("注册")
        this.props.navigation.navigate('Regist')
    };
    _handleIsOpenClickWechat = () => {
        console.log("微信")
    };
    _handleIsOpenClickFacebook = () => {
        console.log("脸书")
    };
    render() {
        return (
            <View style={styles.loginContainer}>
                    <View style={{marginTop:204.5, flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 89 : 89}}>
                        <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                            this._handleIsOpenClickLogin()
                        }}>
                            <Image style={styles.buttonContainer1} source={require('../assets/button/login.png')}/>
                        </TouchableHighlight>

                    </View>
                    <View style={{marginTop:0, flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 144 : 140}}>
                        <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                            this._handleIsOpenClickRegist()
                        }}>
                            <Image style={styles.buttonContainer1} source={require('../assets/button/regist.png')}/>
                        </TouchableHighlight>

                    </View>
                <View style={{marginTop:0, flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 47.5 : 47.5}}>
                    <Text style={{textAlign:'center',fontSize:16,color:"#797a79",marginLeft:0,marginTop:Platform.OS === "ios" ? 0 : 0}} >其他方式登陆</Text>
                </View>
                <View style={{marginTop:0, flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 47.5 : 47.5}}>
                    <View style={{ width: 100  }} >
                    <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                    this._handleIsOpenClickWechat()
                    }}>
                    <Image style={styles.backgroundImage} source={require('../assets/icons/wechat15.png')}/>
                    </TouchableHighlight>
                    </View>
                    <View style={{ }} >
                    <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                    this._handleIsOpenClickFacebook()
                    }}>
                    <Image style={styles.backgroundImage1} source={require('../assets/icons/facebook15.png')}/>
                    </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}
export default LoginAndRegist;

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
    backgroundImage: {
        // paddingRight:31.5,
        width: Platform.OS === "ios" ? 53 : 53,
        height: Platform.OS === "ios" ? 53 : 53,
    },
    backgroundImage1: {
        width: Platform.OS === "ios" ? 51 : 53,
        height: Platform.OS === "ios" ? 51 : 53,
    },
    buttonContainer1: {
        width: Platform.OS === "ios" ? 285 : 285,
        height: Platform.OS === "ios" ? 49 : 49,
    }
});