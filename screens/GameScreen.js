import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Card from '@/components/ui/Card';
import InstructionText from '@/components/ui/InstructionText';
import { Colors } from '@/constants/Colors';
import GuessLogItem from '../components/game/GuessLogItem';

// * HELPERS
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
} //: generateRandomBetween

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  // * STATES
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  // * HELPERS
  const guessRoundsListLength = guessRounds.length;
  const { width, height } = useWindowDimensions();
  
  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Don't lie!",
        "You know that this is wrong...",
        [{ text: "Sorry!", style: "cancel" }]
      )
      return
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);

    setCurrentGuess(newRandomNumber);

    // * Add the random guess number to guessRounds every guess
    setGuessRounds((prevGuessRounds) => [
      newRandomNumber, ...prevGuessRounds
    ]);
    
  } //: nextGuessHandler

  // * USEEFFECT HOOK
  // * Will be called the first time the GameScreen component renders and whenever a dependency has been updated.
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  let content = (
    <>
      <NumberContainer>{ currentGuess }</NumberContainer>
      <Card>
        <InstructionText style={ styles.instructionText }>
          { 'Lower or Higher?' }
        </InstructionText>

        <View style={ styles.buttonsContainer }>
          <View style={ styles.buttonContainer }>
            <PrimaryButton onPress={ nextGuessHandler.bind(this, 'lower') }>
              <Ionicons name="remove" size={24} color={ Colors.white } />
            </PrimaryButton>
          </View>

          <View style={ styles.buttonContainer }>
            <PrimaryButton onPress={ nextGuessHandler.bind(this, 'greater') }>
              <Ionicons name="add-outline" size={24} color={ Colors.appWhite } />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={ styles.buttonsContainerWide }>
          <View style={ styles.buttonContainer }>
            <PrimaryButton onPress={ nextGuessHandler.bind(this, 'lower') }>
              <Ionicons name="remove" size={24} color={ Colors.white } />
            </PrimaryButton>
          </View>

          <NumberContainer>{ currentGuess }</NumberContainer>

          <View style={ styles.buttonContainer }>
            <PrimaryButton onPress={ nextGuessHandler.bind(this, 'greater') }>
              <Ionicons name="add-outline" size={24} color={ Colors.appWhite } />
            </PrimaryButton>
          </View>
        </View>
      </>
    )
  }

  return (
    <ScrollView style={ styles.screen }>
      <View style={ styles.mainGameScreen }>
        <Title>Opponent's Guess</Title>

        { content }

        <View style={ styles.guessRoundList }>
          <FlatList
            data={ guessRounds }
            renderItem={(itemData) => {
              return <GuessLogItem roundNumber={ guessRoundsListLength - itemData.index } guess={ itemData.item } />
            }}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  mainGameScreen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  instructionText: {
    marginBottom: 15,
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    marginTop: '6%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
  },
  guessRoundList: {
    flex: 1,
    padding: 16,
  },
  screen: {
    flex: 1,
  }
})