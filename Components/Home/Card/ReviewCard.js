import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CardProfileButton from "./CardProfileButton";

const ReviewCard = ({
  rating, // passed in number from db
  size, // set from caller function
  reviewText, // passed in string from db
  avatarLink = "", // passed in url obtained from db
  name, // passed in string from db - if name length is too long then truncate last initial or change font size
  date, // passed in date from db
  profileTier,
}) => {
  return (
    <View style={[styles.mainCard, styles.shadowProp]}>
      <View style={styles.topSection}>
        <View style={[styles.profileSection, styles.shadowProp]}>
          <CardProfileButton
            rating={50}
            size={25}
            reviewText={"Worth a visit!"} // limit 26 char
            name={"Ronald Duck"}
            date={date}
            profileTier={1}
          />
        </View>
        <View>
          <Text>temp</Text>
        </View>
      </View>
      <View>
        <Text>
          Description Description Description Description Description
          Description Description Description Description Description
        </Text>
      </View>
      <View>
        <Text>Interaction</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileSection: {
    width: "45%",
    alignSelf: "flex-start",
    margin: 15,
  },
  mainCard: {
    width: "90%",
    height: "50%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  topSection: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});

export default ReviewCard;
