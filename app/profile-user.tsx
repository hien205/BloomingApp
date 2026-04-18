import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
export default function ProfileUser() {
	const [name, setName] = useState("Arya Muller");
	const [editing, setEditing] = useState(false);
    const router = useRouter();

	const [avatar, setAvatar] = useState(
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b16c808-6d47-4242-92cb-f1d065afbbb6"
);
useEffect(() => {
  const loadAvatar = async () => {
    const saved = await AsyncStorage.getItem("avatar");
    if (saved) setAvatar(saved);
  };
  loadAvatar();
}, []);


const pickImage = async () => {
  const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!permission.granted) {
    alert("Cần cấp quyền truy cập ảnh!");
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
  });

  if (!result.canceled) {
    const uri = result.assets[0].uri;
    setAvatar(uri);
    await AsyncStorage.setItem("avatar", uri);
  }
};

	useEffect(() => {
  const loadName = async () => {
    try {
      const savedName = await AsyncStorage.getItem("username");
      if (savedName !== null) {
        setName(savedName);
      }
    } catch (e) {
      console.log("Load name error", e);
    }
  };

  loadName();
}, []);


    	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<View style={styles.box}>
					</View>
					<TouchableOpacity onPress={pickImage}>
  					<Image
    					source={{ uri: avatar }}
    					style={styles.image}
  					/>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => setEditing(true)}>
  					<Image
    					source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/361447ae-d886-48c5-9518-8ba5b18a6469"}}
    					style={styles.image2}
  					/>
					</TouchableOpacity>
					
				</View>
				<View style={styles.view}>
					{editing ? (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <TextInput
  value={name}
  onChangeText={setName}
  style={styles.text}
  autoFocus={true}
/>

    <TouchableOpacity
      onPress={async () => {
        setEditing(false);
        await AsyncStorage.setItem("username", name);
      }}
    >
      <Text style={{ fontSize: 18, marginLeft: 10 }}>✔</Text>
    </TouchableOpacity>
  </View>
) : (
  <Text style={styles.text}>{name}</Text>
)}
				</View>
				<View style={styles.row2}>
					<View style={styles.row3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6bb470c-c179-400a-a1b3-b668fa01c457"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<Text style={styles.text2}>
							{"55 \nStreak"}
						</Text>
					</View>
					<View style={styles.row4}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81f5b730-f4ea-4ced-a4e2-caff29d81dd5"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
						<Text style={styles.text3}>
							{"Good\nMindful eating "}
						</Text>
					</View>
				</View>
				<View style={styles.row5}>
					<View style={styles.row3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fdfec9e-e07f-4160-879f-ddcd41401f8e"}} 
							resizeMode = {"stretch"}
							style={styles.image5}
						/>
						<Text style={styles.text4}>
							{"83%\nSleep routine"}
						</Text>
					</View>
					<View style={styles.row4}>
						<View style={styles.view2}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51024609-37df-4a42-8df4-645403588700"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
						</View>
						<Text style={styles.text5}>
							{"86% \nBare soul"}
						</Text>
					</View>
				</View>
				<Text style={styles.text6}>
					{"SPEND TIME ON"}
				</Text>
				<View style={styles.column}>
					<View style={styles.row6}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bdced92-94bc-4bd4-8f88-15af97717e89"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<View style={styles.column2}>
							<Text style={styles.text7}>
								{"Mindful eating"}
							</Text>
							<LinearGradient
start={{x:1, y:-0}}
								end={{x:1, y:1}}
								colors={["#C58BF2", "#EEA4CE"]}
								style={styles.box2}>
							</LinearGradient>
						</View>
						<View style={styles.box3}>
						</View>
						<Text style={styles.text8}>
							{"18% "}
						</Text>
					</View>
					<View style={styles.row6}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a950da98-a2c9-416c-b7a1-6a4efae59e1c"}} 
							resizeMode = {"stretch"}
							style={styles.image8}
						/>
						<View style={styles.column3}>
							<Text style={styles.text9}>
								{"Mindfulness meditation"}
							</Text>
							<LinearGradient 
								start={{x:1, y:-0}}
								end={{x:1, y:1}}
								colors={["#C58BF2", "#EEA4CE"]}
								style={styles.box2}>
							</LinearGradient>
						</View>
						<Text style={styles.text8}>
							{"35% "}
						</Text>
					</View>
					<View style={styles.row7}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13ed33f6-5b4d-4c10-8118-f8b79037de8a"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<View style={styles.column2}>
							<Text style={styles.text10}>
								{"Bare soul, open heart"}
							</Text>
							<LinearGradient 
								start={{x:1, y:-0}}
								end={{x:1, y:1}}
								colors={["#C58BF2", "#EEA4CE"]}
								style={styles.box2}>
							</LinearGradient>
						</View>
						<View style={styles.box3}>
						</View>
						<Text style={styles.text11}>
							{"40% "}
						</Text>
					</View>
				</View>
			</ScrollView>
            <View style={styles.row8}>

  <TouchableOpacity style={styles.tabItem} onPress={() => router.back()}>
    <Image
      source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18d49d12-6d88-4226-8850-2ab9cb035464" }}
      style={styles.tabIcon}
    />
    <Text style={styles.tabText}>Health</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => router.replace("/journaling")} style={styles.tabItem}>
    <Image
      source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06a73107-c48e-4dd3-9e96-a9a42213a5a5" }}
      style={styles.tabIcon}
    />
    <Text style={styles.tabText}>Expression</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.tabItem}
    onPress={() => router.replace("/AISchedule")}
  >
    <Image
      source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a82fe464-a453-46b7-a299-b89ae490635c" }}
      style={styles.tabIcon}
    />
    <Text style={styles.tabText}>Appointments</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.tabItem}>
    <Image
      source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf502639-1fcd-4bbb-9042-e2ecee904697" }}
      style={styles.tabIcon}
    />
    <Text style={styles.text14}>Profile</Text>
  </TouchableOpacity>

