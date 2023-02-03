import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// This component uses a state hook to keep track of which feed is currently selected (either "local" or "discover"). 
// It uses two TouchableOpacity components, one for each feed option, which allows the user to toggle between the two 
// options by tapping on them. The onPress prop is used to set the selected feed using the setSelected function. The
// style prop is used to style the text and to indicate the currently selected feed.

function TopNavBar() {
  const [selected, setSelected] = useState('local');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.navOption, selected === 'local' ? styles.selected : styles.notSelected]}
        onPress={() => setSelected('local')}
      >
        <Text style={styles.navOptionText}>Local</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navOption, selected === 'discover' ? styles.selected : styles.notSelected]}
        onPress={() => setSelected('discover')}
      >
        <Text style={styles.navOptionText}>Discover</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  navOption: {
    padding: 10,
  },
  navOptionText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selected: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  notSelected: {
    opacity: 0.5,
  },
});

export default TopNavBar;
