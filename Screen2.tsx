import { View, StyleSheet } from 'react-native'

const Screen2 = () => {
    return (
        <View style={[styles.container, { backgroundColor: '#ff4000' }]}></View>
    )
}

export default Screen2;


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