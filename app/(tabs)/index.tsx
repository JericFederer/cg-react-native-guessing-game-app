import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import StartGameScreen from '../../screens/StartGameScreen';

export default function App() {
  return (
    <View>
      <StartGameScreen />
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bba26c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
