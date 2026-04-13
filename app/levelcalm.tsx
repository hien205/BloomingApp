import React, { useState } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState("Beginner");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        {/* BACKGROUND */}
        <ImageBackground
          source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e6f30f0-3d3d-43e0-85e4-229a75191f5f",
          }}
          resizeMode="stretch"
          style={styles.column}
        >

          {/* BACK BUTTON */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.back()}
          >
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/259c55da-dfb9-4a46-bc23-ff0a9630d9c3",
              }}
              style={styles.image}
            />
          </TouchableOpacity>

          {/* TITLE */}
          <View style={styles.view}>
            <Text style={styles.text}>
              Have you ever meditated?
            </Text>
          </View>
        </ImageBackground>

        {/* OPTION 1 */}
        <TouchableOpacity
          style={[
            styles.optionBox,
            selected === "Beginner" && styles.optionActive,
          ]}
          onPress={() => setSelected("Beginner")}
        >
          <Text style={styles.optionTitle}>Beginner</Text>
          <Text style={styles.optionDescription}>
            I don't know how to meditate yet.
          </Text>
        </TouchableOpacity>

        {/* OPTION 2 */}
        <TouchableOpacity
          style={[
            styles.optionBox,
            selected === "Experienced" && styles.optionActive,
          ]}
          onPress={() => setSelected("Experienced")}
        >
          <Text style={styles.optionTitle}>Experienced</Text>
          <Text style={styles.optionDescription}>
            I already know how to meditate.
          </Text>
        </TouchableOpacity>

        {/* CONTINUE */}
        <TouchableOpacity
          style={styles.button2}
          onPress={() => router.push("/levelcalm")}
        >
          <Text style={styles.text6}>Continue</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollView: {
    flex: 1,
    paddingBottom: 36,
  },

  column: {
    paddingTop: 55,
    marginBottom: 30,
  },

  button: {
    alignSelf: "flex-start",
    backgroundColor: "#F7F3F2",
    borderRadius: 50,
    padding: 8,
    marginLeft: 17,
    marginBottom: 10,
  },

  image: {
    width: 24,
    height: 24,
  },

  view: {
    alignItems: "center",
    marginBottom: 80,
  },

  text: {
    color: "#4E3321",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  optionBox: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 22,
    paddingHorizontal: 20,
    marginBottom: 18,
    alignSelf: "center",

    borderWidth: 1,
    borderColor: "#E5D7D0",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },

  optionActive: {
    backgroundColor: "#7B5E4B",
  },

  optionTitle: {
    color: "#4E3321",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 6,
    textAlign: "center",
  },

  optionDescription: {
    color: "#6B6B6B",
    fontSize: 16,
    textAlign: "center",
  },

  button2: {
    alignItems: "center",
    backgroundColor: "#7B5E4B",
    borderRadius: 38,
    paddingVertical: 18,
    marginHorizontal: 20,
    marginTop: 40,
  },

  text6: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});