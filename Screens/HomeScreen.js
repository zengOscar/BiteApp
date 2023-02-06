import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TopNavBar from "../Components/Home/TopNavBar";
import CardProfileButton from "../Components/Home/Card/CardProfileButton";
import { format } from "date-fns";

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.topSide}>
          <TopNavBar />
        </View>
        <CardProfileButton
          rating={55}
          size={25}
          reviewText={"test"}
          name={"Ronald Duck"}
          date={format(new Date(2024, 11, 24), "PP")}
        />
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
