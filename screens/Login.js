import React from 'react';
import { View, Text } from 'react-native';
import { Platform, StyleSheet,Image,Dimensions,TouchableHighlight ,TextInput} from 'react-native';

class Login extends React.Component {
    state = {
        isClick: "isPassword",
        phonetext: "",
        passwordtext: "",
    };
    static navigationOptions = {
        header: null,
    };
    _handleGetCode = () => {

        console.log("验证码")
        // console.log(Dimensions.get('window').width)
        // this.props.navigation.navigate('Home')
    };
    _handleIsOpenClickLogin = () => {

        console.log("登陆")
        // console.log(Dimensions.get('window').width)
        this.props.navigation.navigate('Home')
    };
    _handleIsPassword = () => {
        // console.log("返回")
        this.setState({ isClick: "isPassword" });
    };
    _handleIsCode = () => {
        // console.log("返回")
        this.setState({ isClick: "isCode" });
    };
    _handleClickBack = () => {
        // console.log("返回")
        this.props.navigation.goBack()
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
        let isClickTemp = this.state.isClick;
        return (
            <View style={styles.loginContainer}>
                <View style={{marginTop: Platform.OS === "ios" ? 43 : 34,marginLeft: Platform.OS === "ios" ? 14 : 11,flexDirection : "row",justifyContent : "flex-start",height: Platform.OS === "ios" ? 30 : 30}}>
                    <View style={{
                        backgroundColor:'rgba(52, 52, 52, 0)',
                        flexDirection: 'row',
                        justifyContent: "flex-start",
                        height: Platform.OS === "ios" ? 30 : 30
                    }}>

                        <View style={{width: 100,marginLeft:Platform.OS === "ios" ? 10 : 10  }} >
                            <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                                this._handleClickBack()
                            }}>
                                <Image source={require('../assets/icons/back.png')}/>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: Platform.OS === "ios" ? 0 : 0,flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 67 : 100}}>
                        <Text onPress={() => {this._handleIsPassword()}}  style={{padding:25,textAlign:'center',fontSize:28,color : this.state.isClick === "isPassword" ? "#fff" : "#868686",marginLeft:0,marginTop:Platform.OS === "ios" ? 0 : 0}} >密码登陆</Text>
                        <Text onPress={() => {this._handleIsCode()}}  style={{padding:25,textAlign:'center',fontSize:28,color : this.state.isClick === "isCode" ? "#fff" : "#868686",marginLeft:0,marginTop:Platform.OS === "ios" ? 0 : 0}} >验证码登陆</Text>
                </View>

                <View style={{flexDirection : "column",justifyContent : "flex-start",height : Platform.OS === "ios" ? 170 : 140}}>
                    <Text   style={{padding:25,textAlign:'left',fontSize:25,color : "#fff" ,marginLeft:Platform.OS === "ios" ? 10 : 6,marginTop:Platform.OS === "ios" ? 0 : -40}} >手机号</Text>
                    <TextInput underlineColorAndroid='transparent' style={{color : "#fff",borderBottomWidth:Platform.OS === "ios" ? 2 : 2,borderColor:Platform.OS === "ios" ? "#868686" : "#868686",height:40 ,width:300,marginLeft:Platform.OS === "ios" ? 38 : 30}} placeholder="10位数" onChangeText={(text)=>{this.setState({phonetext:text})}}/>
                </View>
                {isClickTemp === "isPassword"? (<View>
                    <View style={{flexDirection : "column",justifyContent : "flex-start",height : Platform.OS === "ios" ? 170 : 140}}>
                        <Text   style={{padding:25,textAlign:'left',fontSize:25,color : "#fff" ,marginLeft:Platform.OS === "ios" ? 10 : 6,marginTop:Platform.OS === "ios" ? 0 : -40}} >密码</Text>
                        <TextInput underlineColorAndroid='transparent' secureTextEntry={true} style={{color : "#fff",borderBottomWidth:Platform.OS === "ios" ? 2 : 2,borderColor:Platform.OS === "ios" ? "#868686" : "#868686",height:40 ,width:300,marginLeft:Platform.OS === "ios" ? 38 : 30}} placeholder="至少六位数" onChangeText={(text)=>{this.setState({passwordtext:text})}}/>
                    </View></View>) :
                    (<View>
                    <View style={{flexDirection : "column",justifyContent : "flex-start",height : Platform.OS === "ios" ? 170 : 140}}>
                        <Text   style={{padding:25,textAlign:'left',fontSize:25,color : "#fff" ,marginLeft:Platform.OS === "ios" ? 10 : 6,marginTop:Platform.OS === "ios" ? 0 : -40}} >验证码</Text>
                        <View style={{flexDirection : "row",justifyContent : "center",}}>
                            <TextInput underlineColorAndroid='transparent' secureTextEntry={false} style={{color : "#fff",borderBottomWidth:Platform.OS === "ios" ? 2 : 2,borderColor:Platform.OS === "ios" ? "#868686" : "#868686",height:40 ,width:180,marginLeft:Platform.OS === "ios" ? 5 : 5}} placeholder="至少六位数" onChangeText={(text)=>{this.setState({passwordtext:text})}}/>
                            <View style={{marginTop:-8,backgroundColor:"#16d4f1",borderWidth : 0,borderColor : "#fff",borderRadius : Platform.OS==="ios" ? 73: 57,width : 120,height : 47,overflow:"hidden"}} >
                                <Text onPress={() => {this._handleGetCode()}}  style={{textAlign:'center',fontSize:18,color:"#fff",marginLeft:0,marginTop:Platform.OS === "ios" ? 15 : 9}} >获取验证码</Text>
                            </View>
                        </View>
                        </View></View>)}

                {/*<View style={{flexDirection : "column",justifyContent : "flex-start",height : Platform.OS === "ios" ? 170 : 140}}>*/}
                    {/*<Text   style={{padding:25,textAlign:'left',fontSize:25,color : "#fff" ,marginLeft:Platform.OS === "ios" ? 10 : 6,marginTop:Platform.OS === "ios" ? 0 : -40}} >密码</Text>*/}
                    {/*<TextInput underlineColorAndroid='transparent' secureTextEntry={true} style={{color : "#fff",borderBottomWidth:Platform.OS === "ios" ? 2 : 2,borderColor:Platform.OS === "ios" ? "#868686" : "#868686",height:40 ,width:300,marginLeft:Platform.OS === "ios" ? 38 : 30}} placeholder="至少六位数" onChangeText={(text)=>{this.setState({passwordtext:text})}}/>*/}
                {/*</View>*/}
                <View style={{marginTop: Platform.OS === "ios" ? 63 : 50,flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 103 : 85}}>
                    <View style={{backgroundColor:"#16d4f1",borderWidth : 0,borderColor : "#fff",borderRadius : Platform.OS==="ios" ? 73: 57,width : 274,height : 47,overflow:"hidden"}} >
                        <Text onPress={() => {this._handleIsOpenClickLogin()}}  style={{textAlign:'center',fontSize:18,color:"#fff",marginLeft:0,marginTop:Platform.OS === "ios" ? 15 : 9}} >登录</Text>
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