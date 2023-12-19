import { View, StyleSheet } from 'react-native'

const Screen3 = () => {
    return (
        <View style={[styles.container, { backgroundColor: '#ff0000' }]}></View>
    )
}

export default Screen3;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: "transparent",
        flexDirection: 'row',
        // paddingTop: StatusBar.currentHeight,
        marginTop: 30
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
});