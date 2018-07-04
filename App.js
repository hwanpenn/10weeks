import React from 'react';
import { Platform, StatusBar, StyleSheet, View,ScrollView,Image,Dimensions,Text,TouchableHighlight } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { AsyncStorage } from "react-native"
import AppNavigator from './navigation/AppNavigator';
import RootStack from './src/Routes';


export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
        isFirstOpen: false,
        // isLogin: true,
    };

    async componentWillMount(){
        AsyncStorage.getItem('isFirstOpen')
            .then((value) => {
                if(value===null){
                    this.setState({ isFirstOpen: true });
                }
            })
        // AsyncStorage.getItem('userToken')
        //     .then((value) => {
        //         if(value===null){
        //             this.setState({ isLogin: false });
        //         }
        //     })
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
                    return (
                        <View style={styles.container}>
                            {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                            {/*<AppNavigator/>*/}
                            <RootStack />
                        </View>
                    );

                        // return <RootStack />;

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
