import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';

import Title from '@/components/ui/Title';
import { Colors } from '@/constants/Colors';
import PrimaryButton from '@/components/ui/PrimaryButton';

// * HELPERS
const deviceWidth = Dimensions.get('window');

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={ styles.rootContainer }>
      <Title>GAME OVER!</Title>

      <View style={ styles.imageContainer }>
        <Image style={ styles.image } source={ require('../assets/images/success.png') }/>
      </View>

      <Text style={ styles.summaryText }>
        Your phone needed <Text style={ styles.highlight }>{ roundsNumber }</Text> rounds
        to guess the number <Text style={ styles.highlight }>{ userNumber }</Text>.
      </Text>

      <PrimaryButton onPress={ onStartNewGame }>Restart game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.appWhite,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'space-mono-regular',
    fontSize: 24,
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 30,
  },
  highlight: {
    fontFamily: 'space-mono-regular',
    color: Colors.appYellow,
  }
});