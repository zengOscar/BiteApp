import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CircularRating from "./CircularRating";
import { Avatar, Center } from "native-base";

import DiamondRating from "../../../assets/Profile/DiamondRating.svg";
import GoldRating from "../../../assets/Profile/GoldRating.svg";
import SilverRating from "../../../assets/Profile/SilverRating.svg";
import BronzeRating from "../../../assets/Profile/BronzeRating.svg";

const CardProfileButton = ({
  rating, // passed in number from db
  size, // set from caller function
  reviewText, // passed in string from db
  avatarLink = "", // passed in url obtained from db
  name, // passed in string from db - if name length is too long then truncate last initial or change font size
  date, // passed in date from db
  profileTier,
}) => {
  const sizePercent = size / 100;
  const realFontSize = sizePercent * 60;

  const fallback =
    name && name !== ""
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
      : "--";

  const profileTierIcon = (profileTier) => {
    switch (profileTier) {
      case 1:
        return <DiamondRating />;
      case 2:
        return <GoldRating />;
      case 3:
        return <SilverRating />;
      case 4:
        return <BronzeRating />;
      default:
        return <BronzeRating />;
    }
  };

  return (
    <View style={[styles.mainCard, styles.shadowProp]}>
      <View style={styles.nameSection}>
        <View style={styles.nameDate}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.whitespace}></View>
        <View style={styles.profileTierIcon}>
          {profileTierIcon(profileTier)}
        </View>
      </View>

      <View style={[styles.avatarContainer, styles.shadowProp]}>
        <Avatar
          bg="green.500" // can try to figure out how to randomize these colors too
          size="md"
          source={
            avatarLink ? { uri: avatarLink } : { uri: "https:broken-link" }
          }
          fallbackSource={require("../../../assets/Profile/DefaultProfile.png")}
        >
          {fallback}
        </Avatar>
      </View>
      <View style={styles.ratingBox}>
        <CircularRating rating={rating} size={size} />
        <View style={styles.reviewTextBox}>
          <Text style={{ fontSize: realFontSize }}>{reviewText}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 2,
  },
  reviewTextBox: {
    justifyContent: "center",
    paddingLeft: 10,
    maxWidth: "50%",
  },
  mainCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  avatarContainer: {
    alignItems: "center",
    padding: 5,
  },
  nameDate: {
    padding: 5,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileTierIcon: {
    paddingLeft: 10,
  },
  whitespace: {
    width: 5,
  },
});

export default CardProfileButton;
