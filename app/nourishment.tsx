import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function NourishmentScreen() {
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
    }, []),
  );
  type Meal = {
    name: string;
    time: string;
    image: string;
  };

  const [meals, setMeals] = useState<Meal[]>([
    {
      name: "Oatmeal Pancakes",
      time: "Today | 7am",
      image:
        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54769192-fb25-444b-91da-08c1749bbf05",
    },
    {
      name: "Strawberry Bowl",
      time: "Today | 8am",
      image:
        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07f50f5b-9115-43f2-a8fc-d37b95f27dc3",
    },
  ]);

  const params = useLocalSearchParams<{
    name?: string;
    time?: string;
    image?: string;
  }>();

  useEffect(() => {
    if (params.name) {
      const newMeal: Meal = {
        name: Array.isArray(params.name) ? params.name[0] : (params.name ?? ""),
        time: Array.isArray(params.time) ? params.time[0] : (params.time ?? ""),
        image: Array.isArray(params.image)
          ? params.image[0]
          : (params.image ?? ""),
      };

      setMeals((prev) => {
        if (prev.find((m) => m.name === newMeal.name)) return prev;
        return [...prev, newMeal];
      });
    }
  }, [params.name, params.time, params.image]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.column}>
          <View style={styles.column2}>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => router.replace("/")}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/phk9o67e_expires_30_days.png",
                  }}
                  resizeMode="stretch"
                  style={styles.image}
                />
              </TouchableOpacity>

              <View>
                <Text style={styles.text}>{"Hi " + name + " !!"}</Text>
                <Text style={styles.text2}>{"Good Morning"}</Text>
              </View>
              <Image
                source={{ uri: avatar || "https://via.placeholder.com/40" }}
                resizeMode={"stretch"}
                style={styles.image}
              />
            </View>
            <View style={styles.row2}>
              <View style={styles.column3}>
                <Text style={styles.text3}>
                  {"You gotta nourish to flourish"}
                </Text>
                <Text style={styles.text4}>
                  {"Let your meals be moments of care and self-love."}
                </Text>
              </View>
              <View style={styles.column4}>
                <Image
                  source={{
                    uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7a6f916-87ad-4915-8e34-7e550ce859a5",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image2}
                />
                <Image
                  source={{
                    uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7509864c-0e0a-4ddc-89e3-1034f06dc3ea",
                  }}
                  resizeMode={"stretch"}
                  style={styles.absoluteImage}
                />
              </View>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5fce0bcc-40f7-4af7-b49f-6a16d8573124",
                }}
                resizeMode={"stretch"}
                style={styles.absoluteImage2}
              />
            </View>
            <View style={styles.row3}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/")}
              >
                <Text style={styles.text5}>{"Well-being"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button2}>
                <Text style={styles.text6}>{"Nourishment"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button3}
                onPress={() => router.push("/rest")}
              >
                <Text style={styles.text7}>{"Rest"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button4}
                onPress={() => router.push("/calmhome")}
              >
                <Text style={styles.text7}>{"Calm  "}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.text8}>{"Meal Nutritions"}</Text>
        </View>
        <View style={styles.column5}>
          <View style={styles.row4}>
            <View style={styles.column6}>

  {/* GRID LINE */}
<View
  style={{
    position: "absolute",
    top: 37,     // 🔥 chỉnh đúng vùng chart
    bottom: 5,  // 🔥 chỉnh đúng vùng chart
    left: 0,
    right: 0,
    justifyContent: "space-between",
    zIndex: 10,
  }}
>
  {[0, 1, 2, 3, 4, 5].map((_, i) => (
    <View
      key={i}
      style={{
        height: 1,
        backgroundColor: "#DADADA", // giống figma hơn
      }}
    />
  ))}
