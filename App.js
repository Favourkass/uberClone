import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { colors, parameters } from "./src/global/styles";
import HomeScreen from "./src/screens/HomeScreen";

const SCREEN_WIDTH = Dimensions.get("window").width;

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
  
});
