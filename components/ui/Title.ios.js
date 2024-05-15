import { Text, StyleSheet, Platform } from 'react-native';

import { Colors } from '@/constants/Colors';

function Title({ children }) {
  return (
    <Text style={ styles.title }>{ children }</Text>
  )
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'space-mono-regular',
    fontSize: 32,
    color: Colors.appWhite,
    textAlign: 'center',
    borderWidth: 0,
    borderColor: Colors.appWhite,
    padding: 12,
    maxWidth: '80%',
    width: 300,
  }
})