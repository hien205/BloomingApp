import React, { useState } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();
  const [note, setNote] = useState("");
  const [selected, setSelected] = useState("10 min");

  const durations = ["5 min", "10 min", "15 min"];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* HEADER */}
        <ImageBackground
          source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9934de0-a235-4bd9-bcf2-cfe9ef251ef3",
          }}
          style={styles.header}
        >
          <TouchableOpacity style={styles.backBtn}>
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51f0c23b-b6f0-4322-b621-45b25cb3ae28",
              }}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <Text style={styles.title}>
            How long do you want to meditate?
          </Text>

          {/* DURATION */}
          <View style={styles.row}>
            {durations.map((item) => {
              const isActive = selected === item;

              return (
                <TouchableOpacity
                  key={item}
                  onPress={() => setSelected(item)}
                  style={[
                    styles.card,
                    isActive && styles.cardActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.cardText,
                      isActive && styles.cardTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ImageBackground>

        {/* INPUT */}
        <TextInput
          placeholder="Meditate quickly with a duration of your choice"
          placeholderTextColor="#999"
          value={note}
          onChangeText={setNote}
          style={styles.input}
        />

        {/* IMAGE */}
        <Image
          source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c4a0223-6f7e-416b-9135-ab9f3fa17221",
          }}
          style={styles.image}
        />

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.button}
           onPress={() => router.push("/levelcalm")}
        >
          <Text style={styles.buttonText}>Continue</Text>
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

  header: {
    paddingTop: 60,
    paddingBottom: 40,
  },

  backBtn: {
    marginLeft: 20,
    marginBottom: 20,
    backgroundColor: "#F7F3F2",
    padding: 8,
    borderRadius: 50,
    alignSelf: "flex-start",
  },

  backIcon: {
    width: 20,
    height: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4E3321",
    marginBottom: 40,
    paddingHorizontal: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 15,
  },

  card: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 25,
    paddingVertical: 35,
    marginHorizontal: 6,
    alignItems: "center",
    elevation: 4,
  },

  cardActive: {
    backgroundColor: "#7B5E4B",
  },

  cardText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6B4F5B",
  },

  cardTextActive: {
    color: "#FFF",
  },

  input: {
    margin: 15,
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 15,
    fontSize: 16,
    elevation: 2,
  },

  image: {
    height: 180,
    marginHorizontal: 15,
    marginBottom: 40,
    borderRadius: 20,
  },

  button: {
    backgroundColor: "#7B5E4B",
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 40,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});