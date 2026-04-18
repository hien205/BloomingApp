import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Favorite() {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<TouchableOpacity style={styles.button} onPress={()=> router.back()}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55b8012f-8d49-4d99-a4e6-dc2b0a76b01c"}} 
							resizeMode = {"stretch"}
							style={styles.image}
						/>
					</TouchableOpacity>
					<Text style={styles.text}>
						{"Favorite"}
					</Text>
					<View style={styles.box}>
					</View>
				</View>
				<View style={styles.row2}>
					<Text style={styles.text2}>
						{"Sort by"}
					</Text>
					<TouchableOpacity style={styles.button2} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text3}>
							{"a→z"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button3} onPress={()=>alert('Pressed!')}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5847b505-1c14-4e4a-ab17-1d73724b4121"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button4} onPress={()=>alert('Pressed!')}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/692a6b41-301f-48d2-83f8-b2c4e5dcc206"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button5} onPress={()=>alert('Pressed!')}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c5eae69-7e34-4b99-b19d-ab6301deb455"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button6} onPress={()=>alert('Pressed!')}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fb25942-398b-47de-b989-1f49c84a0551"}} 
							resizeMode = {"stretch"}
							style={styles.image5}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.row3}>
					<TouchableOpacity style={styles.button7} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text4}>
							{"Doctors"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button8} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text5}>
							{"Services"}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.row4}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49ccae71-8208-4f9e-ad2c-9c22aa0d0e15"}} 
						resizeMode = {"stretch"}
						style={styles.image6}
					/>
					
					<Text style={styles.text7}>
						{"Cognitive Behavioral Therapy"}
					</Text>
				</View>
				<View style={styles.view}>
					<Text style={styles.text6}>
						{"Cognitive Behavioral Therapy focuses on identifying negative thought patterns and replacing them with healthier, more realistic ones. It helps individuals change both their thinking and behavior to improve mood and coping skills."}
					</Text>
				</View>
				<View style={styles.row5}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50e462e7-3912-4a44-9655-fdbf9922a331"}} 
						resizeMode = {"stretch"}
						style={styles.image6}
					/>
					
					<Text style={styles.text7}>
						{"Interpersonal Therapy"}
					</Text>
				</View>
				<View style={styles.row6}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1dc26f4-f18d-41e5-bad3-7f805b6cb3cd"}} 
						resizeMode = {"stretch"}
						style={styles.image7}
					/>
					<Text style={styles.text7}>
						{"Problem-Solving Therapy"}
					</Text>
					<View style={styles.box2}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/734a2919-313b-401c-a25d-e4eccbffd77f"}} 
						resizeMode = {"stretch"}
						style={styles.image8}
					/>
				</View>
				<View style={styles.row7}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d25443ff-a5bc-413e-84a9-229818a67d77"}} 
						resizeMode = {"stretch"}
						style={styles.image7}
					/>
					<Text style={styles.text8}>
						{"Psychodynamic Therapy"}
					</Text>
					<View style={styles.box2}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6998b23b-dbcc-4db8-95e8-87e17a7c91a3"}} 
						resizeMode = {"stretch"}
						style={styles.image8}
					/>
				</View>
				<View style={styles.row8}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ea70646-1693-4b29-9454-f865b35ca34f"}} 
						resizeMode = {"stretch"}
						style={styles.image7}
					/>
					<Text style={styles.text9}>
						{"Behavioral Activation"}
					</Text>
					<View style={styles.box2}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60055e76-a782-4178-b4a7-e13cb112e2cd"}} 
						resizeMode = {"stretch"}
						style={styles.image8}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F7F4F2",
	},
	box: {
		width: 36,
		height: 36,
	},
	box2: {
		flex: 1,
	},
	button: {
		borderColor: "#000000",
		borderRadius: 1234,
		borderWidth: 1,
		padding: 6,
	},
	button2: {
		backgroundColor: "#CAD6FF",
		borderRadius: 13,
		paddingVertical: 6,
		paddingHorizontal: 9,
		marginRight: 3,
	},
	button3: {
		backgroundColor: "#CAD6FF",
		borderRadius: 13,
		paddingVertical: 5,
		paddingHorizontal: 6,
		marginRight: 3,
	},
	button4: {
		backgroundColor: "#225FFF",
		borderRadius: 13,
		padding: 6,
		marginRight: 3,
	},
	button5: {
		backgroundColor: "#CAD6FF",
		borderRadius: 13,
		paddingVertical: 5,
		paddingHorizontal: 8,
		marginRight: 3,
	},
	button6: {
		backgroundColor: "#CAD6FF",
		borderRadius: 13,
		paddingVertical: 4,
		paddingHorizontal: 6,
	},
	button7: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 20,
		paddingVertical: 9,
		marginRight: 13,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	button8: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#F48BA1",
		borderRadius: 20,
		paddingVertical: 13,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	image: {
		borderRadius: 1234,
		width: 24,
		height: 24,
	},
	image2: {
		width: 10,
		height: 10,
	},
	image3: {
		width: 10,
		height: 9,
	},
	image4: {
		width: 6,
		height: 9,
	},
	image5: {
		width: 9,
		height: 11,
	},
	image6: {
		width: 19,
		height: 14,
		marginLeft: 18,
		marginRight: 3,
	},
	image7: {
		width: 19,
		height: 14,
		marginRight: 3,
	},
	image8: {
		width: 24,
		height: 24,
	},
	input: {
		color: "#000000",
		fontSize: 16,
		fontWeight: "bold",
		marginRight: 4,
		flex: 1,
		paddingVertical: 9,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
		marginHorizontal: 35,
	},
	row2: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 30,
		marginLeft: 20,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 24,
		marginHorizontal: 20,
	},
