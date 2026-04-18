import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {
      const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* IMAGE CIRCLE */}
        <View style={styles.imageWrapper}>
          <Image
            source={require("../assets/images/checkin.png")}
            style={styles.image}
          />
        </View>

        {/* TITLE */}
        <Text style={styles.title}>
          Join the path of self-restoration!
        </Text>

        {/* SUB TEXT */}
        <Text style={styles.subtitle}>
          Your well-being is our priority.
        </Text>

        {/* BUTTON */}
        <TouchableOpacity style={styles.button} onPress={() => router.push("/question1")}>
          <Text style={styles.buttonText}>Continue</Text>

          <Text style={styles.arrow}>→</Text>

        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff1fb",
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  imageWrapper: {
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },

  image: {
    width: 220,
    height: 220,
    borderRadius: 110,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7B5F4C",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    marginTop: 40,

    // shadow iOS
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,

    // shadow Android
    elevation: 3,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },

  arrow: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});