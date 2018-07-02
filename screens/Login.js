import React from 'react';
import { Platform, StatusBar, StyleSheet, View,ScrollView,Image,Dimensions,Text,TouchableHighlight } from 'react-native';

export default class Login extends React.Component {


    render() {

        return (
            <View style={styles.loginContainer}>
                <View style={{marginTop: Platform.OS === "ios" ? 238 : 196,flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 103 : 85}}>
                    <View style={{backgroundColor:"#16d4f1",borderWidth : 0,borderColor : "#fff",borderRadius : Platform.OS==="ios" ? 40: 50,width : 274,height : 47,overflow:"hidden"}} >
                        <Text onPress={() => {this._handleIsOpenClickLogin()}}  style={{textAlign:'center',fontSize:18,color:"#fff",marginLeft:17,marginTop:Platform.OS === "ios" ? 8 : 9}} >手机登陆</Text>
                    </View>
                </View>
                <View style={{flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 170 : 140}}>
                    <View style={{backgroundColor:"#16d4f1",borderWidth : 0,borderColor : "#fff",borderRadius : Platform.OS==="ios" ? 40: 50,width : 274,height : 47,overflow:"hidden"}} >
                        <Text onPress={() => {this._handleIsOpenClickRegist()}}  style={{textAlign:'center',fontSize:18,color:"#fff",marginLeft:17,marginTop:Platform.OS === "ios" ? 8 : 9}} >手机注册</Text>
                    </View>
                </View>
                <View style={{flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 73 : 60}}>
                    <View style={{backgroundColor:"#020203",borderWidth : 0,borderColor : "#fff",borderRadius : Platform.OS==="ios" ? 40: 50,width : 274,height : 47,overflow:"hidden"}} >
                        <Text style={{textAlign:'center',fontSize:16,color:"#797a79",marginLeft:17,marginTop:Platform.OS === "ios" ? 8 : 9}} >其他方式登陆</Text>
                    </View>
                </View>
                <View style={{flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 170 : 140}}>
                    <View style={{
                        backgroundColor:'rgba(52, 52, 52, 0)',
                        flexDirection: 'row',
                        justifyContent: "center",
                        height: Platform.OS === "ios" ? 170 : 140
                    }}>

                        <View style={{width: 100,marginLeft:80  }} >
                            <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                                this._handleIsOpenClickWechat()
                            }}>
                                <Image source={require('./assets/images/iconwechat.png')}/>
                            </TouchableHighlight>
                        </View>
                        <View style={{width: 100,  }} >
                            <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                                this._handleIsOpenClickFacebook()
                            }}>
                                <Image source={require('./assets/images/iconfacebook.png')}/>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
