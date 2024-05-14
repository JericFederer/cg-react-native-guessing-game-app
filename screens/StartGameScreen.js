import {
  TextInput,
  View,
  StyleSheet,
  Alert
} from 'react-native';
import { useState } from 'react';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { Colors } from '@/constants/Colors';

function StartGameScreen({ onConfirmNumber }) {
  // * STATES
  const [inputNumber, setInputNumber] = useState('')

  // * HANDLERS
  function inputHandler(inputText) {
    setInputNumber(inputText)
  } //: inputHandler

  function resetInputNumber() {
    setInputNumber('');
  } //: resetInputNumber

  function confirmInputHandler() {
    let enteredNumber = parseInt(inputNumber);

    if (
      isNaN(enteredNumber)
      || enteredNumber <= 0
      || enteredNumber > 99
    ) {
      Alert.alert(
        'Invalid number!',
        'Number must be between 1 and 99',
        [{ 'text': 'OK', style: 'destructive', onPress: resetInputNumber }]
      )
      return;
    }

    onConfirmNumber(enteredNumber);
  } //: confirmInputHandler

  return (
    <View style={ styles.rootContainer }>
      <Title>{ 'Guess My Number' }</Title>

      <Card>
        <InstructionText>
          { 'Enter a number between 1 and 99' }
        </InstructionText>

        <TextInput
          style={ styles.numberInput }
          maxLength={ 2 }
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={ false }
          value={ inputNumber }
          onChangeText={ inputHandler }
        />

        <View style={ styles.buttonsContainer }>
          <View style={ styles.buttonContainer }>
            <PrimaryButton onPress={ resetInputNumber }>Reset</PrimaryButton>
          </View>
          <View style={ styles.buttonContainer }>  
            <PrimaryButton onPress={ confirmInputHandler }>Confirm</PrimaryButton>
          </View>
        </View> 
      </Card>

    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.appYellow,
    borderBottomWidth: 2,
    color: Colors.appYellow,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
  }
})