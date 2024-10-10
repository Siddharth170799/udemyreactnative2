import StartGameScreen from "@/components/StartGameScreen";
import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "@/components/GameScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import GameOverScreen from "@/components/GameOverScreen";
function App() {

  const [userNumber,setUserNumber] = useState(null)

  const [gameIsOver,setGameIsOver] = useState(true)

  function pickedNumberHandler(pickedNumber:any){
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  let screen = <StartGameScreen onConfirmNumber = {pickedNumberHandler}/>;
  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen />
  }

  function gameOverHandler(){
    setGameIsOver(true)
  }
  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("@/assets/images/dice.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
    
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,

  },
  backgroundImage: {
    opacity: 0.15,
  },
});
export default App;
