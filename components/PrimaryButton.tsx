import Colors from "@/constants/Colors";
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children,function1 }) => {
    console.log(children)
  function PressHandler() {
    console.log("pressed");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={({pressed})=> pressed ? [styles.buttoncontainer,styles.pressed]:styles.buttoncontainer} onPress={function1}>
        <View>
        <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttoncontainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed:{
    opacity:0.75,

  }
});
