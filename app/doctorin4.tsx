import { useRouter } from "expo-router";

import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useCallback } from "react";
const doctors = [
  {
    name: "Dr. Alexander Bennett",
    specialty: "Dermato-Genetics",
    gender: "male",
    favorite: true,
    image:
      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fd848a5-20f1-4010-b452-628dfe04498b",
    experience: "15 years",
    focus: "Hormonal imbalance, acne, hirsutism, and genetic skin disorders.",

    rating: 5,
    patients: 71,
    schedule: "Mon-Sat / 9:00AM - 5:00PM",
  },
  {
    name: "Dr. Michael Davidson",
    specialty: "Solar Dermatology",
    gender: "male",
    favorite: false,
    image:
      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ad87c28-95dc-4415-9ecd-84fc8776b655",
    experience: "10 years",
    focus:
      "Skin damage from sunlight, UV protection, and pigmentation treatment.",

    rating: 5,
    patients: 56,
    schedule: "Mon-Sat / 8:30AM - 5:00PM",
  },
  {
    name: "Dr. Olivia Turner",
    specialty: "Dermato-Endocrinology",
    gender: "female",
    favorite: true,
    image:
      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77c9c3d9-1e2a-4855-b168-a5e9b3cee5cb",
    experience: "8 years",
    focus: "Hormone-related skin issues, acne, and thyroid-related conditions.",

    rating: 4.5,
    patients: 40,
    schedule: "Mon-Sat / 9:00AM - 5:00PM",
  },
  {
    name: "Dr. Sophia Martinez",
    specialty: "Cosmetic Bioengineering",
    gender: "female",
    favorite: false,
    image:
      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ffa97800-3b5f-4afa-ae15-daa4d8e5d6b3",
    experience: "12 years",
    focus: "Advanced cosmetic treatments, anti-aging, and skin rejuvenation.",

    rating: 4,
    patients: 25,
    schedule: "Mon-Fri / 8:00AM - 4:00PM",
  },
];

