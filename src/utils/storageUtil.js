// import storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

let sessions = {}
sessions.setItems = function (key , data ) {
    if(key===null||key===undefined||key==="") return false;
    AsyncStorage.setItem({
        key,
        data
    });
    return true;
};
sessions.getItems = function (key = "") {
    if(key===null||key===undefined||key==="") return null;
    return new Promise((resolve,reject) => {
        AsyncStorage.getItems({
            key
        }).then((data) => {
            resolve(data);
        }).catch((err) => {
            resolve(null);
        });
    })
};
sessions.removeItems = function (key) {
    if(key===null||key===undefined||key==="") return false;
    AsyncStorage.remove({
        key
    });
    return true;
};

export default {
    sessions
}
