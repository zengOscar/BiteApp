import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopNavBar from './Navigation/TopNavBar';
import NavBar from './Navigation/NavBar';

export default function App() {
  return (
    <View style={styles.container}>
      <TopNavBar />

      <Text>Open up App.js to start working on your app!</Text>
      {/* <StatusBar style="auto" /> */}

      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});