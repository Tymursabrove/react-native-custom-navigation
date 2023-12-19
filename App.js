import React from 'react';
import {View, StatusBar, Platform, Text, StyleSheet, Animated, TouchableOpacity, Dimensions, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';

const bottoTab = createBottomTabNavigator();
const topTab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor="#5856D6" />
      <topTab.Navigator
        tabBar={(props) => <MyTabBar {...props} />}
        screenOptions={({route}) => ({
          //tabBarHideOnKeyboard: true,
          tabBarStyle: {
            display: 'flex',
            elevation: 5,
            flexDirection: "column",
            justifyContent: "center"
          },
          tabBarShowLabel: true,
          headerShown: false,
          tabBarIndicatorStyle: {
            backgroundColor: null
          },
          tabBarItemStyle: {
            width: "auto"
          },
          tabBarScrollEnabled:true
        })}>
        <topTab.Screen
          name="Predictions"
          component={Screen1}
        />
        <topTab.Screen
          name="Trade book"
          component={Screen1}
        />
        <topTab.Screen
          name="Copy Trade"
          component={Screen1}
        />
        <topTab.Screen
          name="Profile"
          component={Screen1}
        />
      </topTab.Navigator>
    </NavigationContainer>
  );
}

const cssStyle = (focused) => StyleSheet.create({
  tabStyle:{
            top: Platform.OS === 'ios' ? 10 : 0,
            display: "flex",
            flexDirection: "row",
    backgroundColor: focused ? "red" : "none",
            left:0,
    borderRadius: 40,
    width: focused ? 100 : 50,
            paddingLeft: 30
          }
})


function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{
      position: "absolute",
      bottom: 20,
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 50,
      marginRight: 50,
      width: (Dimensions.get("window").width * 4) / 5,
      marginLeft: Dimensions.get("window").width / 5/ 2,
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowColor: "#000",
      shadowOpacity: 0.25,
      shadowRadius: 10,
      height: 60,
      backgroundColor: "#141414",
      borderRadius: 30,
      flexDirection: 'row',
      padding: 5,
      zIndex: 9999
    }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        // const opacity = position.interpolate({
        //   inputRange,
        //   outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        // });
        const CustomImage: React.FC<{index: String}> = (props) => { 
          const { index } = props;
          console.log(index, isFocused);
          switch (index) { 
            case 0: return isFocused ? <Image source={require("./assets/png/prediction_black.png")} size={20} style={{ width: 20, height: 20, zIndex: 1000000 }}></Image>: <Image source={require("./assets/png/prediction_white.png" )} size={20} style={{ width: 20, height: 20, zIndex: 1000000 }}></Image>
            case 1: return isFocused ? <Image source={require("./assets/png/Tradebook_black.png")} size={20} style={{ width: 20, height: 20, zIndex: 1000000 }}></Image>:<Image source={require("./assets/png/Tradebook_white.png")} size={20} style={{ width: 20, height: 20 , zIndex: 1000000}}></Image>  
            case 2: return isFocused ? <Image source={require("./assets/png/CopyTrade_black.png")} size={20} style={{ width: 20, height: 20, zIndex: 1000000 }}></Image>:<Image source={require("./assets/png/CopyTrade_white.png")} size={20} style={{ width: 20, height: 20 , zIndex: 1000000}}></Image>
            case 3: return isFocused ? <Image source={require("./assets/png/Profile_black.png")} size={20} style={{ width: 20, height: 20, zIndex: 1000000 }}></Image> : <Image source={require("./assets/png/Profile_white.png")} size={20} style={{ width: 20, height: 20 , zIndex: 1000000}}></Image>
          }
        }
        console.log(<CustomImage></CustomImage>)

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: isFocused? 3: 1 }}
          >
            <Animated.View
              style={{ display: "flex", flexDirection: "row", backgroundColor: isFocused ? 'white' : 'rgba(0,0,0,0)', height: 50, borderRadius: 30, justifyContent: "center", alignItems: "center" }}>
              <CustomImage index={index}></CustomImage>
              { isFocused? <Animated.Text style={{ color: isFocused? 'black': 'white'  }}>
              {label}
              </Animated.Text>: null}
            </Animated.View>
            
          </TouchableOpacity>
        );
      })}
    </View>
  );
}