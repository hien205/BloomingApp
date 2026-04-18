import { LinearGradient } from "expo-linear-gradient";
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

import { useAlarmStore } from "../services copy/store";

export default function SleepScheduleScreen() {
  const bedtime = useAlarmStore((s) => s.bedtime);
  const alarm = useAlarmStore((s) => s.alarm);

  const router = useRouter();

  const [selectedDay, setSelectedDay] = React.useState(2);

  const days = [
    { day: "Mon", date: 10 },
    { day: "Tue", date: 11 },
    { day: "Wed", date: 12 },
    { day: "Thu", date: 13 },
    { day: "Fri", date: 14 },
    { day: "Sat", date: 15 },
    { day: "Sun", date: 16 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.replace("/rest")}
          >
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45a89f27-c5a1-4f0a-9865-f8a6246971c9",
              }}
              resizeMode={"stretch"}
              style={styles.image}
            />
          </TouchableOpacity>
          <View style={styles.row2}>
            <View style={styles.view}>
              <Text style={styles.text}>{"Sleep Schedule"}</Text>
            </View>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => router.push("/rest")}
            >
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34c9007b-67b2-4ffe-a11a-98f54f43dfe0",
                }}
                resizeMode={"stretch"}
                style={styles.image2}
              />
            </TouchableOpacity>
          </View>
        </View>
        <LinearGradient
          start={{ x: 1, y: 1 }}
          end={{ x: -0, y: -0 }}
          colors={["#92A3FD", "#9DCEFF"]}
          style={styles.row3}
        >
          <View style={styles.column}>
            <View style={styles.column2}>
              <Text style={styles.text2}>{"Ideal Hours for Sleep"}</Text>
              <Text style={styles.text3}>{"8hours 30minutes"}</Text>
            </View>
            <TouchableOpacity
              style={styles.button3}
              onPress={() => alert("Pressed!")}
            >
              <LinearGradient
                start={{ x: 1, y: 1 }}
                end={{ x: -0, y: -0 }}
                colors={["#92A3FD", "#9DCEFF"]}
                style={styles.button3}
              >
                <Text style={styles.text4}>{"Learn More"}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e361623a-6a37-4c70-80e1-27c922a7ce90",
              }}
              resizeMode={"stretch"}
              style={styles.image3}
            />
          </View>
        </LinearGradient>
        <View style={styles.view2}>
          <Text style={styles.text5}>{"Your Schedule"}</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dayContainer}
        >
          {days.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dayItem,
                selectedDay === index && styles.dayItemActive,
              ]}
              onPress={() => setSelectedDay(index)}
            >
              <Text
                style={[
                  styles.dayText,
                  selectedDay === index && styles.dayTextActive,
                ]}
              >
                {item.day}
              </Text>

              <Text
                style={[
                  styles.dayNumber,
                  selectedDay === index && styles.dayTextActive,
                ]}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.row5}>
          <View style={styles.view4}>
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3a364d1-e176-4de9-9736-06fe93eff86f",
              }}
              resizeMode={"stretch"}
              style={styles.image4}
            />
          </View>
          <View>
            <Text style={styles.text12}>{"Bedtime, " + bedtime}</Text>
          </View>
          <View>
            <View style={styles.view5}>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5c466c9-33a6-4609-9e17-7d253b355938",
                }}
                resizeMode={"stretch"}
                style={styles.image5}
              />
            </View>
            <LinearGradient
              start={{ x: 1, y: 1 }}
              end={{ x: -0, y: -0 }}
              colors={["#C58BF2", "#EEA4CE"]}
              style={styles.view6}
            >
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c420dad8-459c-4ae5-9e0d-adb5a9e19b21",
                }}
                resizeMode={"stretch"}
                style={styles.image5}
              />
            </LinearGradient>
          </View>
        </View>
        <View style={styles.row6}>
          <View style={styles.view7}>
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fdf9d9b-507c-4722-9832-6c99cbf122c9",
              }}
              resizeMode={"stretch"}
              style={styles.image6}
            />
          </View>
          <View>
            <Text style={styles.text13}>{"Alarm, " + alarm}</Text>
          </View>

          <View>
            <View style={styles.view8}>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84abce48-9413-46c0-a7f8-4410295b43d5",
                }}
                resizeMode={"stretch"}
                style={styles.image5}
              />
            </View>
            <LinearGradient
              start={{ x: 1, y: 1 }}
              end={{ x: -0, y: -0 }}
              colors={["#C58BF2", "#EEA4CE"]}
              style={styles.view6}
            >
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b3e87f4-04be-44dd-ba4b-0d248f538b95",
                }}
                resizeMode={"stretch"}
                style={styles.image5}
              />
            </LinearGradient>
          </View>
        </View>
        <View style={styles.view9}>
          <View style={styles.column4}>
            <View style={styles.view10}>
              <Text style={styles.text14}>
                {"You will get 8hours 10minutes for tonight"}
              </Text>
            </View>

            <TouchableOpacity onPress={() => router.push("/addalarm")}>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f9532e4-6e9a-4d9c-9f7a-9859fb852e45",
                }}
                resizeMode={"stretch"}
                style={styles.image7}
              />
            </TouchableOpacity>
            <View style={styles.view11}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 4 }}
                colors={["#F48BA1", "#FFFFFF"]}
                style={styles.view12}
              >
                <Text style={styles.text15}>{"96%"}</Text>
              </LinearGradient>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  box: {
    flex: 1,
    alignSelf: "stretch",
  },
  button: {
    backgroundColor: "#F7F3F2",
    borderRadius: 1234,
    padding: 8,
  },
  button2: {
    backgroundColor: "#F7F8F8",
    borderRadius: 8,
    paddingVertical: 13,
    paddingHorizontal: 12,
  },
  button3: {
    alignSelf: "flex-start",
    borderRadius: 50,
    paddingVertical: 11,
    paddingHorizontal: 21,
    marginRight: 20,
  },
  buttonColumn: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F7F8F8",
    borderRadius: 10,
    paddingVertical: 18,
    marginHorizontal: 4,
  },

  buttonColumn2: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F7F8F8",
    borderRadius: 10,
    paddingVertical: 18,
    marginHorizontal: 4,
  },

  buttonColumn3: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 18,
    marginHorizontal: 4,
  },

  buttonColumn4: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F7F8F8",
    borderRadius: 10,
    paddingVertical: 18,
    marginHorizontal: 4,
  },
  column: {
    borderRadius: 50,
  },
  column2: {
    alignSelf: "flex-start",
    marginBottom: 18,
  },
  column3: {
    marginRight: 17,
  },
  column4: {
    paddingBottom: 25,
    marginRight: 20,
  },
  image: {
    borderRadius: 1234,
    width: 24,
    height: 24,
  },
  image2: {
    width: 10,
    height: 4,
  },
  image3: {
    width: 128,
    height: 110,
  },
  image4: {
    width: 32,
    height: 33,
  },
  image5: {
    width: 15,
    height: 15,
  },
  image6: {
    width: 30,
    height: 33,
  },
  image7: {
    width: 88,
    height: 88,
    marginLeft: 258,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 29,
    marginHorizontal: 20,
  },
  row2: {
    flexDirection: "row",
    paddingHorizontal: 1,
  },
  row3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 22,
    paddingVertical: 22,
    paddingHorizontal: 21,
    marginBottom: 21,
    marginHorizontal: 27,
  },
  row4: {
    flexDirection: "row",
    justifyContent: "space-between", // 🔥 quan trọng
    marginHorizontal: 27,
    marginBottom: 30,
  },
  row5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 27,
    shadowColor: "#1D161712",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
  },
  row6: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 17,
    paddingHorizontal: 16,
    marginBottom: 49,
    marginHorizontal: 27,
    shadowColor: "#1D161712",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F7F4F2",
    paddingTop: 59,
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
    color: "#1D1517",
    fontSize: 20,
    fontWeight: "bold",
  },
  text2: {
    color: "#1D1517",
    fontSize: 12,
    marginBottom: 7,
  },
  text3: {
    color: "#92A3FD",
    fontSize: 14,
  },
  text4: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
  },
  text5: {
    color: "#1D1517",
    fontSize: 16,
    fontWeight: "bold",
  },
  text6: {
    color: "#7B6F72",
    fontSize: 12,
    marginBottom: 57,
  },
  text7: {
    color: "#7B6F72",
    fontSize: 12,
    marginBottom: 23,
  },
  text8: {
    color: "#7B6F72",
    fontSize: 14,
  },
  text9: {
    color: "#FFFFFF",
    fontSize: 12,
    marginBottom: 22,
  },
  text10: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  text11: {
    color: "#7B6F72",
    fontSize: 12,
    marginBottom: 22,
  },
  text12: {
    color: "#1D1517",
    fontSize: 14,
    marginBottom: 18,
    marginRight: 25,
    textAlign: "center",
    marginTop: 20,
    marginLeft: -10,
  },
  text13: {
    color: "#1D1517",
    fontSize: 14,
    marginBottom: 18,
    marginRight: 25,
    textAlign: "center",
    marginTop: 20,
    marginLeft: -33,
  },
  text14: {
    color: "#1D1517",
    fontSize: 20,
    width: 177,
  },
  text15: {
    color: "#FFFFFF",
    fontSize: 10,
  },
  view: {
    paddingBottom: 1,
    marginTop: 13,
    marginRight: 64,
  },
  view2: {
    alignSelf: "flex-start",
    marginBottom: 25,
    marginLeft: 27,
  },
  view3: {
    alignSelf: "flex-start",
    backgroundColor: "#F7F8F8",
    borderRadius: 10,
    paddingTop: 23,
    paddingRight: 64,
  },
  view4: {
    marginRight: 17,
  },
  view5: {
    alignSelf: "flex-start",
    marginBottom: 22,
    marginLeft: 33,
  },
  view6: {
    alignSelf: "flex-start",
    borderRadius: 50,
    paddingVertical: 5,
    paddingLeft: 27,
    paddingRight: 4,
  },
  view7: {
    paddingHorizontal: 1,
    marginRight: 18,
  },
  view8: {
    alignSelf: "flex-start",
    marginBottom: 21,
    marginLeft: 33,
  },
  view9: {
    alignItems: "flex-end",
    marginBottom: 33,
  },
  view10: {
    alignSelf: "flex-start",
  },
  view11: {
    backgroundColor: "#F7F8F8",
    borderRadius: 99,
    overflow: "hidden",
  },

  view12: {
    borderRadius: 99,
    paddingVertical: 6,
    alignItems: "center",
  },

  dayContainer: {
    paddingHorizontal: 20,
  },

  dayItem: {
    width: 70, // 🔥 quan trọng để scroll đẹp
    backgroundColor: "#F7F8F8",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginRight: 10,
  },

  dayItemActive: {
    backgroundColor: "#92A3FD",
  },

  dayText: {
    color: "#7B6F72",
    fontSize: 12,
    marginBottom: 8,
  },

  dayNumber: {
    color: "#7B6F72",
    fontSize: 16,
    fontWeight: "bold",
  },

  dayTextActive: {
    color: "#fff",
  },
});