</View>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	box: {
		width: 28,
		height: 28,
	},
	box2: {
		width: 151,
		height: 10,
		borderRadius: 123,
	},
	box3: {
		flex: 1,
	},
	column: {
		backgroundColor: "#FFFFFF",
		borderRadius: 24,
		paddingVertical: 25,
		paddingHorizontal: 24,
		marginBottom: 72,
		marginHorizontal: 33,
	},
	column2: {
		marginTop: 2,
	},
	column3: {
		flex: 1,
		marginTop: 2,
		marginRight: 37,
	},
	column4: {
		flex: 1,
		alignItems: "center",
	},
	column5: {
		flex: 1,
		alignItems: "center",
	},
	image: {
		
  		width: 106,
  		height: 106,
  		borderRadius: 53, // 1/2 width & height
  		borderWidth: 2,
  		borderColor: "#F48BA1", // viền nhẹ giống app xịn
},
	image2: {
		width: 28,
		height: 28,
	},
	image3: {
		width: 28,
		height: 29,
		marginLeft: 17,
		marginRight: 18,
	},
	image4: {
		borderRadius: 17,
		width: 28,
		height: 29,
		marginLeft: 17,
		marginRight: 13,
	},
	image5: {
		borderRadius: 17,
		width: 28,
		height: 30,
		marginLeft: 20,
		marginRight: 11,
	},
	image6: {
		width: 34,
		height: 34,
	},
	image7: {
		width: 40,
		height: 34,
		marginRight: 13,
	},
	image8: {
		width: 40,
		height: 34,
		marginRight: 14,
	},
	image9: {
		width: 20,
		height: 20,
		marginBottom: 4,
	},
	image10: {
		width: 20,
		height: 20,
		marginBottom: 4,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 27,
		marginHorizontal: 27,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 13,
		marginHorizontal: 31,
		shadowColor: "#A6AABC80",
		shadowOpacity: 0.5,
		shadowOffset: {
		    width: 2.477119207382202,
		    height: 2.477119207382202
		},
		shadowRadius: 18,
		elevation: 18,
	},
	row3: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 17,
		paddingVertical: 21,
		marginRight: 16,
	},
	row4: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 17,
		paddingVertical: 19,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 15,
		marginHorizontal: 31,
	},
	row6: {
		flexDirection: "row",
		marginBottom: 27,
	},
	row7: {
		flexDirection: "row",
	},
	row8: {
		flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  borderTopWidth: 1,
  borderColor: "#EEEEEE",
  paddingVertical: 10,
	
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F7F4F2",
		paddingTop: 74,
	},
	text: {
		color: "#000000",
		fontSize: 24,
		fontWeight: "bold",
	},
	text2: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
	},
	text3: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		flex: 1,
	},
	text4: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		marginRight: 6,
		flex: 1,
	},
text5: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		width: 64,
	},
	text6: {
		color: "#9098A3",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 14,
		marginLeft: 34,
	},
	text7: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 7,
		marginLeft: 1,
		marginRight: 48,
	},
	text8: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		marginTop: 22,
	},
	text9: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 10,
		marginLeft: 2,
	},
	text10: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 8,
	},
	text11: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		marginTop: 23,
	},
	text12: {
		color: "#7B5E4B",
		fontSize: 10,
		
	},
	text13: {
		color: "#F48BA",
		fontSize: 10,
	},
	text14: {
		color: "#F48BA1",
		fontSize: 10,
		fontWeight: "bold"
	},
	
	view: {
		alignItems: "center",
		marginBottom: 68,
	},
	view2: {
		marginHorizontal: 13,
	},
	tabItem: {
  	flex: 1,
  	alignItems: "center",
  	justifyContent: "center",
},

tabIcon: {
  width: 22,
  height: 22,
  marginBottom: 4,
},

tabText: {
  fontSize: 10,
  color: "#7B5E4B",
},
});