import React, { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  mood: string | null;
  activity: { name: string; image: string } | null;
  openActivity: () => void;
  selectedDay: number | null;
  onSave: (data: {
    content: string;
    activity: { name: string; image: string } | null;
  }) => void;
};
export default function WriteScreen({ mood, activity, openActivity, onSave  }: Props) {
  const [content, setContent] = useState("");
const moodImage: ImageSourcePropType =
  mood === "happy"
    ? require("../assets/images/happy.png")
    : mood === "fun"
    ? require("../assets/images/fun.png")
    : mood === "sad"
    ? { uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/rapaxtjj_expires_30_days.png" }
    : mood === "neutral"
    ? { uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/ywnbzxvn_expires_30_days.png" }
    : { uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/msggubow_expires_30_days.png" };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={{ flex: 1 }}>

        <View
          style={{
            backgroundColor: "#F7F4F2",
            borderTopLeftRadius: 33,
            borderTopRightRadius: 33,
            paddingTop: 38,
            paddingRight: 20,
          }}
        >
          {/* HEADER */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 11,
              marginLeft: 20,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/seuu7pho_expires_30_days.png",
              }}
              style={{ width: 21, height: 25 }}
            />

            {/* MOOD */}


<Image
  source={moodImage}
  style={{ width: 40, height: 40 }}
/>

 <TouchableOpacity
  onPress={() => {
    onSave({
      content,
      activity
    });
  }}
>
  <Image
    source={{
      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/zrnzvx3i_expires_30_days.png",
    }}
    style={{ width: 25, height: 20 }}
  />
</TouchableOpacity>
          </View>

          {/* INPUT */}
          <View style={{ marginBottom: 16, marginLeft: 20 }}>
            <View
              style={{
                backgroundColor: "#FFFFFFB3",
                borderRadius: 22,
                padding: 20,
                elevation: 4,
              }}
            >
              <TextInput
                placeholder="Record your day..."
                value={content}
                onChangeText={setContent}
                multiline
                style={{
                  color: "#1170AF",
                  fontSize: 16,
                  minHeight: 200,
                }}
              />
            </View>
          </View>
<TouchableOpacity onPress={() => console.log("Chọn Hashtags")} 
style={{ 
  alignSelf: "flex-start", 
  flexDirection: "row", 
  alignItems: "center", 
  backgroundColor: "#F5F5F5BF", 
  borderRadius: 32, 
  marginLeft: 23, 
  paddingVertical: 6, 
  paddingRight: 16, }} > 
  <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/tg79o5id_expires_30_days.png" }} 
  style={{ 
    width: 26, 
    height: 26, 
    marginLeft: 9, 
    marginRight: 6, }} /> 
    <Text style={{ fontSize: 18 }}> Media </Text> 
    </TouchableOpacity>
          {/* 🔥 ACTIVITY BUTTON */}
          <TouchableOpacity
            onPress={openActivity}
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F5F5F5BF",
              borderRadius: 32,
              paddingVertical: 6,
              marginLeft: 23,
              paddingRight: 16,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/121schu2_expires_30_days.png",
              }}
              style={{
                width: 26,
                height: 26,
                marginLeft: 9,
                marginRight: 6,
              }}
            />

            <Text style={{ fontSize: 18 }}>
              {activity ? activity.name : "Activities"}
            </Text>
          </TouchableOpacity>

          {/* 🔥 HIỂN THỊ ẢNH ACTIVITY */}
          {activity && (
            <View style={{ marginLeft: 23, marginTop: 10 }}>
              <Image
                source={{ uri: activity.image }}
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 12,
                }}
              />
            </View>
          )}
<TouchableOpacity onPress={() => console.log("Chọn Hashtags")} 
style={{ 
  alignSelf: "flex-start", 
  flexDirection: "row", 
  alignItems: "center", 
  backgroundColor: "#F5F5F5BF", 
  borderRadius: 32,  
  marginLeft: 23, 
  paddingVertical: 6, 
  paddingRight: 16, }} > 
  <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/tg79o5id_expires_30_days.png" }} 
  style={{ 
    width: 26, 
    height: 26, 
    marginLeft: 9, 
    marginRight: 6, }} /> 
    <Text style={{ fontSize: 18 }}> Hashtags </Text> 
    </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}