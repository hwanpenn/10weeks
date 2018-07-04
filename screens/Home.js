import React from 'react';
import {Platform, StatusBar,View, Text, Button, AsyncStorage, StyleSheet} from 'react-native';
import AppNavigator from '../navigation/AppNavigator';
import HomeScreen from "./HomeScreen";

class Home extends React.Component {
    static navigationOptions = {
        header: null,
    };
    async componentWillMount(){
        let proptemp = this.props;
        AsyncStorage.getItem('userToken')
            .then((value) => {
                if(value===null){
                    // proptemp.navigation.navigate('HomeScreen')11
                    proptemp.navigation.navigate('LoginAndRegist')
                    // proptemp.navigation.navigate('Details')
                }
            })
    }
    render() {
        // return (
        //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //         <Text>Home Screen333444</Text>
        //         <Button
        //             title="Go to Details"
        //             onPress={() => this.props.navigation.navigate('Details')}
        //         />
        //     </View>
        // );
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                <AppNavigator/>
                {/*<RootStack />*/}
            </View>
        );
    }
}
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});