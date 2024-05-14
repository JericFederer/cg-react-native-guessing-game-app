import { useState } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';

import StartGameScreen from '../../screens/StartGameScreen';
import GameScreen from '../../screens/GameScreen';
import GameOverScreen from '../../screens/GameOverScreen';
import { Colors } from '@/constants/Colors';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  // * STATES
  const [enteredNumber, setEnteredNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  // * HANDLERS
  function enteredNumberHandler(number) {
    setEnteredNumber(number);
    setGameIsOver(false);
  }

  function gameOverHandler(roundNumber) {
    setGameIsOver(true);
    setGuessRounds(roundNumber);
  }

  function startNewGameHandler() {
    setEnteredNumber(null);
    setGuessRounds(0);
  }

  // * HELPERS
  let screen = <StartGameScreen onConfirmNumber={ enteredNumberHandler } />
  
  if (enteredNumber) {
    screen = <GameScreen
      userNumber={ enteredNumber }
      onGameOver={ gameOverHandler }
    />
  } //: IF

  if (gameIsOver && enteredNumber) {
    screen = <GameOverScreen
      roundsNumber={ guessRounds }
      userNumber={ enteredNumber }
      onStartNewGame={ startNewGameHandler }
    />
  } //: IF

  // * USEFONT HOOK
  const [fontsHaveLoaded] = useFonts({
    'open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
    'space-mono-regular': require('../../assets/fonts/SpaceMono-Regular.ttf')
  });

  if (!fontsHaveLoaded) {
    // Keep the splash screen visible while we fetch resources
    SplashScreen.preventAutoHideAsync();
  } else {
    SplashScreen.hideAsync();
  } //: IF

  return (
    <LinearGradient colors={ [Colors.gradientTop, Colors.gradientBottom] } style={ styles.rootScreen }>
      <ImageBackground
        source={ require("../../assets/images/dice.png") }
        resizeMode='cover'
        style={ styles.rootScreen }
        imageStyle={ styles.backgroundImage }
      >
        <SafeAreaView style={ styles.rootScreen }>
          { screen }
        </SafeAreaView>
        
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  }
});
