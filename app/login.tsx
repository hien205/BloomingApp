import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../services/auth"; // ✅ đúng
import { useRouter } from "expo-router";
export default function LoginScreen() {
    const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // 🔥 HANDLE LOGIN
  const handleLogin = async () => {
  try {
    const res = await login(email, password);

    console.log("LOGIN RESPONSE:", res);

    if (res?.token && res?.user) {
      await AsyncStorage.setItem("token", res.token);
      await AsyncStorage.setItem("username", res.user.name);

      Alert.alert("Success", "Login successful!");

      router.replace("/checkinmiddle");
    } else {
      Alert.alert("Error", res?.message || "Incorrect email or password");
    }
  } catch (error) {
    console.log(error);
    Alert.alert("Error", "Không kết nối server");
  }
};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView
       behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>

          {/* 🔥 LOGO */}
          <View style={{ alignItems: "center", marginTop: 40 }}>
            <Image
              source={require("../assets/images/logo.png")} // 👉 sửa đường dẫn đúng hình của bạn
              resizeMode="cover"
              style={{
                width: 140,
                height: 140,
                borderRadius: 70,
              }}
            />
          </View>

          {/* Title */}
          <Text
            style={{
              fontSize: 26,
              fontWeight: "bold",
              textAlign: "center",
              marginVertical: 30,
              color: "#7B5E4B"
            }}
          >
            Please enter your account
          </Text>

          {/* Email */}
          <TextInput
            placeholder="Your Email..."
            value={email}
            onChangeText={setEmail}
            style={inputStyle}
          />

          {/* Password */}
          <TextInput
            placeholder="Your Password..."
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={inputStyle}
          />

          {/* Button */}
          <TouchableOpacity onPress={handleLogin}>
            <LinearGradient
              colors={["#7B5E4B", "#2e160680"]}
              style={buttonStyle}
            >
              <Text style={buttonText}>Log in</Text>
              
            </LinearGradient>



          </TouchableOpacity>
          {/* 🔥 SIGN UP */}
<View style={{ alignItems: "center", marginTop: 20 }}>
  <Text style={{ color: "#666" }}>
    Don’t have an account?{" "}
    <Text
      style={{ color: "#7B5E4B", fontWeight: "bold" }}
      onPress={() => router.push("/register")}
    >
      Sign up
    </Text>
  </Text>
</View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// 🎯 styles
const inputStyle = {
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 15,
  padding: 15,
  marginBottom: 15,
};

const buttonStyle = {
  padding: 15,
  borderRadius: 15,
  alignItems: "center" as const,
};

const buttonText = {
  color: "#fff",
  fontWeight: "bold" as const,
  fontSize: 16,
};