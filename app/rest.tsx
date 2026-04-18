import { useFocusEffect as useNavFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAlarmStore } from "../services copy/store";

import AsyncStorage from "@react-native-async-storage/async-storage";
export default function RestScreen() {
  const router = useRouter();
  const [name, setName] = useState("User");
  const [avatar, setAvatar] = useState("");
  useNavFocusEffect(
    useCallback(() => {
      /**
       * Loads user data from AsyncStorage
       * @returns {Promise<void>}
       */
      const loadData = async () => {
        const savedName = await AsyncStorage.getItem("username");
        const savedAvatar = await AsyncStorage.getItem("avatar");

        if (savedName) setName(savedName);
        if (savedAvatar) setAvatar(savedAvatar);
      };

      loadData();
    }, []),
  );

  const [bedtimeOn, setBedtimeOn] = React.useState(true);
  const [alarmOn, setAlarmOn] = React.useState(true);

  const setBedtime = useAlarmStore((s) => s.setBedtime);
  const setAlarm = useAlarmStore((s) => s.setAlarm);
  const bedtime = useAlarmStore((s) => s.bedtime);
  const alarm = useAlarmStore((s) => s.alarm);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.column}>
          <View style={styles.column2}>
            <View style={styles.row}>
              {/* LEFT */}
              <TouchableOpacity onPress={() => router.replace("/indexhome")}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/phk9o67e_expires_30_days.png",
                  }}
                  style={styles.image}
                  resizeMode="stretch"
                />
              </TouchableOpacity>

              {/* CENTER */}
              <View style={styles.headerCenter}>
                <Text style={styles.text}>{"Hi " + name + " !!"}</Text>
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
                style={styles.button}
                onPress={() => router.replace("/indexhome")}
              >
                <Text style={styles.text5}>{"Well-being"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.replace("/nourishment")}
              >
                <Text style={styles.text6}>{"Nourishment"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button2}>
                <Text style={styles.text7}>{"Rest"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button3}
                onPress={() => router.push("/calmhome")}
              >
                <Text style={styles.text6}>{"Calm  "}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text8}>{"10h"}</Text>
          </View>
          <View style={styles.box}></View>
        </View>
        <View style={styles.row3}>
          <View style={styles.column6}>
            <View>
              <View style={styles.box2}></View>
              <View>
                <Image
                  source={{
                    uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ca93bc1-a317-44c7-af28-48cd23ae68a8",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image3}
                />
                <View style={styles.absoluteView}>
                  <View style={styles.view3}>
                    <Text style={styles.text9}>{"43% increase"}</Text>
                  </View>
                </View>
                <Image
                  source={{
                    uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7c6e1a2-4252-44c1-8a01-3f1ff2cf95ff",
                  }}
                  resizeMode={"stretch"}
                  style={styles.absoluteImage3}
                />
              </View>
            </View>
            <View style={styles.box3}></View>
            <View style={styles.row4}>
              <Text style={styles.text10}>{"Sun"}</Text>
              <Text style={styles.text10}>{"Mon"}</Text>
              <Text style={styles.text11}>{"Tue"}</Text>
              <Text style={styles.text10}>{"Wed"}</Text>
              <Text style={styles.text12}>{"Thu"}</Text>
              <Text style={styles.text13}>{"Fri"}</Text>
              <Text style={styles.text14}>{"Sat"}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.text15}>{"8h"}</Text>
            <Text style={styles.text16}>{"6h"}</Text>
            <Text style={styles.text17}>{"4h"}</Text>
            <Text style={styles.text16}>{"2h"}</Text>
            <Text style={styles.text18}>{"0h"}</Text>
          </View>
        </View>
        <LinearGradient
          start={{ x: 1, y: 1 }}
          end={{ x: -0, y: -0 }}
          colors={["#92A3FD", "#9DCEFF"]}
          style={styles.column7}
        >
          <View style={styles.column8}>
            <Text style={styles.text19}>{"Last Night Sleep"}</Text>
            <Text style={styles.text20}>{"8h 20m"}</Text>
          </View>
          <Image
            source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6c4f86a-b2f7-4feb-900d-fc4f9a1c0e4f",
            }}
            resizeMode={"stretch"}
            style={styles.image4}
          />
        </LinearGradient>

        {/* ===== TODAY SCHEDULE ===== */}
        <View style={styles.column9}>
          <Text style={styles.title}>Today Schedule</Text>

          {/* BEDTIME */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/sleepschedule")}
          >
            <View style={styles.left}>
              <Image
                source={{ uri: "https://img.icons8.com/color/96/bed.png" }}
                style={styles.iconBig}
              />
              <View>
                <Text style={styles.mainText}>Bedtime, {bedtime}</Text>
              </View>
            </View>

            <Switch
              value={bedtimeOn}
              onValueChange={setBedtimeOn}
              trackColor={{ false: "#ddd", true: "#C58BF2" }}
              thumbColor={"#fff"}
            />
          </TouchableOpacity>

          {/* ALARM */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/sleepschedule")}
          >
            <View style={styles.left}>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fdf9d9b-507c-4722-9832-6c99cbf122c9",
                }}
                style={styles.iconBig}
              />
              <View>
                <Text style={styles.mainText}>Alarm, {alarm}</Text>
              </View>
            </View>

            <Switch
              value={alarmOn}
              onValueChange={setAlarmOn}
              trackColor={{ false: "#ddd", true: "#C58BF2" }}
              thumbColor={"#fff"}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View
        style={{
          backgroundColor: "#FFFFFF",
          paddingVertical: 12,
          borderTopWidth: 1,
          borderTopColor: "#F0F0F0",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => router.replace("/indexhome")}
            style={{ alignItems: "center" }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/0e1y69h4_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={{ width: 24, height: 24, marginBottom: 4 }}
            />
            <Text
              style={{ color: "#F48BA1", fontSize: 10, fontWeight: "bold" }}
            >
              Health
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.replace("/journaling")}
            style={{ alignItems: "center" }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/qglghqbr_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={{ width: 24, height: 24, marginBottom: 4 }}
            />
            <Text style={{ color: "#9E9E9E", fontSize: 10 }}>Expression</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.replace("/AISchedule")}
            style={{ alignItems: "center" }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/ndb4dzls_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={{ width: 24, height: 24, marginBottom: 4 }}
            />
            <Text style={{ color: "#9E9E9E", fontSize: 10 }}>Appointments</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.replace("/profile-user")}
            style={{ alignItems: "center" }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/45638hlp_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={{ width: 24, height: 24, marginBottom: 4 }}
            />
            <Text style={{ color: "#9E9E9E", fontSize: 10 }}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  absoluteImage: {
    position: "absolute",
    bottom: -14,
    right: -14,
    width: 30,
    height: 30,
  },
  absoluteImage2: {
    position: "absolute",
    top: 34,
    left: 174,
    width: 30,
    height: 30,
  },
  absoluteImage3: {
    position: "absolute",
    bottom: -9,
    right: 98,
    width: 8,
    height: 87,
  },
  absoluteView: {
    position: "absolute",
    top: -9,
    right: 53,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingLeft: 11,
    paddingRight: 25,
    shadowColor: "#1D161712",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
  },
  box: {
    height: 1,
    backgroundColor: "#ACA3A5",
    marginLeft: 23,
    marginRight: 39,
  },
  box2: {
    height: 1,
    backgroundColor: "#ACA3A5",
    marginHorizontal: 1,
  },
  box3: {
    height: 1,
    backgroundColor: "#ACA3A5",
    marginBottom: 8,
    marginHorizontal: 1,
  },
  box4: {
    flex: 1,
    alignSelf: "stretch",
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
  button3: {
    backgroundColor: "#F5F5F5",
    borderRadius: 128,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  column: {
    paddingBottom: 7,
    marginBottom: 13,
  },
  column2: {
    backgroundColor: "#F7F4F2",
    paddingTop: 20,
  },
  column3: {
    flex: 1,
    marginRight: 12,
  },
  column4: {
    alignSelf: "flex-start",
    marginBottom: 47,
    marginLeft: 4,
  },
  column5: {
    flex: 1,
  },
  column6: {
    flex: 1,
    marginRight: 5,
  },
  column7: {
    borderRadius: 22,
    paddingTop: 21,
    marginBottom: 19,
    marginHorizontal: 28,
  },
  column8: {
    alignSelf: "flex-start",
    marginBottom: 5,
    marginLeft: 21,
  },
  column9: {
    marginBottom: 50,
    marginHorizontal: 20, // căn đều 2 bên
    marginTop: 10,
  },
  column10: {
    marginRight: 34,
  },
  column11: {
    alignItems: "center",
    paddingHorizontal: 8,
  },
  image: {
    borderRadius: 999,
    width: 39,
    height: 39,
    marginRight: 4,
  },
  image2: {
    width: 173,
    height: 208,
  },
  image3: {
    height: 114,
  },
  image4: {
    height: 82,
  },
  image5: {
    width: 14,
    height: 20,
    marginBottom: 6,
  },
  image6: {
    width: 24,
    height: 24,
    marginBottom: 6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 10,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    marginHorizontal: 20,
    marginTop: 25,
  },
  row3: {
    flexDirection: "row",
    paddingVertical: 7,
    marginBottom: 31,
    marginHorizontal: 21,
  },
  row4: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
  },
  row5: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#EEEEEE",
    borderTopWidth: 1,
    paddingVertical: 16,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F7F4F2",
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
    marginBottom: 4,
    marginRight: 20,
  },
  text2: {
    color: "#424242",
    fontSize: 14,
    fontWeight: "bold",
  },
  text3: {
    color: "#212121",
    fontSize: 24,
    fontWeight: "bold",
  },
  text4: {
    color: "#5F5F5F",
    fontSize: 12,
    marginHorizontal: 2,
  },
  text5: {
    color: "#9E9E9E",
    fontSize: 10,
    fontWeight: "bold",
  },
  text6: {
    color: "#9E9E9E",
    fontSize: 10,
  },
  text7: {
    color: "#FFFFFF",
    fontSize: 10,
  },
  text8: {
    color: "#7B6F72",
    fontSize: 10,
    marginRight: 18,
  },
  text9: {
    color: "#41D641",
    fontSize: 10,
  },
  text10: {
    color: "#7B6F72",
    fontSize: 12,
    marginRight: 30,
    flex: 1,
  },
  text11: {
    color: "#7B6F72",
    fontSize: 12,
    marginRight: 29,
    flex: 1,
  },
  text12: {
    color: "#92A3FD",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 27,
    flex: 1,
  },
  text13: {
    color: "#7B6F72",
    fontSize: 12,
    marginRight: 28,
  },
  text14: {
    color: "#7B6F72",
    fontSize: 12,
    flex: 1,
  },
  text15: {
    color: "#92A3FD",
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 12,
  },
  text16: {
    color: "#7B6F72",
    fontSize: 10,
    marginBottom: 13,
  },
  text17: {
    color: "#7B6F72",
    fontSize: 10,
    marginBottom: 12,
  },
  text18: {
    color: "#7B6F72",
    fontSize: 10,
  },
  text19: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 6,
  },
  text20: {
    color: "#FFFFFF",
    fontSize: 14,
    marginRight: 55,
  },
  text21: {
    color: "#F48BA1",
    fontSize: 10,
    fontWeight: "bold",
  },
  text22: {
    color: "#9E9E9E",
    fontSize: 8,
  },
  view: {
    alignItems: "flex-end",
    marginBottom: 10,
  },
  view2: {
    alignItems: "flex-end",
  },
  view3: {
    alignSelf: "flex-start",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "#eee",
  },

  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },

  navText: {
    fontSize: 10,
    color: "#9E9E9E",
  },

  navActive: {
    fontSize: 10,
    color: "#F48BA1",
    fontWeight: "bold",
  },

  view4: {
    alignSelf: "flex-start",
    marginBottom: 19,
  },

  text23: {
    color: "#1D1517",
    fontSize: 16,
    fontWeight: "bold",
  },

  row6: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 17,
    marginBottom: 17,
    shadowColor: "#1D161712",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 40,
    elevation: 5,
  },

  row7: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 17,
    shadowColor: "#1D161712",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 40,
    elevation: 5,
  },

  view5: {
    marginRight: 19,
  },

  view8: {
    paddingHorizontal: 1,
    marginRight: 18,
  },

  text25: {
    color: "#1D1517",
    fontSize: 12,
    fontWeight: "bold",
  },

  text24: {
    color: "#1D1517",
    fontSize: 14,
    marginBottom: 17,
    marginRight: 25,
  },

  text27: {
    color: "#7B6F72",
    fontSize: 16,
    fontWeight: "bold",
  },

  text26: {
    color: "#1D1517",
    fontSize: 14,
    marginBottom: 17,
    marginRight: 53,
  },

  scheduleToggle: {
    width: 40,
    height: 20,
    borderRadius: 20,
    backgroundColor: "#F48BA1",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7B6F72",
    marginBottom: 15,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F7F4F2",
    borderRadius: 20,
    padding: 16,
    marginBottom: 15,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBig: {
    width: 40,
    height: 40,
    marginRight: 12,
    marginTop: -10,
  },

  mainText: {
    fontSize: 14,
    color: "#1D1517",
    fontWeight: "600",
    marginTop: -5,
    marginLeft: 20,
  },

  subText: {
    fontSize: 12,
    color: "#7B6F72",
    marginTop: 4,
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
