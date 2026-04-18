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

export default function Question1() {
  const router = useRouter();

  const [selected, setSelected] = useState<number | null>(null);

  const options: string[] = [
    "I wanna reduce stress",
    "I wanna try CUHK AI Therapy",
    "I want to cope with trauma",
    "I want to be a better person",
    "Just trying out the app, mate!",
  ];

  const isEnabled = selected !== null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E8DCD8" }}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 64,
          paddingBottom: 24,
        }}
      >
        {/* HEADER */}
		<TouchableOpacity
  onPress={() => router.back
	()
  } // 👈 QUAN TRỌNG
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
        

        {/* CONTENT */}
        <View style={{ paddingHorizontal: 24 }}>
          {/* TITLE */}
          <Text
            style={{
              color: "#4E3321",
              fontSize: 28,
              fontWeight: "bold",
              marginBottom: 28,
              textAlign: "center",
            }}
          >
            What’s your health goal?
          </Text>

          {/* OPTIONS */}
          {options.map((item, index) => {
            const isSelected = selected === index;

            return (
              <TouchableOpacity
                key={index}
                onPress={() => setSelected(index)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: isSelected ? "#F3E8E3" : "#FFFFFF",
                  borderRadius: 999,
                  paddingVertical: 16,
                  paddingHorizontal: 20,
                  marginBottom: 12,
                  borderWidth: isSelected ? 1.5 : 0,
                  borderColor: "#7B5E4B",
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    color: "#4E3321",
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  {item}
                </Text>

                {isSelected && (
                  <Text style={{ fontSize: 18, color: "#7B5E4B" }}>✓</Text>
                )}
              </TouchableOpacity>
            );
          })}

          {/* BUTTON */}
          <TouchableOpacity
            disabled={!isEnabled}
            onPress={() =>
              router.push({
                pathname: "/question2",
                params: { answer: options[selected!] },
              })
            }
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: isEnabled ? "#7B5E4B" : "#7B5E4B80",
              borderRadius: 999,
              paddingVertical: 16,
              width: "100%",
              marginTop: 8,
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