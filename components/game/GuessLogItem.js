import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={ styles.listItem }>
      <Text style={ styles.itemText }>#{ roundNumber }</Text>
      <Text style={ styles.itemText }>Opponent's Guess: { guess }</Text>
    </View>
  )
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    marginVertical: 8,
    backgroundColor: Colors.appYellow,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
  itemText: {
    fontFamily: 'space-mono-regular',
  }
});