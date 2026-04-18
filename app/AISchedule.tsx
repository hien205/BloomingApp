import { LinearGradient } from 'expo-linear-gradient';
import { usePathname, useRouter } from "expo-router";

import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useCallback } from "react";

export default function AISchedule() {
    const router = useRouter();
	const pathname = usePathname();
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
  }, [])
);
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.header}>
  {/* LEFT (back hoặc icon) */}
  <TouchableOpacity onPress={() => router.back()}>
    <Image
      source={{
        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/phk9o67e_expires_30_days.png",
      }}
      style={styles.headerIcon}
    />
  </TouchableOpacity>

  {/* CENTER */}
  <View style={styles.headerCenter}>
   <Text style={styles.text}>
		{"Hi " + name + " !!"}
	</Text>
    <Text style={styles.text2}>Good Morning</Text>
  </View>

  {/* RIGHT (avatar) */}
  <TouchableOpacity onPress={() => router.push("/profile-user")}>
    <Image
       source={{ uri: avatar || "https://via.placeholder.com/40" }}
      style={styles.avatar}
    />
  </TouchableOpacity>
</View>
				<View style={styles.row2}>
					<View style={styles.column}>
						<Text style={styles.text3}>
							{"Pause and plan ahead"}
						</Text>
						<Text style={styles.text4}>
							{"A small appointment today can bring big peace tomorrow."}
						</Text>
					</View>
					<View style={styles.column2}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9csBS2OSxR/vn4e4xyn_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9csBS2OSxR/xvo5fdkv_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.absoluteImage}
						/>
					</View>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9csBS2OSxR/uugti239_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={styles.absoluteImage2}
					/>
				</View>
				<View style={styles.row3}>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text5}>
							{"AI Scheduling"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button2} onPress={()=> router.push("/doctorin4")}>
						<Text style={styles.text6}>
							{"Doctor’s Information"}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.column3}>
					<LinearGradient 
						start={{x:0, y:0}}
						end={{x:0, y:1}}
						colors={["#F48BA19C", "#FFFFFF4D"]}
						style={styles.column4}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9csBS2OSxR/an91dzdi_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9csBS2OSxR/gik0rtad_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.absoluteImage3}
						/>
						<View style={styles.absoluteView}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9csBS2OSxR/847n6hze_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.image4}
							/>
