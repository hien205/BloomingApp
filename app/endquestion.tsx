import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EndquestionScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* TITLE */}
        <Text style={styles.title}>Congrats!</Text>

        {/* SUBTITLE */}
        <Text style={styles.subtitle}>
          You’ve completed the first step towards recovery.
        </Text>

        {/* SCORE SHAPE */}
        <View style={styles.scoreWrapper}>
          {/* Pink */}
          <View style={styles.circlePink} />

          {/* Purple */}
          <View style={styles.circlePurple} />

          {/* Main Blue */}
          <View style={styles.circleMain}>
            <Text style={styles.scoreText}>20</Text>
          </View>
        </View>

        {/* TEXT */}
        <Text style={styles.desc}>
          Your responses indicate a mild risk of addiction, with possible early signs.
        </Text>

        <Text style={styles.desc}>
          Consider monitoring your substance use and seeking support if needed.
        </Text>

        <Text style={styles.note}>
          Early intervention can make a significant difference.
        </Text>

        {/* BUTTON */}
        <TouchableOpacity
          onPress={() => router.replace("/indexhome")}
          style={styles.button}
        >
          <Text style={styles.check}>✓</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3EFEC", // chuẩn figma
  },

  content: {
    paddingTop: 80,
    paddingHorizontal: 32,
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: 40,
  },

  scoreWrapper: {
    width: 160,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },

  circleMain: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#CFE2F3",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 3,
  },

  circlePink: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#F6C1CC",
    position: "absolute",
    bottom: 10,
    left: 10,
    zIndex: 1,
  },

  circlePurple: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#8C7BFF",
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 2,
  },

  scoreText: {
    fontSize: 36,
    fontWeight: "600",
    color: "#333",
  },

  desc: {
    fontSize: 14,
    textAlign: "center",
    color: "#444",
    marginBottom: 10,
    lineHeight: 20,
  },

  note: {
    fontSize: 13,
    textAlign: "center",
    color: "#888",
    marginBottom: 50,
  },

  button: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#E85C4A", // đỏ cam figma
    justifyContent: "center",
    alignItems: "center",
  },

  check: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
});