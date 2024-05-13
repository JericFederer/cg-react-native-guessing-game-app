import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '@/components/ui/PrimaryButton';

// * HELPERS
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber }) {
  // * STATES
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  // * HELPERS
  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  } //: generateRandomBetween
  
  function nextGuessHandler(direction) {
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);

    setCurrentGuess(newRandomNumber);
  } //: nextGuessHandler

  

  return (
    <View style={ styles.mainGameScreen }>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{ currentGuess }</NumberContainer>

      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={ nextGuessHandler.bind(this, 'lower') }>
            -
          </PrimaryButton>
          <PrimaryButton onPress={ nextGuessHandler.bind(this, 'greater') }>
            +
          </PrimaryButton>
        </View>
        
      </View>

      <View>
        <Text>ROUNDS</Text>
      </View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
  mainGameScreen: {
    flex: 1,
    padding: 24,
  },
})