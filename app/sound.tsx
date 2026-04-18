import React from "react";
import { View, ScrollView, Text, Image, StyleSheet, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
export default function SoundScreen() {
	const router = useRouter();
const navigation = useNavigation();

const handleSelectSound = (soundName: string) => {
  router.replace({
    pathname: "/addalarm", // sửa đúng screen trước
    params: { sound: soundName },
  });

};
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Text style={styles.text}>
						{"Cancel"}
					</Text>
					<Text style={styles.text2}>
						{"Save"}
					</Text>
				</View>

				<TouchableOpacity onPress={() => handleSelectSound("Life of Prophet Shu'aib, Bangla")}>
					<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad473f8f-f98e-477c-bfe6-87257b5e0467"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<View style={styles.row3}>
						<View >
							<Text style={styles.text3}>
								{"Life of Prophet Shu'aib, Bangla"}
							</Text>
							<Text style={styles.text4}>
								{"Baseera Media"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90160639-80a1-4672-a80e-797919ac88bf"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
				</View>
				</TouchableOpacity>
				
				<TouchableOpacity onPress={() => handleSelectSound("Yusuf (AS), enthroned from prison")}>
					<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7a883ec-11d8-4e98-85eb-aa74ddee9279"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<View style={styles.row3}>
						<View >
							<Text style={styles.text3}>
								{"Yusuf (AS), enthroned from prison"}
							</Text>
							<Text style={styles.text5}>
								{"Baseera Media"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8743206-89ca-47f4-bc42-da423ea8d6ef"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
				</View>
				</TouchableOpacity>
				

				<TouchableOpacity onPress={() => handleSelectSound("Meaning of Tahajjud")}>
					<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6bda4573-8867-4bb7-ab8f-6186244fc9d6"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<View style={styles.row3}>
						<View >
							<Text style={styles.text3}>
								{"Meaning of Tahajjud"}
							</Text>
							<Text style={styles.text6}>
								{"Baseera Media"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51851668-2c66-4f8c-bcdf-da9c84922deb"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
				</View>
				</TouchableOpacity>
				

				<TouchableOpacity onPress={() => handleSelectSound("Ishaq and Yakub (AS) Story")}>
					<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61cacf49-ba00-4a76-aeb8-c1bc74d5f0f8"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<View style={styles.row3}>
						<View >
							<Text style={styles.text3}>
								{"Ishaq and Yakub (AS) Story"}
							</Text>
							<Text style={styles.text7}>
								{"Baseera Media"}
							</Text>
						</View>
						<Image
source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88642e91-4baf-4240-972e-d3c84c0f5111"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
				</View>
				</TouchableOpacity>
				

				<TouchableOpacity onPress={() => handleSelectSound("Life - Death - Life, Episode 9")}>
					<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1476042f-99d5-4ab6-9877-be0f55302b6d"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<View style={styles.row3}>
						<View >
							<Text style={styles.text3}>
								{"Jahannam (Life - Death - Life, Episode 9)"}
							</Text>
							<Text style={styles.text8}>
								{"Baseera Media"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09e48882-f974-48ee-9b7b-e510b986e108"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
				</View>
				</TouchableOpacity>
				


				<TouchableOpacity onPress={() => handleSelectSound("The words of the Quran - Surah Bakbarah")}>
					<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b30eb856-c348-4f1c-800a-0c63838a3ec8"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<View style={styles.row3}>
						<View >
							<Text style={styles.text3}>
								{"The words of the Quran - Surah Bakbarah"}
							</Text>
							<Text style={styles.text9}>
								{"Baseera Media"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa603d03-9ecd-4fd2-8e41-2fca5c96703e"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
				</View>
				</TouchableOpacity>
				



				<TouchableOpacity onPress={() => handleSelectSound("Sirah 1 - An elite lineage")}>
					<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2d83257-ce23-422a-9724-143575367445"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<View style={styles.row3}>
						<View >
							<Text style={styles.text3}>
								{"Sirah 1 - An elite lineage"}
							</Text>
							<Text style={styles.text10}>
								{"Baseera Media"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9520506-9c2a-46ba-8672-5fc84f6c77c2"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
				</View>
				</TouchableOpacity>
				


				<TouchableOpacity onPress={() => handleSelectSound("Life of Prophet Shu'aib, Bangla")}>
					<View style={styles.row4}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7ddb787-bd62-4c30-8e8f-1d5c2c0707e4"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<View style={styles.row3}>
						<View >
							<Text style={styles.text3}>
								{"Life of Prophet Shu'aib, Bangla"}
							</Text>
							<Text style={styles.text4}>
								{"Baseera Media"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a206a32-f30e-43f0-bbb3-3f43a35a317c"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
				</View>
				</TouchableOpacity>
				
				<TouchableOpacity onPress={() => handleSelectSound("Life of Prophet Shu'aib, Bangla")}>
					<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f25f4be-4e25-421a-89e9-9bed17be8de7"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<View style={styles.row3}>
						<View >
							<Text style={styles.text3}>
								{"Life of Prophet Shu'aib, Bangla"}
							</Text>
							<Text style={styles.text4}>
								{"Baseera Media"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e07410c6-eed5-4376-8253-7148d486ba33"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
				</View>
				</TouchableOpacity>
				
				<TouchableOpacity onPress={() => handleSelectSound("Yusuf (AS), enthroned from prison")}>
					<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/312bf44b-d87b-42cd-a0cb-fd84fff00a66"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<View style={styles.row3}>
						<View >
							<Text style={styles.text3}>
								{"Yusuf (AS), enthroned from prison"}
							</Text>
							<Text style={styles.text5}>
								{"Baseera Media"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3e4ef3e-b92a-470c-89da-3fdefbb69ea5"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
				</View>
				</TouchableOpacity>
				
				<TouchableOpacity onPress={() => handleSelectSound("Meaning of Tahajjud")}>
					<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbb00be9-6b92-4182-8337-fa79955fd5ec"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<View style={styles.row3}>
						<View >
							<Text style={styles.text3}>
								{"Meaning of Tahajjud"}
							</Text>
							<Text style={styles.text6}>
								{"Baseera Media"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f222b62-93f4-4f4d-9503-46ca668b1b0b"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
				</View>
				</TouchableOpacity>
				

				<TouchableOpacity onPress={() => handleSelectSound("Ishaq and Yakub (AS) Story")}></TouchableOpacity>
				<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8b568c7-56bd-4bdd-a541-5197f9542dea"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<View style={styles.row3}>
						<View >
							<Text style={styles.text3}>
								{"Ishaq and Yakub (AS) Story"}
							</Text>
							<Text style={styles.text7}>
								{"Baseera Media"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/504b94e4-3aed-44bb-a8a3-22da6bb73b69"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
				</View>

				<TouchableOpacity onPress={() => handleSelectSound("Jahannam (Life - Death - Life, Episode 9)")}>
					<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6514596d-c5c5-430b-842d-a2379a39fb50"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				<View style={styles.row3}>
						<View >
							<Text style={styles.text3}>
								{"Jahannam (Life - Death - Life, Episode 9)"}
							</Text>
							<Text style={styles.text8}>
								{"Baseera Media"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5860886b-c3cf-489b-9f51-17070a0babd2"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
				</View>
				</TouchableOpacity>
				


				<TouchableOpacity onPress={() => handleSelectSound("The words of the Quran - Surah Bakbarah")}>
					<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95602ae9-13e9-4bce-94c1-7d1022f97ae5"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<View style={styles.row3}>
						<View >
							<Text style={styles.text3}>
								{"The words of the Quran - Surah Bakbarah"}
							</Text>
							<Text style={styles.text9}>
								{"Baseera Media"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b582c784-7b12-4d33-9d23-df4ce066cf5f"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
				</View>
				</TouchableOpacity>
				
				<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a3f4128-f01f-4374-ae33-20ad53aef14e"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<View style={styles.row3}>
						<View >
							<Text style={styles.text3}>
								{"Sirah 1 - An elite lineage"}
							</Text>
							<Text style={styles.text10}>
								{"Baseera Media"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/150e406e-b5be-40cc-957b-dcdcb141c2a0"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
				</View>
				<View style={styles.row5}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae0eba68-f7d8-485c-8288-9867d1382654"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<View style={styles.row3}>
						<View >
							<Text style={styles.text3}>
								{"Life of Prophet Shu'aib, Bangla"}
							</Text>
							<Text style={styles.text4}>
								{"Baseera Media"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/525fcb45-7c45-4e3f-bf00-c4940c798af9"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	image: {
		width: 37,
		height: 29,
		marginRight: 7,
	},
	image2: {
		width: 3,
		height: 15,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 28,
		marginHorizontal: 34,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 16,
marginLeft: 25,
		marginRight: 12,
	},
	row3: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 11,
		marginLeft: 25,
		marginRight: 12,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 25,
		marginRight: 12,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F7F4F2",
		paddingVertical: 51,
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
		color: "#000000",
		fontSize: 14,
	},
	text2: {
		color: "#539CF3",
		fontSize: 14,
	},
	text3: {
		color: "#1E1E1E",
		fontSize: 12,
		marginBottom: 2,
	},
	text4: {
		color: "#1E1E1E",
		fontSize: 10,
		marginRight: 97,
	},
	text5: {
		color: "#1E1E1E",
		fontSize: 10,
		marginRight: 118,
	},
	text6: {
		color: "#1E1E1E",
		fontSize: 10,
		marginRight: 44,
	},
	text7: {
		color: "#1E1E1E",
		fontSize: 10,
		marginRight: 81,
	},
	text8: {
		color: "#1E1E1E",
		fontSize: 10,
		marginRight: 151,
	},
	text9: {
		color: "#1E1E1E",
		fontSize: 10,
		marginRight: 154,
	},
	text10: {
		color: "#1E1E1E",
		fontSize: 10,
		marginRight: 63,
	},
});