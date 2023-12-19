import { View, StyleSheet } from 'react-native'

const Screen5 = () => {
    return (
        <View style={[styles.container, { backgroundColor: '#ff0081' }]}></View>
    )
}

export default Screen5;


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