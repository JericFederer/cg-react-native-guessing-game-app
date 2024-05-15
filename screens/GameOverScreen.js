import {
  View,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import Title from '@/components/ui/Title';
import { Colors } from '@/constants/Colors';
import PrimaryButton from '@/components/ui/PrimaryButton';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  // * HELPERS
  const { width, height } = useWindowDimensions();
  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 100;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  }

  return (
    <ScrollView style={ styles.screen }>
      <View style={ styles.rootContainer }>
        <Title>GAME OVER!</Title>

        <View style={ [styles.imageContainer, imageStyle] }>
          <Image style={ styles.image } source={ require('../assets/images/success.png') }/>
        </View>

        <Text style={ styles.summaryText }>
          Your phone needed <Text style={ styles.highlight }>{ roundsNumber }</Text> rounds
          to guess the number <Text style={ styles.highlight }>{ userNumber }</Text>.
        </Text>

        <PrimaryButton onPress={ onStartNewGame }>Restart game</PrimaryButton>
      </View>
    </ScrollView>
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
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
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
  },
  screen: {
    flex: 1,
  }
});