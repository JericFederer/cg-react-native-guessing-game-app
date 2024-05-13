import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native';

import { Colors } from '@/constants/Colors';

function PrimaryButton({ children, onPress }) {
  return (
    <View style={ styles.buttonOuterContainer }>
      <Pressable
        onPress={ onPress }
        android_ripple={ {color: Colors.ripple} }
        style={ ({ pressed }) => 
          pressed
          ? [ styles.buttonInnerContainer, styles.pressedForIOS ]
          : styles.buttonInnerContainer
        }
      >
        <Text style={ styles.buttonText } >{ children }</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.secondary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressedForIOS: {
    opacity: 0.75,
  }
})