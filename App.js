import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Location from "expo-location";

export default function App() {
  async function getUserLocationHandler() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = Location.getCurrentPositionAsync({});
    console.log(location);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Get User Location" onPress={getUserLocationHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
