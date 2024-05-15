import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
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

  // * HELPERS
  // * 'useWindowDimensions' hook is used when you need to adjust styling dynamically
  let { width, height } = useWindowDimensions();
  const marginTopDistance = height < 380 ? 30 : 100;

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
    // * Wrap the whole user interface with 'Scrollview' for the whole screen to become scrollable.
    <ScrollView style={ styles.screen }>
      <KeyboardAvoidingView style={ styles.screen } behavior='position'>
        <View style={ [styles.rootContainer, {marginTop: marginTopDistance}] }>
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
      </KeyboardAvoidingView>
    </ScrollView>
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
  },
  screen: {
    flex: 1,
  }
})