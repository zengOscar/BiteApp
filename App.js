import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopNavBar from './TopNavBar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topSide}>
        <TopNavBar />
      </View>
      
      <Text>Open up App.js to start working on your app!</Text>


      
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
  topSide: {
    alignSelf: 'flex-start'
  }
});
