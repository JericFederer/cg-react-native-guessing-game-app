import { View, StyleSheet, Dimensions } from 'react-native';

import { Colors } from '@/constants/Colors';

// * HELPERS
const deviceWidth = Dimensions.get('window');

function Card({ children }) {
  return (
    <View style={ styles.card }>
      { children }
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
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
});