</View>

  {/* CODE CŨ GIỮ NGUYÊN */}
  <View style={styles.column7}>
    <View style={styles.column8}>
      <View style={styles.row5}>
        <Text style={styles.text9}>{"Fibre"}</Text>
        <Text style={styles.text10}>{"88%"}</Text>
        <View>
          <Image
            source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc4ff5d5-c751-4b7c-806a-16cbecb96cb0",
            }}
            resizeMode={"stretch"}
            style={styles.image3}
          />
        </View>
      </View>
      <View style={styles.view}>
        <LinearGradient
          start={{ x: 2, y: 1 }}
          end={{ x: 0, y: 1 }}
          colors={["#C58BF2", "#92A3FD"]}
          style={styles.box}
        />
      </View>
    </View>
  </View>

  <View>
    <ImageBackground
      source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a4e6e05-1150-45eb-9f32-160488880b3f",
      }}
      resizeMode={"stretch"}
      style={styles.view2}
    >
      <ImageBackground
        source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6db05c9a-bb22-4b3d-9f16-201d5c12e0cd",
        }}
        resizeMode={"stretch"}
        style={styles.view3}
      >
        <View style={styles.column9}>
          <View style={styles.row6}>
            <View style={styles.view4}>
              <Text style={styles.text11}>{"fats"}</Text>
            </View>
            <View style={styles.row7}>
              <Text style={styles.text12}>{"42%"}</Text>
              <View style={styles.view5}>
                <Image
                  source={{
                    uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e662894-a9a6-4655-9148-463ed533c638",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image3}
                />
              </View>
            </View>
          </View>
          <View style={styles.view6}>
            <LinearGradient
              start={{ x: 2, y: 1 }}
              end={{ x: 0, y: 1 }}
              colors={["#C58BF2", "#92A3FD"]}
              style={styles.box2}
            />
          </View>
        </View>
      </ImageBackground>
    </ImageBackground>

    <View style={styles.absoluteColumn}>
      <View style={styles.row6}>
        <View style={styles.view7}>
          <Text style={styles.text11}>{"Calories"}</Text>
        </View>
        <View style={styles.row7}>
          <Text style={styles.text13}>{"82%"}</Text>
          <View style={styles.view5}>
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ef4bda6-8611-4d98-8b99-182acbf72283",
              }}
              resizeMode={"stretch"}
              style={styles.image3}
            />
          </View>
        </View>
      </View>
      <View style={styles.view8}>
        <LinearGradient
          start={{ x: 2, y: 1 }}
          end={{ x: 0, y: 1 }}
          colors={["#C58BF2", "#92A3FD"]}
          style={styles.box3}
        />
      </View>
    </View>

    <View style={styles.absoluteColumn2}>
      <View style={styles.row6}>
        <View style={styles.view9}>
          <Text style={styles.text11}>{"Sugar"}</Text>
        </View>
        <View style={styles.row7}>
          <Text style={styles.text12}>{"39%"}</Text>
          <View style={styles.view5}>
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f95b900-318a-4206-b024-20fd6ccabcab",
              }}
              resizeMode={"stretch"}
              style={styles.image3}
            />
          </View>
        </View>
      </View>
      <View style={styles.view10}>
        <LinearGradient
          start={{ x: 2, y: 1 }}
          end={{ x: 0, y: 1 }}
          colors={["#C58BF2", "#92A3FD"]}
          style={styles.box4}
        />
      </View>
    </View>
  </View>

