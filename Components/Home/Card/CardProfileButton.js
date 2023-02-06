import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CircularRating from "./CircularRating";
import { Avatar, Center } from "native-base";

const CardProfileButton = ({
  rating,
  size,
  reviewText,
  fallback = "--", // limit to 2 characters
  avatarLink = "",
  name,
  date,
}) => {
  const sizePercent = size / 100;
  const realFontSize = sizePercent * 60;

  return (
    <View style={[styles.mainCard, styles.shadowProp]}>
      <View style={styles.nameSection}>
        <View style={styles.nameDate}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>

        <View>{/* for the rating related icon */}</View>
      </View>

      <View style={[styles.avatarContainer, styles.shadowProp]}>
        <Avatar
          bg="green.500" // can try to figure out how to randomize these colors too
          size="md"
          source={
            avatarLink ? { uri: avatarLink } : { uri: "https:broken-link" }
          }
        >
          {fallback}
        </Avatar>
      </View>
      <View style={styles.ratingBox}>
        <CircularRating rating={rating} size={size} />
        <View style={styles.reviewTextBox}>
          <Text style={{ fontSize: realFontSize, flexShrink: 1 }}>
            {reviewText}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingBox: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginBottom: 2,
  },
  reviewTextBox: {
    justifyContent: "center",
  },
  mainCard: {
    width: "40%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  avatarContainer: {
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  nameDate: {
    padding: 12,
    textAlign: "left",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  date: {
    fontSize: 12,
    fontWeight: "400",
  },
  nameSection: {
    justifyContent: "space-between",
  },
});

export default CardProfileButton;
