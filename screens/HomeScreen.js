import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TouchableHighlight, Dimensions,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import Punch from "./Punch";
import Health from "./Health";
import Video from "./Video";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


    _handleClickVideo = () => {
        this.props.navigation.navigate('Video')
    };
    _handleClickHealth = () => {
        this.props.navigation.navigate('Health')
    };
    _handleClickPunch = () => {
        this.props.navigation.navigate('Punch')
    };
    _handleClickCustom = () => {
        this.props.navigation.navigate('Custom')
    };
    _handleClickWorkout = () => {
        this.props.navigation.navigate('Workout')
    };
    _handleClickChat = () => {
        // this.props.navigation.navigate('Workout')
    };

  render() {
    return (
      <View style={styles.container}>
          <View  style={{ marginTop: Platform.OS === "ios" ? 0 : 0,flexDirection : "row",justifyContent : "flex-start",height : Platform.OS === "ios" ? 107 : 100}}>
              <Text   style={{padding:5,textAlign:'left',fontSize:28,color :  "#444444" ,marginLeft:10,marginTop:Platform.OS === "ios" ? 50 : 40}} >欢迎加入十周挑战</Text>
              {/*<Text onPress={() => {this._handleIsCode()}}  style={{padding:25,textAlign:'center',fontSize:28,color : this.state.isClick === "isCode" ? "#fff" : "#868686",marginLeft:0,marginTop:Platform.OS === "ios" ? 0 : 0}} >验证码登陆</Text>*/}
              <View style={{width: 100,marginLeft:Platform.OS === "ios" ? 80 : 63,marginTop:Platform.OS === "ios" ? 60 : 47  }} >
                  <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                      this._handleClickChat()
                  }}>
                      <Image style={{width: 24, height: 24}} source={require('../assets/icons/chaticon.png')}/>
                  </TouchableHighlight>
              </View>
              </View>
          <View  style={{backgroundColor:"#444444", marginTop: Platform.OS === "ios" ? 0 : 0,flexDirection : "row",justifyContent : "flex-start",height : Platform.OS === "ios" ? 165 : 130}}>
                <ScrollView
                    contentContainerStyle={{
                        width: Dimensions.get('window').width * 3,
                        height: Platform.OS === "ios" ? 165 : 130,

                    }}
                    bounces={false}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}>
                    <Image style={start.backgroundImage} source={require('../assets/images/image1.jpg')}/>
                    {/*<View  style={{ marginTop: Platform.OS === "ios" ? 90 : 0,flexDirection : "row",justifyContent : "flex-start",height : Platform.OS === "ios" ? 107 : 100}}>*/}
                        {/*<Text   style={{padding:5,textAlign:'left',fontSize:28,color :  "#444444" ,marginLeft:10,marginTop:Platform.OS === "ios" ? 90 : 40}} >欢迎加入十周挑战</Text>*/}
                    {/*</View>*/}
                    <Image style={start.backgroundImage} source={require('../assets/images/image2.jpg')}/>
                    <Image style={start.backgroundImage} source={require('../assets/images/image3.jpg')}/>
                </ScrollView>
              </View>
          <View style={{backgroundColor:"#fff",height:18,marginLeft:Platform.OS === "ios" ? 0 : 0,marginTop:Platform.OS === "ios" ? 0 : 0  }} >
          </View>
        <ScrollView style={styles.container1} contentContainerStyle={styles.contentContainer}>
            <View style={{flexDirection : "row", justifyContent : "flex-start",height:191,marginLeft:Platform.OS === "ios" ? 0 : 0,marginTop:Platform.OS === "ios" ? 0 : 0  }} >
                <View style={{padding:10,width: 183,height:191,marginLeft:Platform.OS === "ios" ? 0 : 0,marginTop:Platform.OS === "ios" ? 0 : 0  }} >
                    <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                        this._handleClickVideo()
                    }}>
                        <Image style={start.backgroundImage1} source={require('../assets/images/menu1.png')}/>
                    </TouchableHighlight>
                </View>
                <View style={{width: 183,height:156,marginLeft:Platform.OS === "ios" ? 10 : 8,marginTop:Platform.OS === "ios" ? 0 : 0  }} >
                    <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                        this._handleClickHealth()
                    }}>
                        <Image style={start.backgroundImage2} source={require('../assets/images/menu2.png')}/>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{flexDirection : "row", justifyContent : "flex-start",height:191,marginLeft:Platform.OS === "ios" ? 0 : 0,marginTop:Platform.OS === "ios" ? 0 : 0  }} >
                <View style={{padding:10,width: 183,height:156,marginLeft:Platform.OS === "ios" ? 0 : 0,marginTop:Platform.OS === "ios" ? 0 : 0  }} >
                    <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                        this._handleClickPunch()
                    }}>
                        <Image style={start.backgroundImage3} source={require('../assets/images/menu3.png')}/>
                    </TouchableHighlight>
                </View>
                <View style={{width: 183,height:191,marginLeft:Platform.OS === "ios" ? 10 : 8,marginTop:Platform.OS === "ios" ? 0 : 0  }} >
                    <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                        this._handleClickCustom()
                    }}>
                        <Image style={start.backgroundImage4} source={require('../assets/images/menu4.png')}/>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{flexDirection : "row", justifyContent : "flex-start",height:191,marginLeft:Platform.OS === "ios" ? 0 : 0,marginTop:Platform.OS === "ios" ? 0 : 0  }} >
                <View style={{padding:10,width: 183,height:156,marginLeft:Platform.OS === "ios" ? 0 : 0,marginTop:Platform.OS === "ios" ? 0 : 0  }} >
                    <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                        this._handleClickWorkout()
                    }}>
                        <Image style={start.backgroundImage5} source={require('../assets/images/menu5.png')}/>
                    </TouchableHighlight>
                </View>
            </View>


          {/*<View style={styles.welcomeContainer}>*/}
            {/*<Image*/}
              {/*source={*/}
                {/*__DEV__*/}
                  {/*? require('../assets/images/robot-dev.png')*/}
                  {/*: require('../assets/images/robot-prod.png')*/}
              {/*}*/}
              {/*style={styles.welcomeImage}*/}
            {/*/>*/}
          {/*</View>*/}

          {/*<View style={styles.getStartedContainer}>*/}
            {/*{this._maybeRenderDevelopmentModeWarning()}*/}

            {/*<Text style={styles.getStartedText}>Get started by opening</Text>*/}

            {/*<View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>*/}
              {/*<MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>*/}
            {/*</View>*/}

            {/*<Text style={styles.getStartedText}>*/}
              {/*Change this text and your app will automatically reload.我爱你*/}
            {/*</Text>*/}
          {/*</View>*/}

          {/*<View style={styles.helpContainer}>*/}
            {/*<TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>*/}
              {/*<Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>*/}
            {/*</TouchableOpacity>*/}
          {/*</View>*/}
        </ScrollView>

        {/*<View style={styles.tabBarInfoContainer}>*/}
          {/*<Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>*/}

          {/*<View style={[styles.codeHighlightContainer, styles.navigationFilename]}>*/}
            {/*<MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>*/}
          {/*</View>*/}
        {/*</View>*/}
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
      backgroundColor:"#f4f4f4"
  },
    container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 14,

  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
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
        height: Platform.OS === "ios" ? 165 : 130,
    },
    backgroundImage1: {
      marginTop:-10,
      marginLeft:-10,
        width: Platform.OS === "ios" ? 183 : 144,
        height: Platform.OS === "ios" ? 191 : 150,
    },
    backgroundImage2: {
      marginTop:0,
      marginLeft:0,
        width: Platform.OS === "ios" ? 183 : 144,
        height: Platform.OS === "ios" ? 156 : 123,
    },
    backgroundImage3: {
      marginTop:0,
      marginLeft:-10,
        width: Platform.OS === "ios" ? 183 : 144,
        height: Platform.OS === "ios" ? 156 : 123,
    },
    backgroundImage4: {
      marginTop:-24,
      marginLeft:0,
        width: Platform.OS === "ios" ? 183 : 144,
        height: Platform.OS === "ios" ? 191 : 150,
    },
    backgroundImage5: {
      marginTop:-24,
      marginLeft:-10,
        width: Platform.OS === "ios" ? 183 : 144,
        height: Platform.OS === "ios" ? 156 : 123,
    }

});