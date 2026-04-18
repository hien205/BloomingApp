import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import { register } from "../services/auth";
import { Alert } from "react-native";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native";

export default function CompleteProfile() {
   const router = useRouter();
   const [password, setPassword] = useState("");
   const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const handleRegister = async () => {
  try {
    if (!name || !email || !password || !phone) {
    Alert.alert("Warning", "Please fill in all required fields");
    return;
  }
    const res = await register(name, email, password);

    console.log(res);

    if (res.message === "Register success" || res.message === "Register successful") {
  Alert.alert("Success", "Register successful");
  router.push("/login");
} else {
  Alert.alert("Error", res.message);
}
  } catch (err) {
    console.log(err);
    Alert.alert("Error", "Không kết nối server");
  }
};

  const onChangeDate = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    setShowDate(false);
    if (selectedDate) setDate(selectedDate);
  };

  return (
    <SafeAreaView style={styles.container}>
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>

        <Text style={styles.title}>Complete your profile</Text>

        <View style={styles.avatarContainer}>
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
        </View>

        <Text style={styles.subtitle}>
          We’ll use this information to personalize your experience
        </Text>

        <TextInput
          placeholder="Full name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

      
<TextInput
  placeholder="Password"
  value={password}
  onChangeText={setPassword}
  secureTextEntry={!showPass}
  style={styles.input}
/>

        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowDate(true)}
        >
          <Text>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>

        {showDate && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          keyboardType="phone-pad"
        />

        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={handleRegister}> 
            <LinearGradient
              colors={["#7B5E4B", "#60575280"]}
              
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                Sign up
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

      </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7B5E4B",
    textAlign: "center",
    marginBottom: 20,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ddd",
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    justifyContent: "center",
  },
  buttonWrapper: {
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});