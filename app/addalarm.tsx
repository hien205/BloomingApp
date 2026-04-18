import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAlarmStore } from "../services copy/store";
export default function AddalarmScreen() {
  const params = useLocalSearchParams();
  const setBedtime = useAlarmStore((s) => s.setBedtime);
  const setAlarm = useAlarmStore((s) => s.setAlarm);

  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#F7F4F2",
          paddingTop: 50,
          shadowColor: "#00000040",
          shadowOpacity: 0.3,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowRadius: 4,
          elevation: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 49,
            marginHorizontal: 20,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QixVuhYNuV/gvgkiivq_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                paddingBottom: 1,
                marginRight: 92,
              }}
            >
              <Text
                style={{
                  color: "#1D1517",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", marginLeft: 20 }}
                >
                  {params.alarmName || "No Alarm Name"}
                </Text>
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#F7F8F8",
                borderRadius: 8,
                paddingVertical: 6,
                paddingHorizontal: 9,
              }}
              onPress={() => router.push("/sleeptracker")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QixVuhYNuV/7rgschkc_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 18,
                  height: 18,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            paddingVertical: 15,
            paddingHorizontal: 16,
            marginBottom: 11,
            marginHorizontal: 21,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QixVuhYNuV/7o991nus_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 22,
              height: 20,
              marginRight: 12,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: 7,
            }}
          >
            <Text
              style={{
                color: "#000001",
                fontSize: 12,
              }}
            >
              {"Bedtime"}
            </Text>
            <Text
              style={{
                color: "#4E3321",
                fontSize: 10,
              }}
            >
              {params.bedHour ?? "00"}:{params.bedMinute ?? "00"}{" "}
              {params.bedAmpm ?? "AM"}
            </Text>
          </View>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QixVuhYNuV/9z8p64xj_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 22,
              height: 20,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            paddingVertical: 15,
            paddingHorizontal: 16,
            marginBottom: 10,
            marginHorizontal: 21,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QixVuhYNuV/sz5clu8i_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 22,
              height: 20,
              marginRight: 12,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: 6,
            }}
          >
            <Text
              style={{
                color: "#000001",
                fontSize: 12,
              }}
            >
              {"Hours of sleep"}
            </Text>
            <Text
              style={{
                color: "#4E3321",
                fontSize: 10,
              }}
            >
              {params.sleepHour ?? "0"} hours {params.sleepMinute ?? "0"}{" "}
              minutes
            </Text>
          </View>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QixVuhYNuV/x82piox1_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 22,
              height: 20,
            }}
          />
        </View>
        <View
          style={{
            marginBottom: 314,
            marginHorizontal: 21,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              padding: 16,
              marginBottom: 11,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QixVuhYNuV/wlgk1ffb_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 22,
                height: 20,
                marginRight: 12,
              }}
            />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginRight: 6,
              }}
            >
              <Text
                style={{
                  color: "#000001",
                  fontSize: 12,
                }}
              >
                {"Repeat"}
              </Text>
              <Text
                style={{
                  color: "#4E3321",
                  fontSize: 10,
                }}
              >
                {"Mon to Fri"}
              </Text>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QixVuhYNuV/c9fi3ke0_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 22,
                height: 20,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              paddingVertical: 14,
              paddingHorizontal: 16,
              marginBottom: 11,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QixVuhYNuV/fi03m08n_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 22,
                height: 20,
                marginRight: 11,
              }}
            />
            <View>
              <Text
                style={{
                  color: "#000001",
                  fontSize: 12,
                }}
              >
                {"vibrate When Alarm Sound"}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
              }}
            ></View>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#C58BF2", "#EEA4CE"]}
              style={{
                borderRadius: 50,
                paddingVertical: 5,
                paddingLeft: 28,
                paddingRight: 5,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QixVuhYNuV/gz8akxhd_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 14,
                }}
              />
            </LinearGradient>
          </View>
          <TouchableOpacity onPress={() => router.push("/sound")}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                paddingVertical: 14,
                paddingHorizontal: 13,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QixVuhYNuV/jeuho0c4_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 14,
                }}
              />
              <Text
                style={{
                  color: "#000001",
                  fontSize: 12,
                }}
              >
                {"Sound"}
              </Text>
              <View
                style={{
                  flex: 1,
                }}
              ></View>
              <Text
                style={{
                  color: "#4E3321",
                  fontSize: 10,
                  marginRight: 6,
                }}
              >
                {params.sound || "Select Sound"}
              </Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QixVuhYNuV/zvrr8q5f_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 22,
                  height: 20,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#4E3321",
            borderRadius: 99,
            paddingVertical: 19,
            marginBottom: 32,
            marginHorizontal: 20,
            shadowColor: "#95ADFE4D",
            shadowOpacity: 0.3,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowRadius: 22,
            elevation: 22,
          }}
          onPress={() => {
            const bedHour = parseInt((params.bedHour as string) || "0");
            const bedMinute = parseInt((params.bedMinute as string) || "0");
            const sleepHour = parseInt((params.sleepHour as string) || "0");
            const sleepMinute = parseInt((params.sleepMinute as string) || "0");

            let totalMinute = bedMinute + sleepMinute;
            let extraHour = Math.floor(totalMinute / 60);
            totalMinute = totalMinute % 60;

            let totalHour = bedHour + sleepHour + extraHour;

            // chuyển về 12h
            let ampm = "AM";
            if (totalHour >= 12) ampm = "PM";
            if (totalHour > 12) totalHour -= 12;
            if (totalHour === 0) totalHour = 12;

            const bed = `${params.bedHour}:${params.bedMinute} ${params.bedAmpm}`;
            const al = `${totalHour.toString().padStart(2, "0")}:${totalMinute
              .toString()
              .padStart(2, "0")} ${ampm}`;

            setBedtime(bed);
            setAlarm(al);

            router.replace("/sleepschedule");
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {"Add"}
          </Text>
        </TouchableOpacity>

        {/* <Text>{params.alarmName ?? ""}</Text>
<Text>{params.hour}:{params.minute} {params.ampm}</Text>
<Text>{params.sleepHour}h {params.sleepMinute}m</Text> */}
      </ScrollView>
    </SafeAreaView>
  );
}
