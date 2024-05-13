import {
  TextInput,
  View,
  StyleSheet,
  Alert
} from 'react-native';
import { useState } from 'react';

import PrimaryButton from '../components/ui/PrimaryButton';
import { Colors } from '@/constants/Colors';

function StartGameScreen({ onConfirmNumber }) {
  // * STATES
  const [inputNumber, setInputNumber] = useState('')

  // * HANDLERS
  function inputHandler(inputText) {
    setInputNumber(inputText)
  }

  function resetInputNumber() {
    setInputNumber('');
  }

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
  }

  return (
    <View style={ styles.inputContainer }>
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
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary,
    // Shadow styling
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.9,
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