import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saludar from './src/components/Saludar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola esta es Mi App!</Text>
      <Saludar />
      <Saludar firstname={'Damian'} lastname={'Contreras'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f29',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
