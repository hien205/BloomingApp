import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingBottom: 90 }}>

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.smallText}>Hi Saad Shaikh!!</Text>
            <Text style={styles.title}>Good Morning</Text>
          </View>

          <Image
            source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d03ead34-ea72-4551-9dbc-a4bc3f505913",
            }}
            style={styles.avatar}
          />
        </View>

        {/* CATEGORY */}
        <View style={styles.categoryBox}>
          <ImageBackground
            source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3a26497-af9f-466f-b8e6-9b265062117a",
            }}
            style={styles.categoryBg}
            imageStyle={{ borderRadius: 20 }}
          >
            <View style={styles.rowCategory}>
              <Text style={styles.tag}>Well-being</Text>
              <Text style={styles.tag}>Nourishment</Text>
              <Text style={styles.tag}>Rest</Text>
              <Text style={styles.tagActive}>Calm</Text>
            </View>
          </ImageBackground>

          <Text style={styles.desc}>
            Gentle meditation under the night sky, calming your thoughts and inviting tranquility.
          </Text>
        </View>

        {/* OCEAN */}
        <View style={styles.section}>
          <Text style={styles.bigTitle}>The ocean moon</Text>

          <ImageBackground
            source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05f1100d-c602-4a3c-9219-f4c5ea980eb8",
            }}
            style={styles.oceanBg}
            imageStyle={{ borderRadius: 20 }}
          >
            <TouchableOpacity
              style={styles.startBtn}
              onPress={() => router.push("/calmoption")} // 👈 CHUYỂN MÀN
            >
              <Text style={styles.startText}>START</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        {/* RECOMMENDED */}
        <Text style={styles.recommend}>Recommended for you</Text>

        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20af0bf6-fbe3-49d7-8eeb-24cc56cf9fd0",
              }}
              style={styles.cardImg}
            />
            <Text style={styles.cardTitle}>Happiness</Text>
            <Text style={styles.cardSub}>MEDITATION • 3-10 MIN</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3796e81-bf8b-4d30-9c83-0d146028aaca",
              }}
              style={styles.cardImg}
            />
            <Text style={styles.cardTitle}>Focus</Text>
            <Text style={styles.cardSub}>MEDITATION • 3-10 MIN</Text>
          </View>
        </View>

      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>

        <View style={styles.navItem}>
          <Image
            source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff2360e5-5549-4f97-b508-fce2ebc4e352" }}
            style={[styles.icon, { tintColor: "#F48BA1" }]}
          />
          <Text style={styles.navActive}>Health</Text>
        </View>

        <View style={styles.navItem}>
          <Image
            source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2cdb61e5-f361-431d-b9f9-6279c0d4d807" }}
            style={styles.icon}
          />
          <Text style={styles.navText}>Expression</Text>
        </View>

        <View style={styles.navItem}>
          <Image
            source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/156e4cd4-e571-4305-9ade-6147301bf08d" }}
            style={styles.icon}
          />
          <Text style={styles.navText}>Appointments</Text>
        </View>

        <View style={styles.navItem}>
          <Image
            source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e297ea8b-a200-43f4-a2c9-78037ba3f10c" }}
            style={styles.icon}
          />
          <Text style={styles.navText}>Profile</Text>
        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollView: { backgroundColor: "#F7F4F2" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },

  smallText: { fontSize: 12, color: "#999" },
  title: { fontSize: 16, fontWeight: "bold" },

  avatar: { width: 40, height: 40, borderRadius: 20 },

  categoryBox: { marginHorizontal: 15 },

  categoryBg: { padding: 15 },

  rowCategory: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  tag: {
    backgroundColor: "#F7F4F2",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 10,
  },

  tagActive: {
    backgroundColor: "#F48BA1",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 10,
    color: "#fff",
  },

  desc: {
    textAlign: "center",
    marginTop: 10,
    color: "#4E3321",
  },

  section: { paddingHorizontal: 15, marginTop: 20 },

  bigTitle: { fontSize: 28, fontWeight: "bold" },

  oceanBg: {
    height: 200,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 15,
  },

  startBtn: {
    backgroundColor: "#7B5E4B",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },

  startText: { color: "#fff", fontWeight: "bold" },

  recommend: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 15,
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 10,
  },

  card: {
    width: "48%",
    alignItems: "center",
  },

  cardImg: {
    width: "100%",
    height: 140,
    borderRadius: 12,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },

  cardSub: {
    fontSize: 10,
    color: "#999",
    marginTop: 4,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#eee",
  },

  navItem: { alignItems: "center", flex: 1 },

  icon: { width: 22, height: 22, marginBottom: 4 },

  navText: { fontSize: 10, color: "#7B5F4C" },

  navActive: { fontSize: 10, color: "#F48BA1", fontWeight: "bold" },
});