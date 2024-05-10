import { View, Text } from 'react-native';

function GameScreen({children}) {
  return (
    <View>
      <Text>{ children }</Text>
    </View>
  )
}

export default GameScreen;