</View>
            <View style={styles.column10}>
              <Text style={styles.text14}>{"100%"}</Text>
              <Text style={styles.text15}>{"80%"}</Text>
              <Text style={styles.text16}>{"60%"}</Text>
              <Text style={styles.text15}>{"40%"}</Text>
              <Text style={styles.text14}>{"20%"}</Text>
              <Text style={styles.text11}>{"0%"}</Text>
            </View>
          </View>
          <View style={styles.row8}>
            <Text style={styles.text17}>{"Sun"}</Text>
            <Text style={styles.text18}>{"Mon"}</Text>
            <Text style={styles.text19}>{"Tue"}</Text>
            <Text style={styles.text17}>{"Wed"}</Text>
            <Text style={styles.text20}>{"Thu"}</Text>
            <Text style={styles.text21}>{"Fri"}</Text>
            <Text style={styles.text22}>{"Sat"}</Text>
          </View>
        </View>
        <LinearGradient
          start={{ x: 1, y: 1 }}
          end={{ x: -0, y: -0 }}
          colors={["#92A3FD", "#9DCEFF"]}
          style={styles.row9}
        >
          <View style={styles.view11}>
            <Text style={styles.text23}>{"Daily Meal Schedule"}</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("/mealschedule")}>
            <LinearGradient
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              colors={["#92A3FD", "#9DCEFF"]}
              style={styles.view12}
            >
              <Text style={styles.text24}>{"Check"}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.row10}>
          <View style={styles.view11}>
            <Text style={styles.text25}>{"Today Meals"}</Text>
          </View>
          <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: -0, y: -0 }}
            colors={["#92A3FD", "#9DCEFF"]}
            style={styles.row11}
          >
            <Text style={styles.text26}>{"Breakfast"}</Text>
            <View style={styles.view13}>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52208054-ddb1-4285-8775-7cc7c8eab09d",
                }}
                resizeMode={"stretch"}
                style={styles.image4}
              />
            </View>
          </LinearGradient>
        </View>
        {meals.map((item, index) => (
          <View key={index} style={styles.row12}>
            <Image source={{ uri: item.image }} style={styles.image5} />
            <View>
              <Text style={styles.text27}>{item.name}</Text>
              <Text style={styles.text28}>{item.time}</Text>
            </View>
            <View style={styles.box7}></View>
          </View>
        ))}
        <View style={styles.view15}>
          <Text style={styles.text25}>{"Find Something to Eat"}</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
        >
          <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: -0, y: -0 }}
            colors={["#c1cbff", "#dbedff"]}
            style={styles.column11}
          >
            <View style={styles.view16}>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8733d598-8874-4a42-9389-a85d5a3cb8ad",
                }}
                resizeMode={"stretch"}
                style={styles.image7}
              />
            </View>
            <View style={styles.column12}>
              <Text style={styles.text30}>{"Breakfast"}</Text>
              <Text style={styles.text31}>{"120+ Foods"}</Text>
            </View>
            <TouchableOpacity onPress={() => router.push("/breakfast")}>
              <LinearGradient
                start={{ x: 1, y: 1 }}
                end={{ x: -0, y: -0 }}
                colors={["#c1cbff", "#dbedff"]}
                style={styles.button6}
              >
                <Text style={styles.text32}>{"Select"}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: -0, y: -0 }}
            colors={["#ffc7f8", "#fbc2f5"]}
            style={styles.column11}
          >
            <View style={styles.view16}>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8733d598-8874-4a42-9389-a85d5a3cb8ad",
                }}
                resizeMode={"stretch"}
                style={styles.image7}
              />
            </View>
            <View style={styles.column12}>
              <Text style={styles.text30}>{"Lunch"}</Text>
              <Text style={styles.text31}>{"120+ Foods"}</Text>
            </View>
            <TouchableOpacity
              style={styles.button6}
              onPress={() => alert("Pressed!")}
            >
              <LinearGradient
                start={{ x: 1, y: 1 }}
                end={{ x: -0, y: -0 }}
                colors={["#ffc7f8", "#fbc2f5"]}
                style={styles.button6}
              >
                <Text style={styles.text32}>{"Select"}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: -0, y: -0 }}
            colors={["#ebd8ff", "#d6b7ff"]}
            style={styles.column13}
          >
            <View style={styles.view16}>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8733d598-8874-4a42-9389-a85d5a3cb8ad",
                }}
                resizeMode={"stretch"}
                style={styles.image7}
              />
            </View>
            <View style={styles.column12}>
              <Text style={styles.text30}>{"Dinner"}</Text>
              <Text style={styles.text31}>{"120+ Foods"}</Text>
            </View>
            <TouchableOpacity
              style={styles.button6}
              onPress={() => alert("Pressed!")}
            >
              <LinearGradient
                start={{ x: 1, y: 1 }}
                end={{ x: -0, y: -0 }}
                colors={["#ebd8ff", "#d6b7ff"]}
                style={styles.button6}
              >
                <Text style={styles.text32}>{"Select"}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>
        </ScrollView>
      </ScrollView>

      <View style={styles.bottomTab}>
        <View style={styles.tabRow}>
          <TouchableOpacity
            onPress={() => router.replace("/")}
            style={styles.tabItem}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/0e1y69h4_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={styles.tabIcon}
            />
            <Text style={styles.tabActiveText}>Health</Text>
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
            onPress={() => router.replace("/AISchedule")}
            style={styles.tabItem}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/ndb4dzls_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={styles.tabIcon}
            />
            <Text style={styles.tabText}>Appointments</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.replace("/profile-user")}
            style={styles.tabItem}
          >
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
    backgroundColor: "#FFFFFF",
  },
  absoluteBox: {
    position: "absolute",
    top: 20,
    right: -79,
    width: 308,
    height: 1,
    backgroundColor: "#ACA3A5",
  },
  absoluteColumn: {
    position: "absolute",
    top: -45,
    left: 23,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 11,
    shadowColor: "#1D161712",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
  },
  absoluteColumn2: {
    position: "absolute",
    bottom: -10,
    left: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 11,
    shadowColor: "#1D161712",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
  },
  absoluteImage: {
    position: "absolute",
    bottom: -10,
    right: -15,
    width: 30,
    height: 30,
  },
  absoluteImage2: {
    position: "absolute",
    top: 0,
    left: 172,
    width: 30,
    height: 30,
  },
  box: {
    width: 45,
    height: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  box2: {
    width: 19,
    height: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  box3: {
    width: 58,
    height: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  box4: {
    width: 18,
    height: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  box5: {
    height: 1,
    backgroundColor: "#ACA3A5",
    marginBottom: 26,
  },
  box6: {
    height: 1,
    backgroundColor: "#ACA3A5",
  },
  box7: {
    flex: 1,
    alignSelf: "stretch",
  },
  box8: {
    width: 28,
    height: 26,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 6,
  },
  box9: {
    width: 134,
    height: 5,
    backgroundColor: "#4E3321",
    borderRadius: 100,
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
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F48BA1",
    borderRadius: 128,
    paddingVertical: 6,
    marginRight: 12,
  },
  button3: {
    backgroundColor: "#F5F5F5",
    borderRadius: 128,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginRight: 12,
  },
  button4: {
    backgroundColor: "#F5F5F5",
    borderRadius: 128,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  button5: {
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  button6: {
    alignSelf: "flex-start",
    borderRadius: 50,
    paddingVertical: 6,
    paddingHorizontal: 31,
    marginBottom: 20,
    marginLeft: 20,
  },
  column: {
    marginBottom: 4,
  },
  column2: {
    backgroundColor: "#F7F4F2",
    paddingTop: 20,
  },
  column3: {
    flex: 1,
    marginTop: 43,
    marginRight: 13,
  },
  column4: {
    flex: 1,
    marginTop: 17,
  },
  column5: {
    marginBottom: 21,
    marginHorizontal: 25,
  },
column6: {
  flex: 1,
  marginRight: 4,
  position: "relative",
  height: 180, // 🔥 QUAN TRỌNG (tăng lên)
},
  column7: {
    alignSelf: "flex-start",
    marginBottom: 2,
    marginLeft: 143,
    marginTop: 30,
  },
  column8: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 11,
    shadowColor: "#1D161712",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
  },
  column9: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 11,
    marginBottom: 6,
    shadowColor: "#1D161712",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
  },
  column10: {
  justifyContent: "space-between", // ✅ chia đều
  height: 150, // ⚠️ chỉnh theo chiều cao chart của bạn
  marginTop: 0,
},
  column11: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
    paddingTop: 8,
    marginRight: 15, // FIX spacing
  },
  column13: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
    paddingTop: 8,
    marginRight: 15, // FIX spacing
  },
  column12: {
    alignSelf: "flex-start",
    marginBottom: 15,
    marginLeft: 20,
  },

  column14: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#EEEEEE",
    borderTopWidth: 1,
    paddingVertical: 12,
    marginHorizontal: 2,
  },
  column15: {
    flex: 1,
    alignItems: "center",
    marginRight: 17,
  },
  column16: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    borderRadius: 9999999827968,
    width: 39,
    height: 39,
  },
  image2: {
    width: 175,
    height: 175,
  },
  image3: {
    width: 4,
    height: 5,
  },
  image4: {
    width: 9,
    height: 4,
  },
  image5: {
    width: 74,
    height: 60,
    marginRight: 14,
  },
  image6: {
    width: 12,
    height: 13,
  },
  image7: {
    width: 120,
    height: 73,
  },
  image8: {
    width: 14,
    height: 20,
    marginBottom: 6,
  },
  image9: {
    width: 24,
    height: 24,
    marginBottom: 6,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
    marginHorizontal: 20,
  },
  row2: {
    flexDirection: "row",
    marginBottom: 39,
    marginHorizontal: 16,
  },
  row3: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    marginHorizontal: 20,
  },
  row4: {
    flexDirection: "row",
	alignItems: "flex-end"
  },
  row5: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  row6: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
  row7: {
    flexDirection: "row",
    alignItems: "center",
  },
  row8: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 4,
    marginRight: 42,
  },
  row9: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 16,
    paddingVertical: 15,
    paddingHorizontal: 22,
    marginBottom: 21,
    marginHorizontal: 21,
  },
  row10: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    marginHorizontal: 27,
  },
  row11: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  row12: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 11,
    marginBottom: 15,
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
  row13: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 11,
    marginBottom: 21,
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
  row14: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
    marginHorizontal: 20,
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
  scrollView2: {
    marginBottom: 24,
  },
  boxLine: {
  height: 1,
  backgroundColor: "#ACA3A5",
  marginBottom: 26,
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
    width: 125,
  },
  text4: {
    color: "#5F5F5F",
    fontSize: 12,
  },
  text5: {
    color: "#9E9E9E",
    fontSize: 10,
    fontWeight: "bold",
  },
  text6: {
    color: "#FFFFFF",
    fontSize: 10,
  },
  text7: {
    color: "#9E9E9E",
    fontSize: 10,
  },
  text8: {
    color: "#1D1517",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 21,
  },
  text9: {
    color: "#7B6F72",
    fontSize: 10,
    marginRight: 10,
  },
  text10: {
    color: "#41D641",
    fontSize: 8,
    marginRight: 4,
  },
  text11: {
    color: "#7B6F72",
    fontSize: 10,
  },
  text12: {
    color: "#FF0000",
    fontSize: 8,
    marginRight: 2,
  },
  text13: {
    color: "#41D641",
    fontSize: 8,
    marginRight: 3,
  },
  text14: {
    color: "#7B6F72",
    fontSize: 10,
    marginBottom: 12,
  },
  text15: {
    color: "#7B6F72",
    fontSize: 10,
    marginBottom: 11,
  },
  text16: {
    color: "#C58BF2",
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 12,
  },
  text17: {
    color: "#7B6F72",
    fontSize: 12,
    marginRight: 26,
    flex: 1,
  },
  text18: {
    color: "#7B6F72",
    fontSize: 12,
    marginRight: 27,
    flex: 1,
  },
  text19: {
    color: "#7B6F72",
    fontSize: 12,
    marginRight: 25,
    flex: 1,
  },
  text20: {
    color: "#C58BF2",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 23,
    flex: 1,
  },
  text21: {
    color: "#7B6F72",
    fontSize: 12,
    marginRight: 26,
  },
  text22: {
    color: "#7B6F72",
    fontSize: 12,
    flex: 1,
  },
  text23: {
    color: "#1D1517",
    fontSize: 14,
  },
  text24: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  text25: {
    color: "#1D1517",
    fontSize: 16,
    fontWeight: "bold",
  },
  text26: {
    color: "#FFFFFF",
    fontSize: 10,
    marginRight: 7,
  },
  text27: {
    color: "#1D1517",
    fontSize: 14,
    marginBottom: 3,
  },
  text28: {
    color: "#7B6F72",
    fontSize: 12,
    marginRight: 60,
  },
  text29: {
    color: "#7B6F72",
    fontSize: 12,
    marginRight: 37,
  },
  text30: {
    color: "#1D1517",
    fontSize: 14,
    marginBottom: 5,
  },
  text31: {
    color: "#7B6F72",
    fontSize: 12,
  },
  text32: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  text33: {
    color: "#F48BA1",
    fontSize: 10,
    fontWeight: "bold",
  },
  text34: {
    color: "#9E9E9E",
    fontSize: 8,
  },
  view: {
    alignSelf: "flex-start",
    backgroundColor: "#F7F8F8",
    borderRadius: 5,
    paddingRight: 19,
  },
  view2: {
    paddingVertical: 2,
    paddingHorizontal: 1,
    marginTop: -11,
  },
  view3: {
    alignItems: "flex-end",
    paddingTop: 29,
    paddingRight: 75,
  },
  view4: {
    paddingBottom: 1,
    marginRight: 8,
  },
  view5: {
    paddingVertical: 1,
    paddingHorizontal: 2,
  },
  view6: {
    alignSelf: "flex-start",
    backgroundColor: "#F7F8F8",
    borderRadius: 5,
    paddingRight: 38,
  },
  view7: {
    paddingBottom: 1,
    marginRight: 9,
  },
  view8: {
    alignSelf: "flex-start",
    backgroundColor: "#F7F8F8",
    borderRadius: 5,
    paddingRight: 22,
  },
  view9: {
    paddingBottom: 1,
    marginRight: 10,
  },
  view10: {
    alignSelf: "flex-start",
    backgroundColor: "#F7F8F8",
    borderRadius: 5,
    paddingRight: 51,
  },
  view11: {
    paddingBottom: 1,
  },
  view12: {
    borderRadius: 50,
    paddingTop: 5,
    paddingBottom: 6,
    paddingHorizontal: 17,
  },
  view13: {
    paddingVertical: 5,
    paddingHorizontal: 3,
  },
  view14: {
    alignSelf: "flex-start",
  },
  view15: {
    alignSelf: "flex-start",
    paddingBottom: 1,
    marginBottom: 25,
    marginLeft: 21,
  },
  view16: {
    alignSelf: "flex-start",
    marginBottom: 12,
    marginLeft: 72,
    marginRight: 11,
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
  gridLine: {
    height: 1,
    backgroundColor: "#EAEAEA", // nhạt giống figma
    marginVertical: 12,
  },
});
