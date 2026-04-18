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

export default function Question3() {
  const router = useRouter();

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const isEnabled = selectedTags.length > 0;

  const tags = [
    "Introvert",
    "Afraid of people",
    "Neuroticism",
    "Sensitive",
    "Easy feel sad",
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E8DCD8" }}>
      <ScrollView contentContainerStyle={{ paddingTop: 64, paddingBottom: 40 }}>

        {/* HEADER */}
                <TouchableOpacity
          onPress={() => router.replace("/question2")} 
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
        <Text style={{
          color: "#4E3321",
          fontSize: 26,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 24,
          paddingHorizontal: 24,
        }}>
          How would you describe yourself?
        </Text>

        {/* IMAGE */}
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ewEkRsTfBt/mw4pg9qb_expires_30_days.png",
          }}
          style={{
            height: 180,
            marginHorizontal: 24,
            marginBottom: 24,
            borderRadius: 16,
          }}
          resizeMode="cover"
        />

        {/* TAG BOX */}
        <View style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 24,
          padding: 16,
          marginHorizontal: 24,
          marginBottom: 24,
        }}>

          <View style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}>
            {tags.map((tag, index) => {
              const isSelected = selectedTags.includes(tag);

              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => toggleTag(tag)}
                  style={{
                    backgroundColor: isSelected ? "#F48BA1" : "#FFF1F3",
                    borderRadius: 20,
                    paddingVertical: 6,
                    paddingHorizontal: 12,
                    marginRight: 8,
                    marginBottom: 8,
                  }}
                >
                  <Text style={{
                    color: isSelected ? "#FFFFFF" : "#F48BA1",
                    fontWeight: "bold",
                    fontSize: 14,
                  }}>
                    {tag}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* SCORE */}
          <View style={{ alignItems: "flex-end", marginTop: 12 }}>
            <Text style={{ color: "#736A66", fontWeight: "bold" }}>
              {selectedTags.length}/10
            </Text>
          </View>
        </View>

        {/* CONTINUE BUTTON */}
        <View style={{ paddingHorizontal: 24 }}>
          <TouchableOpacity
            disabled={!isEnabled}
            onPress={() => router.push("/endquestion")}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: isEnabled ? "#7B5E4B" : "#7B5E4B80",
              borderRadius: 999,
              paddingVertical: 16,
            }}
          >
            <Text style={{
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: "bold",
              marginRight: 10,
            }}>
              Continue
            </Text>

            <Text style={{ color: "#fff", fontSize: 18 }}>→</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}