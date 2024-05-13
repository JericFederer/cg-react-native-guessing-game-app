import { Text, StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';

function Title({ children }) {
  return (
    <Text style={ styles.title }>{ children }</Text>
  )
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: Colors.appWhite,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.appWhite,
    padding: 12,
  }
})