import { Text, View, StyleSheet, Alert } from "react-native";
import React from "react";
import Title from "./Title";
import { useState, useEffect } from "react";
import NumberContainer from "./NumberContainer";
import PrimaryButton from "./PrimaryButton";
import Card from "./Card";
import InstructionText from "./InstructionText";
import {Ionicons} from "@expo/vector-icons"
import { useFonts } from "expo-font";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;


function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie", "You Know what is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(1, 100, userNumber);
    setCurrentGuess(newRndNumber);
    console.log("button clicked");
  }
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionsText}>
          Higher or Lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton function1={nextGuessHandler.bind(this, "lower")}>
           <Ionicons name="md-remove" size={24} color="white"/>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton function1={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="md-add" size={24} color="white"/>
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionsText: {
    marginBottom: 12,
  },
});