</View>
					</LinearGradient>
					<View style={styles.absoluteView2}>
						<Text style={styles.text7}>
							{"Schedule a Session"}
						</Text>
					</View>
				</View>
				<Text style={styles.text8}>
					{"Talk to a professional for guidance to recovery"}
				</Text>
				
				<TouchableOpacity onPress={() => router.push("/confideAI")}>
					<View style={styles.view}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9csBS2OSxR/kqs37n8a_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={styles.image5}
					/>
				</View>
					</TouchableOpacity>
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9csBS2OSxR/41ux3bdl_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={styles.image6}
				/>
			</ScrollView>
            <View style={styles.bottomTab}>
      <View style={styles.tabRow}>

        {/* Health */}
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.replace("/indexhome")}
        >
          <Image
            source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/529e09df-6c06-4eae-a261-4f64fcea06d7",
            }}
            style={styles.tabIcon}
          />
          <Text style={pathname === "/indexhome" ? styles.tabActiveText : styles.tabText}>
            Health
          </Text>
        </TouchableOpacity>

        {/* Expression */}
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.replace("/journaling")}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/qglghqbr_expires_30_days.png",
            }}
            style={styles.tabIcon}
          />
          <Text style={pathname === "/expression" ? styles.tabActiveText : styles.tabText}>
            Expression
          </Text>
        </TouchableOpacity>

        {/* Appointments */}
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.replace("/")}
        >
          <Image
            source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95c12eca-d5f6-4430-a716-bfa4e4adf398",
            }}
            style={styles.tabIcon}
          />
          <Text style={pathname === "/AISchedule" ? styles.tabActiveText : styles.tabText}>
            Appointments
          </Text>
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.replace("/profile-user")}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/45638hlp_expires_30_days.png",
            }}
            style={styles.tabIcon}
          />
          <Text style={pathname === "/profile-user" ? styles.tabActiveText : styles.tabText}>
            Profile
          </Text>
        </TouchableOpacity>

      </View>
    </View>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F7F4F2",
	},
	absoluteImage: {
		position: "absolute",
		bottom: -15,
		right: -14,
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
	absoluteImage3: {
		position: "absolute",
		top: 69,
		right: 60,
		width: 16,
		height: 36,
	},
	absoluteView: {
		position: "absolute",
		bottom: 15,
		right: 0,
		left: 0,
		alignItems: "center",
	},
	absoluteView2: {
		position: "absolute",
		bottom: -7,
		right: 0,
		left: 0,
		alignItems: "center",
	},
	box: {
		width: 134,
		height: 5,
		backgroundColor: "#4E3321",
		borderRadius: 100,
	},
	button: {
		backgroundColor: "#F48BA1",
		borderRadius: 128,
paddingVertical: 6,
		paddingHorizontal: 16,
	},
	button2: {
		backgroundColor: "#F5F5F5",
		borderRadius: 128,
		paddingVertical: 6,
		paddingHorizontal: 16,
	},
	column: {
		flex: 1,
		marginTop: 43,
		marginRight: 22,
	},
	column2: {
		flex: 1,
		marginTop: 15,
	},
	column3: {
		marginBottom: 28,
	},
	column4: {
		alignItems: "center",
		paddingTop: 1,
	},
    column5: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    },
	column6: {
		flex: 1,
		alignItems: "center",
		marginRight: 17,
	},
	column7: {
		flex: 1,
		alignItems: "center",
	},
	image: {
		width: 39,
		height: 39,
	},
	image2: {
		width: 171,
		height: 139,
	},
	image3: {
		width: 254,
		height: 153,
		marginBottom: 29,
	},
	image4: {
		width: 119,
		height: 75,
	},
	image5: {
		width: 84,
		height: 84,
	},
	image6: {
		width: 14,
		height: 14,
		marginBottom: 3,
		marginLeft: 78,
	},
	image7: {
		width: 14,
		height: 20,
		marginBottom: 6,
	},
	image8: {
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
		marginBottom: 59,
		marginHorizontal: 16,
	},
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 25,
		marginHorizontal: 30,
	},
	row4: {
		alignSelf: "stretch",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 2,
		marginHorizontal: 20,
        
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F7F4F2",
		paddingTop: 74,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	text: {
		color: "#9E9E9E",
		fontSize: 10,
		fontWeight: "bold",
		marginBottom: 4,
		marginRight: -5,
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
		marginBottom: 7,
		width: 139,
	},
	text4: {
		color: "#5F5F5F",
		fontSize: 12,
	},
	text5: {
		color: "#FFFFFF",
		fontSize: 10,
		fontWeight: "bold",
	},
	text6: {
		color: "#9E9E9E",
		fontSize: 10,
		fontWeight: "bold",
	},
	text7: {
		color: "#000000",
		fontSize: 26,
		fontWeight: "bold",
	},
	text8: {
		color: "#5F5F5F",
		fontSize: 16,
		textAlign: "center",
		marginBottom: 20,
		marginLeft: 63,
		width: 285,
	},
	text9: {
		color: "#7B5E4B",
		fontSize: 10,
		fontWeight: "bold",
	},
	text10: {
		color: "#9E9E9E",
		fontSize: 8,
	},
	view: {
		alignItems: "center",
		marginBottom: 10,
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
    width: 22,
    height: 24,
    marginBottom: 5,
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
  header: {
  flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: -60,
},

headerCenter: {
  flex: 1,
  alignItems: "center",
},

headerIcon: {
  borderRadius: 999,
    width: 39,
    height: 39,
},

avatar: {
  width: 40,
  height: 40,
  borderRadius: 20,
},



});
