import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CardProfileButton from "./CardProfileButton";
import InteractBar from "./InteractBar";
import ReviewCardText from "./ReviewCardText";

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
            rating={rating}
            size={size}
            reviewText={reviewText} // limit 26 char
            name={name}
            date={date}
            profileTier={profileTier}
          />
        </View>
        <View>
          <Text>Image stack goes here</Text>
        </View>
      </View>
      <View style={styles.reviewSection}>
        <ReviewCardText
          name={"Roku Aburiya"}
          cuisine={"Japanese"}
          lowPrice={40}
          highPrice={70}
          location={"West loop, Chicago"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum facilisis varius. Nulla nisl justo, congue eget ante et, posuere malesuada felis. Quisque ultricies ac ante vel luctus. Duis eget velit nec purus pulvinar malesuada. Cras semper ex quis magna pellentesque, sed fermentum arcu sagittis. Nam laoreet iaculis egestas. Aliquam ut eros vel est fringilla pharetra. Donec at gravida ex. Suspendisse volutpat suscipit interdum. Nunc vel finibus arcu. Phasellus tincidunt congue metus, ac ornare odio fermentum tempor. Sed tincidunt gravida mauris, sit amet ultrices ante maximus eu. Cras ac ex congue, rutrum massa a, euismod nisl. Curabitur eu lectus ac risus commodo pharetra. Etiam laoreet nisi sed rutrum convallis. Suspendisse tempor purus vitae massa suscipit iaculis. Donec ullamcorper venenatis sem, vel ultricies ipsum vehicula ut. Duis convallis pharetra porta. Nunc ultricies lacinia tellus at ultricies. Integer semper vitae leo ac tincidunt. Mauris venenatis, felis sed mollis rutrum, enim turpis ullamcorper sem, eget ornare felis odio in ligula. Vivamus scelerisque risus in quam vehicula, id pellentesque nunc congue. Pellentesque sed diam nunc."
          }
        />
      </View>
      <View style={styles.interactBar}>
        <InteractBar />
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
  reviewSection: {
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "column",
  },
  mainCard: {
    width: "90%",
    height: "42%",
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
  interactBar: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ReviewCard;
