import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Alert, Text } from "react-native";
import PrimaryButton from "./PrimaryButton";
import Colors from "@/constants/Colors";
import Title from "./Title";
import Card from "./Card";
import InstructionText from "./InstructionText";
const StartGameScreen = ({ onConfirmNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText: any) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onConfirmNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
    <Card>
        <InstructionText >Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View>
            <PrimaryButton function1={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View>
            <PrimaryButton function1={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
        </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({

  instructionsText: {
    color: Colors.accent500,
    fontSize: 24,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
});
