import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

// Rating should be passed out of 100 (e.g. 96 -> 9.6)
const CircularRating = ({ rating, size }) => {
  // converting rating from % out of 100% to a decimal to the tenth place out of 10
  const calcRating = (rating / 10.0).toFixed(1);
  const sizePercent = size / 100;
  const realSize = sizePercent * 200;
  const realWidth = sizePercent * 25;
  const realFontSize = sizePercent * 60;

  return (
    <View style={{ justifyContent: "center" }}>
      <Text style={[styles.points, { fontSize: realFontSize }]}>
        {calcRating}
      </Text>
      <View>
        <AnimatedCircularProgress
          size={realSize}
          width={realWidth}
          fill={rating}
          tintColor="#B60D02"
          tintColorSecondary="#02B629"
          arcSweepAngle={240}
          rotation={240}
          lineCap="round"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  points: {
    textAlign: "center",
    color: "#323232",
    fontWeight: "600",
    position: "absolute",
    width: "100%",
  },
});

export default CircularRating;
