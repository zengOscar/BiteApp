import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CommentBubble from "../../../assets/ReviewCard/CommentBubble.svg";
import Downvote from "../../../assets/ReviewCard/Downvote.svg";
import Upvote from "../../../assets/ReviewCard/Upvote.svg";
import FilledFavorite from "../../../assets/ReviewCard/FilledFavorite.svg";
import EmptyFavorite from "../../../assets/ReviewCard/EmptyFavorite.svg";

const InteractBar = () => {
  return (
    <View style={styles.interactBar}>
      <EmptyFavorite />
      <CommentBubble />
      <Upvote />
      <Downvote />
    </View>
  );
};

const styles = StyleSheet.create({
  interactBar: {
    padding: 5,
    marginTop: 10,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});

export default InteractBar;
