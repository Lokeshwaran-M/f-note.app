import { Text, View, ImageBackground, StyleSheet, Image,Dimensions } from "react-native";
import React from "react";
import Card from "@/components/Card";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log(windowHeight)
let bottomOffset = 0
if (windowHeight<=900){
  bottomOffset= -35
}

let bgImgPath: any = require("../assets/app-bg/bg-1.png");



export default function App() {
  return (
    <View  style={styles.app} >
      <ImageBackground source={bgImgPath} style={styles.bgimg}>
      <Card id="n-1" text="hi" />
      <Card id="card-2" text="This is the second card" />
      <Card id="card-2" text="This is the second card" />
      <Card id="card-2" text="This is the second card" />
      <Card id="card-2" text="This is mova ble c-card" />  
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  bgimg: {
    // flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    bottom:bottomOffset,
    height:windowHeight,
    backgroundColor: "#000000"
    
  },
  app:{
    // flex: 1,
    justifyContent: "center",
    backgroundColor: "#000000"
  }
});
