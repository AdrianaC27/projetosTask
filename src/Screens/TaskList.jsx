import React from "react";
import { SafeAreaView, Text, View ,ImageBackground ,StyleSheet } from "react-native";

import todayImage from '../../assets/imgs/today.jpg';

export default props =>{

    return (
    <SafeAreaView style ={style.container}>
        <ImageBackground source ={todayImage} style={style.ImageBackground}>      

        </ImageBackground>

        <View style ={ style.tasklist}>
        <Text > Task list</Text>

        </View>

        
        
        
    </SafeAreaView>
    

    )
    
}

const style =StyleSheet.create(
    {
    container:{
    flex:1
    },

    ImageBackground:{
        flex:3
    },

    tasklist:{
        flex:7
    },


})