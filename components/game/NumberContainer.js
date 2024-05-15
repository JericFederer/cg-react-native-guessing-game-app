import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { Colors } from '../../constants/Colors';

// * HELPERS
const deviceWidth = Dimensions.get('window').width;

function NumberContainer({ children }) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.numberText }>{ children }</Text>
    </View>
  )
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.appYellow,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.appYellow,
    fontSize: deviceWidth < 380 ? 24 : 36,
    fontWeight: 'bold',
  }
})