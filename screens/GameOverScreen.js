import { View, Text } from 'react-native';

function GameOverScreen({ children }) {
  return (
    <View>
      <Text>{ children }</Text>
    </View>
  )
}

export default GameOverScreen;