export default function Doctorin4Screen() {
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




  const [sortType, setSortType] = useState("az");
  const filteredDoctors = doctors
    .filter((doc) => {
      if (sortType === "male") return doc.gender === "male";
      if (sortType === "female") return doc.gender === "female";
      if (sortType === "heart") return doc.favorite;
      return true;
    })
    .sort((a, b) => {
      if (sortType === "az") return a.name.localeCompare(b.name);
      return 0;
    });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          {/* LEFT */}
          <TouchableOpacity onPress={() => router.back()}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/phk9o67e_expires_30_days.png",
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
            <Text style={styles.text2}>Good Morning</Text>
          </View>

          {/* RIGHT */}
          <Image
            source={{ uri: avatar || "https://via.placeholder.com/40" }}
            style={styles.image}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.row2}>
          <TouchableOpacity
            style={styles.view}
            onPress={() => router.push("/AISchedule")}
          >
            <Text style={styles.text3}>{"AI Scheduling"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert("Pressed!")}
          >
            <Text style={styles.text4}>{"Doctor’s Information"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row3}>
          <Text style={styles.text5}>{"Sort by"}</Text>

          {/* A-Z */}
          <TouchableOpacity
            style={[
              styles.view2,
              sortType === "az" && { backgroundColor: "#225FFF" },
            ]}
            onPress={() => setSortType("az")}
          >
            <Text style={{ color: sortType === "az" ? "#fff" : "#225FFF" }}>
              {"a→z"}
            </Text>
          </TouchableOpacity>

          {/* Star */}
          <TouchableOpacity
            style={[
              styles.view3,
              sortType === "star" && { backgroundColor: "#225FFF" },
            ]}
            onPress={() => setSortType("star")}
          >
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad4ef7c5-68b9-4052-b6c2-2684f5b8f3d9",
              }}
              style={styles.image2}
            />
          </TouchableOpacity>

          {/* Heart */}

          {/* Heart */}
          <TouchableOpacity
            style={[
              styles.view4,
              sortType === "heart" && { backgroundColor: "#225FFF" },
            ]}
            onPress={() => router.push("/favorite")}
          >
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4398f3a-f90b-449d-95eb-bb31b95082e6",
              }}
              style={styles.image2}
            />
          </TouchableOpacity>

          {/* Female */}
          <TouchableOpacity
            style={[
              styles.view5,
              sortType === "female" && { backgroundColor: "#225FFF" },
            ]}
            onPress={() => setSortType("female")}
          >
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf55bfc5-a582-45d7-9e44-63d3c2285c46",
              }}
              style={styles.image3}
            />
          </TouchableOpacity>

          {/* Male */}
          <TouchableOpacity
            style={[
              styles.view6,
              sortType === "male" && { backgroundColor: "#225FFF" },
            ]}
            onPress={() => setSortType("male")}
          >
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d3530e7-d343-43e8-b5d1-e4419941897c",
              }}
              style={styles.image4}
            />
          </TouchableOpacity>
        </View>
        <Text style={{ marginLeft: 20, marginBottom: 10 }}>
          Current: {sortType}
        </Text>
        <View style={styles.column}>
          {filteredDoctors.map((doc, index) => (
            <View key={index} style={styles.row4}>
              <Image source={{ uri: doc.image }} style={styles.image5} />

              <View style={styles.column2}>
                <Text style={styles.text7}>{doc.name}</Text>
                <Text style={styles.text8}>{doc.specialty}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 8,
                    flexWrap: "wrap",
                  }}
                >
                  {/* BUTTON */}
                  <TouchableOpacity
                    style={[styles.view7, { marginTop: 8 }]}
                    onPress={() =>
                      router.push({
                        pathname: "/doctor-detail",
                        params: {
                          name: doc.name,
                          specialty: doc.specialty,
                          image: doc.image,
                          experience: doc.experience,
                          focus: doc.focus,
                          rating: String(doc.rating),
                          patients: String(doc.patients),
                          schedule: doc.schedule,
                        },
                      })
                    }
                  >
                    <Text style={styles.text9}>Info</Text>
                  </TouchableOpacity>

                  <Image
                    source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1bf723b-9f68-449b-95c4-c02a5e19c32b",
                    }}
                    style={[styles.image6, { marginLeft: 15 }]}
                  />
                  <Image
                    source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f70c9206-a4ec-4b29-90f9-46dfd1b0fd90",
                    }}
                    style={[styles.image7, { marginLeft: 4 }]}
                  />
                  <Image
                    source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9074c1a1-a409-4cb8-b00a-ae1abad88c1d",
                    }}
                    style={[styles.image6, { marginLeft: 4 }]}
                  />
                  <Image
                    source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/365d5407-f6ba-4d3d-89ea-be10eeb12451",
                    }}
                    style={[styles.image8, { marginLeft: 4 }]}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomTab}>
        <View style={styles.tabRow}>
          <TouchableOpacity onPress={() => router.replace("/indexhome")} style={styles.tabItem}>
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/529e09df-6c06-4eae-a261-4f64fcea06d7",
              }}
              resizeMode="stretch"
              style={styles.tabIcon}
            />
            <Text style={styles.tabText}>Health</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/journaling")} style={styles.tabItem}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/qglghqbr_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={styles.tabIcon}
            />
            <Text style={styles.tabText}>Expression</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.replace("/")}
            style={styles.tabItem}
          >
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95c12eca-d5f6-4430-a716-bfa4e4adf398",
              }}
              resizeMode="stretch"
              style={styles.tabIcon}
            />
            <Text style={styles.tabActiveText}>Appointments</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/profile-user")} style={styles.tabItem}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/45638hlp_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={styles.tabIcon}
            />
            <Text style={styles.tabText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F4F2",
  },
  button: {
    backgroundColor: "#F48BA1",
    borderRadius: 128,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  column: {
    paddingBottom: 1,
    marginBottom: 47,
    marginHorizontal: 20,
  },
  column2: {
    flex: 1,
    marginRight: 10,
    justifyContent: "center", // 👈 chuẩn Figma
  },
  column3: {
    flex: 1,
    marginTop: 10,
    marginRight: 10,
  },
  column4: {
    flex: 1,
    marginRight: 35,
  },
  column5: {
    flex: 1,
    alignItems: "center",
    marginRight: 17,
  },
  column6: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    borderRadius: 999,
    width: 39,
    height: 39,
  },
  image2: {
    width: 10,
    height: 8,
  },
  image3: {
    width: 6,
    height: 8,
  },
  image4: {
    width: 9,
    height: 10,
  },
  image5: {
    width: 95,
    height: 95,
    borderRadius: 50,
    marginRight: 10,
  },
  image6: {
    width: 24,
    height: 18,
    marginRight: 3,
  },
  image7: {
    width: 24,
    height: 18,
    marginRight: 2,
  },
  image8: {
    width: 24,
    height: 18,
  },
  image9: {
    width: 126,
    height: 95,
    marginVertical: 10,
    marginLeft: 13,
    marginRight: 9,
  },
  image10: {
    width: 126,
    height: 95,
    marginLeft: 13,
    marginRight: 9,
  },
  image11: {
    width: 14,
    height: 20,
    marginBottom: 6,
  },
  image12: {
    width: 24,
    height: 24,
    marginBottom: 6,
  },
  doctorCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    marginBottom: 12,
    alignItems: "center",
  },

  doctorImage: {
    width: 126,
    height: 95,
    margin: 10,
  },

  doctorInfo: {
    flex: 1,
    marginRight: 10,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  doctorRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: -60,
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    marginHorizontal: 30,
    marginTop: 40,
  },
  row3: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    marginLeft: 20,
  },
  row4: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 14,
    alignItems: "center",
    padding: 10,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },
  row5: {
    flexDirection: "row",
    marginTop: 6,
    justifyContent: "flex-start",
  },
  row6: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    marginBottom: 13,
  },
  row7: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    marginBottom: 12,
  },
  row8: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    paddingVertical: 10,
    marginBottom: 11,
  },
  row9: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    paddingVertical: 11,
    marginBottom: 15,
  },
  row10: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    paddingVertical: 11,
  },
  row11: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#EEEEEE",
    borderTopWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,

    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F7F4F2",
    paddingTop: 74,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
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
  text3: {
    color: "#9E9E9E",
    fontSize: 10,
    fontWeight: "bold",
  },
  text4: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
  },
  text5: {
    color: "#070707",
    fontSize: 12,
    marginRight: 5,
  },
  text6: {
    color: "#225FFF",
    fontSize: 12,
  },
  text7: {
    color: "#000000",
    fontSize: 15,
    marginBottom: 4,
    marginLeft: 2,
  },
  text8: {
    color: "#000000",
    fontSize: 13,
    marginLeft: 2,
  },
  text9: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  text10: {
    color: "#000000",
    fontSize: 14,
    marginBottom: 2,
    marginLeft: 1,
    width: 125,
  },
  text11: {
    color: "#000000",
    fontSize: 12,
    marginBottom: 16,
    marginLeft: 1,
  },
  text12: {
    color: "#000000",
    fontSize: 16,
    marginBottom: 4,
    marginLeft: 2,
  },
  text13: {
    color: "#000000",
    fontSize: 14,
    marginBottom: 19,
    marginLeft: 2,
  },
  text14: {
    color: "#000000",
    fontSize: 16,
    marginBottom: 2,
    marginLeft: 2,
    width: 136,
  },
  text15: {
    color: "#000000",
    fontSize: 13,
    marginBottom: 13,
    marginLeft: 1,
  },
  text16: {
    color: "#7B5E4B",
    fontSize: 10,
    fontWeight: "bold",
  },
  text17: {
    color: "#9E9E9E",
    fontSize: 8,
  },
  view: {
    borderRadius: 128,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  view2: {
    backgroundColor: "#CAD6FF",
    borderRadius: 13,
    paddingVertical: 5,
    paddingHorizontal: 9,
    marginRight: 3,
  },
  view3: {
    backgroundColor: "#225FFF",
    borderRadius: 13,
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginRight: 3,
  },
  view4: {
    backgroundColor: "#CAD6FF",
    borderRadius: 13,
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginRight: 3,
  },
  view5: {
    backgroundColor: "#CAD6FF",
    borderRadius: 13,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 3,
  },
  view6: {
    backgroundColor: "#CAD6FF",
    borderRadius: 13,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  view7: {
    backgroundColor: "#7B5E4B",
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignSelf: "flex-start",
  },

  bottomTab: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },

  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  tabItem: {
    alignItems: "center",
  },

  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },

  tabText: {
    color: "#9E9E9E",
    fontSize: 10,
  },

  tabActiveText: {
    color: "#F48BA1",
    fontSize: 10,
    fontWeight: "bold",
  },
});
