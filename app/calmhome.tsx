
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
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useCallback } from "react";

export default function CalmhomeScreen() {
  const router = useRouter();

  const [name, setName] = useState("User");
const [avatar, setAvatar] = useState("");

useFocusEffect(
  useCallback(() => {
    const loadData = async () => {
      const savedName = await AsyncStorage.getItem("username");
      const savedAvatar = await AsyncStorage.getItem("avatar");

      if (savedName) setName(savedName);
      if (savedAvatar) setAvatar(savedAvatar);
    };

    loadData();
  }, [])
);

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingBottom: 90 }}>

        <View style={styles.row}>

  {/* LEFT */}
  <TouchableOpacity onPress={() => router.back()}>
    <Image
      source={{
        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/phk9o67e_expires_30_days.png"
      }}
      style={styles.image}
      resizeMode="stretch"
    />
  </TouchableOpacity>

  {/* CENTER TEXT */}
  <View style={styles.headerCenter}>
    <Text style={styles.text}>
                       {"Hi " + name + " !!"}
                    </Text>
    <Text style={styles.text2}>
      Good Morning
    </Text>
  </View>

  {/* RIGHT */}
  <Image
     source={{ uri: avatar || "https://via.placeholder.com/40" }}
    style={styles.image}
    resizeMode="stretch"
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
              <TouchableOpacity onPress={() => router.replace("/indexhome")}>
                 <Text style={styles.tag}>Well-being</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.replace("/nourishment")}>
                 <Text style={styles.tag}>Nourishment</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.replace("/rest")}>
                 <Text style={styles.tag}>Rest</Text>
              </TouchableOpacity>
              
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
      <View style={{
  backgroundColor: "#FFFFFF",
  paddingVertical: 12,
  borderTopWidth: 1,
  borderTopColor: "#F0F0F0",
}}>
  <View style={{
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  }}>
    <TouchableOpacity onPress={() => router.push("/indexhome")} style={{ alignItems: "center" }}>
      <Image source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/0e1y69h4_expires_30_days.png"}}
        resizeMode="stretch" style={{ width: 24, height: 24, marginBottom: 4 }} />
      <Text style={{ color: "#F48BA1", fontSize: 10, fontWeight: "bold" }}>Health</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => router.push("/journaling")} style={{ alignItems: "center" }}>
      <Image source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/qglghqbr_expires_30_days.png"}}
        resizeMode="stretch" style={{ width: 24, height: 24, marginBottom: 4 }} />
      <Text style={{ color: "#9E9E9E", fontSize: 10 }}>Expression</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => router.push("/AISchedule")} style={{ alignItems: "center" }}>
      <Image source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/ndb4dzls_expires_30_days.png"}}
        resizeMode="stretch" style={{ width: 24, height: 24, marginBottom: 4 }} />
      <Text style={{ color: "#9E9E9E", fontSize: 10 }}>Appointments</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => router.push("/profile-user")} style={{ alignItems: "center" }}>
      <Image source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/45638hlp_expires_30_days.png"}}
        resizeMode="stretch" style={{ width: 24, height: 24, marginBottom: 4 }} />
      <Text style={{ color: "#9E9E9E", fontSize: 10 }}>Profile</Text>
    </TouchableOpacity>
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

  categoryBox: { marginHorizontal: 15,marginTop: 20 },

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
    marginTop: 20,
    color: "#4E3321",
  },

  section: { paddingHorizontal: 15, marginTop: 25 },

  bigTitle: { fontSize: 28, fontWeight: "bold" },

  oceanBg: {
    height: 200,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 15,
    marginTop: 25,
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
    marginTop: 30,
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 30,
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

  row: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginHorizontal: 16,
  marginTop: 10,
},

headerCenter: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
},

image: {
  width: 39,
  height: 39,
  borderRadius: 999,
},

text: {
  color: "#9E9E9E",
  fontSize: 10,
  fontWeight: "bold",
  marginBottom: 2,
  textAlign: "center",
},

text2: {
  color: "#424242",
  fontSize: 14,
  fontWeight: "bold",
  textAlign: "center",
},
button: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#F7F4F2",
		borderRadius: 128,
		paddingVertical: 6,
		marginRight: 12,
	},
button2: {
		backgroundColor: "#F48BA1",
		borderRadius: 128,
		paddingVertical: 6,
		paddingHorizontal: 16,
		marginRight: 12,
	},

});