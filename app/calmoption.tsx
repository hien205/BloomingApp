import React from "react";
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function CalmoptionScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <View style={styles.view} />

        {/* DAILY CALM */}
        <ImageBackground
          source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2229e0dc-b375-446c-a4d8-3671e281abb6" }}
          style={styles.row}
        >
          <View>
            <Text style={styles.title}>Daily Calm</Text>
            <View style={styles.row2}>
              <Text style={styles.small}>APR 30</Text>
              <Image
                source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89ff39ef-b295-4b9a-83e5-df04c186cc8b" }}
                style={styles.dot}
              />
              <Text style={styles.small}>PAUSE PRACTICE</Text>
            </View>
          </View>

          <Image
            source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4e6b9a5-4ec4-4c14-828c-79a288f32385" }}
            style={styles.icon}
          />
        </ImageBackground>

        {/* ROW 3 IMAGES */}
        <View style={styles.row3}>
          <Image source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35ecb0ae-7457-4bd7-9a7a-cd572145001b" }} style={styles.bigImg} />
          <Image source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7de3a0e1-9faa-465f-ac44-ccd966c1b5ab" }} style={styles.bigImg} />
        </View>

        {/* ROW 4 (2 CARD + CENTER TEXT) */}
        <View style={styles.row4}>

          {/* Night Island */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/calmtime")}
          >
            <Text style={styles.cardTitle}>Night Island</Text>
            <View style={styles.row2}>
              <Text style={styles.small2}>45 MIN</Text>
              <Image source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb164eca-d9e5-44b4-b367-9b2cecf118a5" }} style={styles.dot} />
              <Text style={styles.small2}>SLEEP MUSIC</Text>
            </View>
          </TouchableOpacity>

          {/* Breathing Mode */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Breathing Mode</Text>
            <View style={styles.row2}>
              <Text style={styles.small2}>45 MIN</Text>
              <Image source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c0032a5-f1dc-4741-96fa-31579d764e42" }} style={styles.dot} />
              <Text style={styles.small2}>SLEEP MUSIC</Text>
            </View>
          </View>

        </View>

        {/* ROW 5 (2 IMAGES - FIXED NOT MISSING) */}
        <View style={styles.row5}>
          <Image
            source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8548fbe-81fd-4906-9117-a13e7fbb724b" }}
            style={styles.imgHalf}
          />
          <Image
            source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9348dbc9-732f-4d70-8cae-8b5212c72635" }}
            style={styles.imgHalf}
          />
        </View>

        {/* ROW 6 (CENTER TEXT FIX) */}
        <View style={styles.row6}>

          <View style={styles.centerCard}>
            <Text style={styles.cardTitle}>Good Night</Text>
            <View style={styles.row2}>
              <Text style={styles.small2}>45 MIN</Text>
              <Image source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b586a4ae-7826-45ff-bddb-62ad768fc20c" }} style={styles.dot} />
              <Text style={styles.small2}>SLEEP MUSIC</Text>
            </View>
          </View>

          <View style={styles.centerCard}>
            <Text style={styles.cardTitle}>Moon Clouds</Text>
            <View style={styles.row2}>
              <Text style={styles.small2}>45 MIN</Text>
              <Image source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50c16ebe-9add-4400-a917-bdd0c546bc7c" }} style={styles.dot} />
              <Text style={styles.small2}>SLEEP MUSIC</Text>
            </View>
          </View>

        </View>

        {/* DAILY THOUGHT */}
        <ImageBackground
          source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c56e84c2-eb6e-4d99-9390-361bb7bdc5f8" }}
          style={styles.row7}
        >
          <View>
            <Text style={styles.titleBig}>Daily Thought</Text>
            <View style={styles.row2}>
              <Text style={styles.small}>MEDITATION</Text>
              <Image style={styles.dot} source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed0779cc-10d5-4fc3-8701-e6206f1a473c" }} />
              <Text style={styles.small}>3-10 MIN</Text>
            </View>
          </View>

          <Image
            source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4e6b9a5-4ec4-4c14-828c-79a288f32385" }}
            style={styles.icon}
          />
        </ImageBackground>

        {/* ROW 8 - 2 IMAGES FIXED */}
        <View style={styles.row8}>
          <Image source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/150bdd68-4e96-4bb9-bb3c-423932afd1b1" }} style={styles.bigImg} />
          <Image source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7692d29c-91a7-4558-9db5-117c383f55e3" }} style={styles.bigImg} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollView: { flex: 1, backgroundColor: "#F7F4F2" },

  view: { paddingTop: 20 },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
    margin: 10,
  },

  row2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  row3: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },

  row4: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },

  row5: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },

  row6: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },

  row7: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
    margin: 10,
  },

  row8: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },

  card: {
    flex: 1,
    alignItems: "center",
  },

  centerCard: {
    flex: 1,
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 18,
    textAlign: "center",
  },

  title: { fontSize: 18, fontWeight: "bold" },
  titleBig: { fontSize: 25, fontWeight: "bold" },

  small: { fontSize: 11 },
  small2: { fontSize: 11 },

  dot: { width: 4, height: 4, marginHorizontal: 5 },

  icon: { width: 40, height: 40 },

  bigImg: {
    width: "48%",
    height: 120,
    borderRadius: 10,
  },

  imgHalf: {
    width: "48%",
    height: 120,
    borderRadius: 10,
  },
});