row4: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  borderRadius: 21,
  marginBottom: 13,
  marginHorizontal: 20,

  paddingVertical: 16, // 👈 tăng chiều cao ở đây

  shadowColor: "#00000040",
  shadowOpacity: 0.3,
  shadowOffset: {
    width: 0,
    height: 4
  },
  shadowRadius: 4,
  elevation: 4,
},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 21,
		marginBottom: 23,
		marginHorizontal: 18,
		shadowColor: "#00000040",
		paddingVertical: 16, // 👈 tăng chiều cao ở đây

		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 21,
		paddingVertical: 16,
		paddingHorizontal: 18,
		marginBottom: 23,
		marginHorizontal: 18,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	row7: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 21,
		paddingVertical: 16,
		paddingHorizontal: 18,
		marginBottom: 23,
		marginHorizontal: 18,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	row8: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 21,
		paddingVertical: 16,
		paddingHorizontal: 18,
		marginBottom: 48,
		marginHorizontal: 18,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F7F4F2",
		paddingTop: 55,
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
		fontSize: 24,
		fontWeight: "bold",
	},
	text2: {
		color: "#070707",
		fontSize: 12,
		marginRight: 5,
	},
	text3: {
		color: "#225FFF",
		fontSize: 12,
	},
	text4: {
		color: "#000000",
		fontSize: 20,
	},
	text5: {
		color: "#FFFFFF",
		fontSize: 20,
	},
	text6: {
		color: "#000000",
		fontSize: 13,
		textAlign: "center",
	},
	text7: {
		color: "#000000",
		fontSize: 16,
		fontWeight: "bold",
         flexShrink: 1,
	},
	text8: {
		color: "#000000",
		fontSize: 16,
		fontWeight: "bold",
         flexShrink: 1,
	},
	text9: {
		color: "#000000",
		fontSize: 16,
		fontWeight: "bold",
	},
	view: {
		backgroundColor: "#FFFFFF",
		borderRadius: 18,
		paddingVertical: 15,
		paddingHorizontal: 17,
		marginBottom: 13,
		marginHorizontal: 20,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
});