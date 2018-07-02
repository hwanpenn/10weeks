import React from 'react';
import { Platform, StatusBar, StyleSheet, View,ScrollView,Image,Dimensions,Text,TouchableHighlight } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { AsyncStorage } from "react-native"
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
        isFirstOpen: false,
        isLogin: true,
    };

    async componentWillMount(){
        AsyncStorage.getItem('isFirstOpen')
            .then((value) => {
                if(value===null){
                    this.setState({ isFirstOpen: true });
                }
            })
        AsyncStorage.getItem('userToken')
            .then((value) => {
                if(value===null){
                    this.setState({ isLogin: false });
                }
            })
    }

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            if (this.state.isFirstOpen ) {
                return (
                    <ScrollView
                        contentContainerStyle={{
                            width: Dimensions.get('window').width * 4,
                            height: Dimensions.get('window').height
                        }}
                        bounces={false}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}>
                      <Image style={start.backgroundImage} source={require('./assets/images/ydy1.png')}/>
                      <Image style={start.backgroundImage} source={require('./assets/images/ydy2.png')}/>
                      <Image style={start.backgroundImage} source={require('./assets/images/ydy3.png')}/>
                      <Image style={start.backgroundImage} source={require('./assets/images/ydy4.png')}/>

                      <View style={{
                          position: "absolute",
                          width: Dimensions.get("window").width,
                          height: Dimensions.get("window").height,
                          zIndex: 9999,
                          right: 0
                      }}>
                        <View style={{flex: 1}}></View>
                          <View style={{flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 170 : 140}}>
                              <View style={{backgroundColor:"#16d4f1",borderWidth : 0,borderColor : "#fff",borderRadius : Platform.OS==="ios" ? 40: 50,width : 274,height : 47,overflow:"hidden"}} >
                                  <Text onPress={() => {this._handleIsOpenClick()}}
                                        style={{textAlign:'center',fontSize:18,color:"#fff",marginLeft:17,marginTop:Platform.OS === "ios" ? 15 : 9}} >现在就加入</Text>
                              </View>
                          </View>
                      </View>
                    </ScrollView>
                );
            } else {
                if(this.state.isLogin){
                    return (
                        <View style={styles.container}>
                            {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                            <AppNavigator/>
                        </View>
                    );
                }else {
                    return (
                        <View style={styles.loginContainer}>
                            <View style={{marginTop: Platform.OS === "ios" ? 188 : 196,flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 103 : 85}}>
                                <View style={{backgroundColor:"#16d4f1",borderWidth : 0,borderColor : "#fff",borderRadius : Platform.OS==="ios" ? 40: 50,width : 274,height : 47,overflow:"hidden"}} >
                                    <Text onPress={() => {this._handleIsOpenClickLogin()}}  style={{textAlign:'center',fontSize:18,color:"#fff",marginLeft:0,marginTop:Platform.OS === "ios" ? 15 : 9}} >手机登陆</Text>
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
                                        <Image source={require('./assets/images/weichat.png')}/>
                                    </TouchableHighlight>
                                    </View>
                                    <View style={{width: 100,  }} >
                                        <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                                            this._handleIsOpenClickFacebook()
                                        }}>
                                            <Image source={require('./assets/images/facebook.png')}/>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                }

            }
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                // require('./assets/images/ydy1.png'),
            ]),
            Font.loadAsync({
                ...Icon.Ionicons.font,
                'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
            }),
        ]);
    };
    _handleLoadingError = error => {
        console.warn(error);
    };
    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };
    _handleIsOpenClick = () => {
        AsyncStorage.setItem('isFirstOpen', JSON.stringify('false'), (error, result) => {
            if (!error) {
                console.log("设置成功")
                this.setState({ isFirstOpen: false });
            }
        });

    };
    _handleIsOpenClickLogin = () => {
        console.log("登陆")
    };
    _handleIsOpenClickRegist = () => {
        console.log("注册")
    };
    _handleIsOpenClickWechat = () => {
        console.log("微信")
    };
    _handleIsOpenClickFacebook = () => {
        console.log("脸书")
    };
}

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
const start = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }

});
