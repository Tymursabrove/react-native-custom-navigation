import { View, StyleSheet } from 'react-native'

const Screen4 = () => {
    return (
        <View style={[styles.container, { backgroundColor: '#0fff0f' }]}></View>
    )
}

export default Screen4;


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