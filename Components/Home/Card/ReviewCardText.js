import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ReviewCardText = ({
  name, // First and last name string
  cuisine, // String of cuisine
  lowPrice, // lower range for price
  highPrice, // upper range for price
  location, // String of neighborhood and state
  description, // Long string of review text
}) => {
  return (
    <View style={styles.textArea}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.quickInfo}>
        <Text style={styles.quickInfoText}>{cuisine}</Text>
        <Text style={styles.spacer}>•</Text>
        <Text style={styles.quickInfoText}>
          ${lowPrice} to ${highPrice} per person
        </Text>
        <Text style={styles.spacer}>•</Text>
        <Text style={styles.quickInfoText}>{location}</Text>
      </View>
      <Text numberOfLines={4} style={styles.description}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textArea: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  name: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
  },
  quickInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quickInfoText: {
    fontSize: 13,
  },
  description: { textAlign: "left", paddingTop: 5 },
  spacer: {
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default ReviewCardText;
