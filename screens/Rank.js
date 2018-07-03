import React from 'react';
import { View, Text ,Button} from 'react-native';

class Rank extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>排行榜页面</Text>
                <Button
                        title="返回"
                    // onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
export default Rank;