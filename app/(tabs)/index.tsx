import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from '../../screens/StartGameScreen';
import GameScreen from '../../screens/GameScreen';
import { Colors } from '@/constants/Colors';

export default function App() {
  // * STATES
  const [enteredNumber, setEnteredNumber] = useState(null);

  // * HANDLERS
  function enteredNumberHandler(number) {
    setEnteredNumber(number);
  }

  // * HELPERS
  let screen = <StartGameScreen onConfirmNumber={ enteredNumberHandler } />
  
  if (enteredNumber) {
    screen = <GameScreen userNumber={ enteredNumber } />
  }

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
