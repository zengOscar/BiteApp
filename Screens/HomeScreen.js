import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TopNavBar from "../Components/Home/TopNavBar";
import CircularRating from "../Components/Home/Card/CircularRating";

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.topSide}>
          <TopNavBar />
        </View>
        <View>
          <CircularRating rating={72} size={50} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topSide: {
    justifyContent: "flex-start",
    width: "100%",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    width: "110%",
    paddingBottom: 4,
    shadowColor: "black",
  },
});

export default HomeScreen;
