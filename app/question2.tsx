import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Question2Screen() {
  const router = useRouter();

  const [selected, setSelected] = useState<"male" | "female" | null>(null);

  const isEnabled = selected !== null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E8DCD8" }}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 64,
          paddingBottom: 40,
        }}
      >
        {/* HEADER */}
                <TouchableOpacity
          onPress={() => router.replace("/question1")} // 
          style={{
            marginRight: 10,
            padding: 5,
          }}
        >
            <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 32,
                    paddingHorizontal: 20,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ewEkRsTfBt/h8qfgief_expires_30_days.png",
                    }}
                    style={{ width: 48, height: 48, marginRight: 12 }}
                  />
        
                  <Text style={{ color: "#4E3321", fontSize: 20, fontWeight: "bold" }}>
                    Assessment
                  </Text>
        
                  <View style={{ flex: 1 }} />
        
                  <View
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: 20,
                      paddingVertical: 6,
                      paddingHorizontal: 12,
                    }}
                  >
                    <Text style={{ color: "#926247", fontWeight: "bold" }}>
                      1 of 24
                    </Text>
                  </View>
                </View>
        </TouchableOpacity>

        {/* TITLE */}
        <Text
          style={{
            color: "#4E3321",
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 32,
            paddingHorizontal: 40,
          }}
        >
          What’s your official gender?
        </Text>

        {/* OPTIONS */}
        <View style={{ paddingHorizontal: 24 }}>
          {/* MALE */}
          <TouchableOpacity
            onPress={() => setSelected("male")}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 24,
              padding: 16,
              marginBottom: 16,
              borderWidth: selected === "male" ? 2 : 0,
              borderColor: "#7B5E4B",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/images/male.png")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 16,
                  marginRight: 16,
                }}
                resizeMode="contain"
              />

              <Text
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#4E3321",
                }}
              >
                I am Male
              </Text>

              {selected === "male" && (
                <Text style={{ fontSize: 18, color: "#7B5E4B" }}>✓</Text>
              )}
            </View>
          </TouchableOpacity>

          {/* FEMALE */}
          <TouchableOpacity
            onPress={() => setSelected("female")}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 24,
              padding: 16,
              marginBottom: 16,
              borderWidth: selected === "female" ? 2 : 0,
              borderColor: "#7B5E4B",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/images/female.png")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 16,
                  marginRight: 16,
                }}
                resizeMode="contain"
              />

              <Text
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#4E3321",
                }}
              >
                I am Female
              </Text>

              {selected === "female" && (
                <Text style={{ fontSize: 18, color: "#7B5E4B" }}>✓</Text>
              )}
            </View>
          </TouchableOpacity>

          {/* SKIP */}
          <TouchableOpacity
            onPress={() => router.push("/question3")}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 999,
              paddingVertical: 16,
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <Text
              style={{
                color: "#7B5E4B",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Prefer to skip, thanks
            </Text>
          </TouchableOpacity>
        </View>

        {/* BUTTON */}
        <View style={{ paddingHorizontal: 24, marginTop: 32 }}>
          <TouchableOpacity
            disabled={!isEnabled}
            onPress={() =>
              router.push({
                pathname: "/question3",
                params: { gender: selected },
              })
            }
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: isEnabled ? "#7B5E4B" : "#7B5E4B80",
              borderRadius: 999,
              paddingVertical: 16,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              Continue
            </Text>

            <Text style={{ color: "#fff", fontSize: 18 }}>→</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}