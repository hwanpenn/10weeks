import React from 'react';
import { View, Text } from 'react-native';
import { Platform, StyleSheet,Image,Dimensions,TouchableHighlight } from 'react-native';

class Login extends React.Component {
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
                <View style={{flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 170 : 140}}>
                    <View style={{
                        backgroundColor:'rgba(52, 52, 52, 0)',
                        flexDirection: 'row',
                        justifyContent: "center",
                        height: Platform.OS === "ios" ? 170 : 140
                    }}>

                        <View style={{width: 100,marginLeft:Platform.OS === "ios" ? 60 : 60  }} >
                            <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                                this._handleIsOpenClickWechat()
                            }}>
                                <Image source={require('../assets/images/weichat.png')}/>
                            </TouchableHighlight>
                        </View>
                        <View style={{width: 100,  }} >
                            <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                                this._handleIsOpenClickFacebook()
                            }}>
                                <Image source={require('../assets/images/facebook.png')}/>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: Platform.OS === "ios" ? 188 : 196,flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 103 : 85}}>
                    <View style={{backgroundColor:"#16d4f1",borderWidth : 0,borderColor : "#fff",borderRadius : Platform.OS==="ios" ? 40: 50,width : 274,height : 47,overflow:"hidden"}} >
                        <Text onPress={() => {this._handleIsOpenClickLogin()}}  style={{textAlign:'center',fontSize:18,color:"#fff",marginLeft:0,marginTop:Platform.OS === "ios" ? 15 : 9}} >登陆登陆</Text>
                    </View>
                </View>
                <View style={{flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 170 : 140}}>
                    <View style={{backgroundColor:"#16d4f1",borderWidth : 0,borderColor : "#fff",borderRadius : Platform.OS==="ios" ? 40: 50,width : 274,height : 47,overflow:"hidden"}} >
                        <Text onPress={() => {this._handleIsOpenClickRegist()}}  style={{textAlign:'center',fontSize:18,color:"#fff",marginLeft:0,marginTop:Platform.OS === "ios" ? 15 : 9}} >手机注册</Text>
                    </View>
                </View>
                <View style={{flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 73 : 60}}>
                    <View style={{backgroundColor:"#020203",borderWidth : 0,borderColor : "#fff",borderRadius : Platform.OS==="ios" ? 40: 50,width : 274,height : 47,overflow:"hidden"}} >
                        <Text style={{textAlign:'center',fontSize:16,color:"#797a79",marginLeft:0,marginTop:Platform.OS === "ios" ? 8 : 9}} >其他方式登陆</Text>
                    </View>
                </View>

            </View>
        );
    }
}
export default Login;

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