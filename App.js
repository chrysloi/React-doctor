import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import OnBoardScreen from './src/screens/onboard';

export default function App() {
  return <SafeAreaProvider>
    <OnBoardScreen />
  </SafeAreaProvider>;
}
 
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
