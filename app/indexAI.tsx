import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function HomeScreen() {
	const router = useRouter();
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>

				<View style={styles.column}>
					<View style={styles.column2}>
						<View style={styles.row}>
							<View style={styles.column3}>
								<View style={styles.column4}>
									<Text style={styles.text}>
										{"Hi Saad Shaikh!!"}
									</Text>
									<Text style={styles.text2}>
										{"Good Morning"}
									</Text>
								</View>
								<View >
									<Text style={styles.text3}>
										{"Drift into calm with gentle eyes."}
									</Text>
									<Text style={styles.text4}>
										{"Your journey matters, and rest is part of your healing."}
									</Text>
								</View>
							</View>
							<View style={styles.column5}>
								<View style={styles.view}>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54b9d95d-0769-43b4-8efe-8d30a8ac90cd"}} 
										resizeMode = {"stretch"}
										style={styles.image}
									/>
								</View>
								<View >
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb50db22-861a-48c1-a648-f437dd1cb2ff"}} 
										resizeMode = {"stretch"}
										style={styles.image2}
									/>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/026c843a-47d1-4401-8d06-ed21ac5ea47d"}} 
										resizeMode = {"stretch"}
										style={styles.absoluteImage}
									/>
								</View>
							</View>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc7d7ee9-292f-4e69-ba8c-dbe157a0a5f3"}} 
								resizeMode = {"stretch"}
								style={styles.absoluteImage2}
							/>
						</View>
						<View style={styles.row2}>
							<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
								<Text style={styles.text5}>
									{"Well-being"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
								<Text style={styles.text6}>
									{"Nourishment"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button2} onPress={()=>router.push("/calm")}>
								<Text style={styles.text7}>
									{"Rest"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button3} onPress={()=>router.push("/calm")}>
								<Text style={styles.text6}>
									{"Calm  "}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.view2}>
						<Text style={styles.text8}>
							{"10h"}
						</Text>
</View>
					<View style={styles.box}>
					</View>
				</View>
				<View style={styles.row3}>
					<View style={styles.column6}>
						<View >
							<View style={styles.box2}>
							</View>
							<View >
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ca93bc1-a317-44c7-af28-48cd23ae68a8"}} 
									resizeMode = {"stretch"}
									style={styles.image3}
								/>
								<View style={styles.absoluteView}>
									<View style={styles.view3}>
										<Text style={styles.text9}>
											{"43% increase"}
										</Text>
									</View>
								</View>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7c6e1a2-4252-44c1-8a01-3f1ff2cf95ff"}} 
									resizeMode = {"stretch"}
									style={styles.absoluteImage3}
								/>
							</View>
						</View>
						<View style={styles.box3}>
						</View>
						<View style={styles.row4}>
							<Text style={styles.text10}>
								{"Sun"}
							</Text>
							<Text style={styles.text10}>
								{"Mon"}
							</Text>
							<Text style={styles.text11}>
								{"Tue"}
							</Text>
							<Text style={styles.text10}>
								{"Wed"}
							</Text>
							<Text style={styles.text12}>
								{"Thu"}
							</Text>
							<Text style={styles.text13}>
								{"Fri"}
							</Text>
							<Text style={styles.text14}>
								{"Sat"}
							</Text>
						</View>
					</View>
					<View >
						<Text style={styles.text15}>
							{"8h"}
						</Text>
						<Text style={styles.text16}>
							{"6h"}
						</Text>
						<Text style={styles.text17}>
							{"4h"}
						</Text>
						<Text style={styles.text16}>
							{"2h"}
						</Text>
						<Text style={styles.text18}>
							{"0h"}
						</Text>
					</View>
				</View>
				<LinearGradient 
					start={{x:1, y:1}}
					end={{x:-0, y:-0}}
					colors={["#92A3FD", "#9DCEFF"]}
					style={styles.column7}>
					<View style={styles.column8}>
						<Text style={styles.text19}>
							{"Last Night Sleep"}
						</Text>
						<Text style={styles.text20}>
							{"8h 20m"}
						</Text>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6c4f86a-b2f7-4feb-900d-fc4f9a1c0e4f"}} 
						resizeMode = {"stretch"}
						style={styles.image4}
					/>
				</LinearGradient>
				<View style={styles.bottomNav}>

	<View style={styles.navItem}>
		<Image
			source={{uri:"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff2360e5-5549-4f97-b508-fce2ebc4e352"}}
			style={[styles.icon, { tintColor: "#F48BA1" }]}
		/>
		<Text style={styles.navActive}>Health</Text>
	</View>

	<View style={styles.navItem}>
		<Image
			source={{uri:"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2cdb61e5-f361-431d-b9f9-6279c0d4d807"}}
			style={styles.icon}
		/>
		<Text style={styles.navText}>Expression</Text>
	</View>

	<View style={styles.navItem}>
		<Image
source={{uri:"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/156e4cd4-e571-4305-9ade-6147301bf08d"}}
			style={styles.icon}
		/>
		<Text style={styles.navText}>Appointments</Text>
	</View>

	<View style={styles.navItem}>
		<Image
			source={{uri:"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e297ea8b-a200-43f4-a2c9-78037ba3f10c"}}
			style={styles.icon}
		/>
		<Text style={styles.navText}>Profile</Text>
	</View>
		<TouchableOpacity style={styles.navItem} onPress={() => router.push("/confideAI")}>
                <Text style={styles.chatNavIcon}>🌸</Text>
                <Text style={styles.chatNavText}>Bloom AI</Text>
        </TouchableOpacity>
</View>
			</ScrollView>
			{/* Floating Chat Button */}
                        <TouchableOpacity
                                style={styles.fab}
                                onPress={() => router.push("/confideAI")}
                                activeOpacity={0.85}
                        >
                                <LinearGradient
                                        colors={["#7D944D", "#9DB86B"]}
                                        style={styles.fabGradient}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                >
                                        <Text style={styles.fabIcon}>🌸</Text>
                                </LinearGradient>
                        </TouchableOpacity>

		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	absoluteImage: {
		position: "absolute",
		bottom: -14,
		right: -14,
		width: 30,
		height: 30,
	},
	absoluteImage2: {
		position: "absolute",
		top: 34,
		left: 174,
		width: 30,
		height: 30,
	},
	absoluteImage3: {
		position: "absolute",
		bottom: -9,
		right: 98,
		width: 8,
		height: 87,
	},
	absoluteView: {
		position: "absolute",
		top: -9,
		right: 53,
		backgroundColor: "#FFFFFF",
		borderRadius: 8,
		paddingVertical: 10,
		paddingLeft: 11,
		paddingRight: 25,
		shadowColor: "#1D161712",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: 10
		},
		shadowRadius: 40,
		elevation: 40,
	},
	box: {
		height: 1,
		backgroundColor: "#ACA3A5",
		marginLeft: 23,
		marginRight: 39,
	},
	box2: {
		height: 1,
		backgroundColor: "#ACA3A5",
		marginHorizontal: 1,
	},
	box3: {
		height: 1,
		backgroundColor: "#ACA3A5",
		marginBottom: 8,
		marginHorizontal: 1,
	},
	box4: {
		flex: 1,
		alignSelf: "stretch",
	},
	button: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#F7F4F2",
		borderRadius: 128,
		paddingVertical: 6,
		marginRight: 12,
	},
	button2: {
		backgroundColor: "#F48BA1",
		borderRadius: 128,
		paddingVertical: 6,
		paddingHorizontal: 16,
		marginRight: 12,
	},
	button3: {
		backgroundColor: "#F5F5F5",
		borderRadius: 128,
		paddingVertical: 6,
		paddingHorizontal: 16,
	},
	column: {
		paddingBottom: 7,
		marginBottom: 13,
},
	column2: {
		backgroundColor: "#F7F4F2",
		paddingTop: 74,
	},
	column3: {
		flex: 1,
		marginRight: 12,
	},
	column4: {
		alignSelf: "flex-start",
		marginBottom: 47,
		marginLeft: 4,
	},
	column5: {
		flex: 1,
	},
	column6: {
		flex: 1,
		marginRight: 5,
	},
	column7: {
		borderRadius: 22,
		paddingTop: 21,
		marginBottom: 19,
		marginHorizontal: 28,
	},
	column8: {
		alignSelf: "flex-start",
		marginBottom: 5,
		marginLeft: 21,
	},
	column9: {
		marginLeft: 39,
	},
	column10: {
		marginRight: 34,
	},
	column11: {
		alignItems: "center",
		paddingHorizontal: 8,
	},
	image: {
		borderRadius: 9999999827968,
		width: 39,
		height: 39,
		marginRight: 4,
	},
	image2: {
		width: 173,
		height: 208,
	},
	image3: {
		height: 114,
	},
	image4: {
		height: 82,
	},
	image5: {
		width: 14,
		height: 20,
		marginBottom: 6,
	},
	image6: {
		width: 24,
		height: 24,
		marginBottom: 6,
	},
	row: {
		flexDirection: "row",
		marginBottom: 17,
		marginHorizontal: 16,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 18,
		marginHorizontal: 20,
	},
	row3: {
		flexDirection: "row",
		paddingVertical: 7,
		marginBottom: 31,
		marginHorizontal: 21,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 5,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderTopWidth: 1,
		paddingVertical: 16,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F7F4F2",
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
		marginRight: 20,
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
	},
	text4: {
		color: "#5F5F5F",
		fontSize: 12,
		marginHorizontal: 2,
	},
	text5: {
		color: "#9E9E9E",
		fontSize: 10,
		fontWeight: "bold",
	},
	text6: {
		color: "#9E9E9E",
		fontSize: 10,
	},
	text7: {
		color: "#FFFFFF",
		fontSize: 10,
	},
	text8: {
		color: "#7B6F72",
		fontSize: 10,
		marginRight: 18,
	},
	text9: {
		color: "#41D641",
		fontSize: 10,
	},
	text10: {
		color: "#7B6F72",
		fontSize: 12,
		marginRight: 30,
		flex: 1,
	},
	text11: {
		color: "#7B6F72",
		fontSize: 12,
		marginRight: 29,
		flex: 1,
	},
	text12: {
		color: "#92A3FD",
		fontSize: 12,
		fontWeight: "bold",
		marginRight: 27,
		flex: 1,
	},
	text13: {
		color: "#7B6F72",
		fontSize: 12,
		marginRight: 28,
	},
	text14: {
		color: "#7B6F72",
		fontSize: 12,
		flex: 1,
	},
	text15: {
		color: "#92A3FD",
		fontSize: 10,
		fontWeight: "bold",
		marginBottom: 12,
	},
	text16: {
		color: "#7B6F72",
		fontSize: 10,
		marginBottom: 13,
	},
	text17: {
		color: "#7B6F72",
		fontSize: 10,
		marginBottom: 12,
	},
	text18: {
		color: "#7B6F72",
		fontSize: 10,
	},
	text19: {
		color: "#FFFFFF",
		fontSize: 14,
		marginBottom: 6,
	},
text20: {
		color: "#FFFFFF",
		fontSize: 14,
		marginRight: 55,
	},
	text21: {
		color: "#F48BA1",
		fontSize: 10,
		fontWeight: "bold",
	},
	text22: {
		color: "#9E9E9E",
		fontSize: 8,
	},
	view: {
		alignItems: "flex-end",
		marginBottom: 10,
	},
	view2: {
		alignItems: "flex-end",
	},
	view3: {
		alignSelf: "flex-start",
	},
	bottomNav: {
	flexDirection: "row",
	justifyContent: "space-between",
	backgroundColor: "#fff",
	paddingVertical: 12,
	paddingHorizontal: 20,
	borderTopWidth: 1,
	borderColor: "#eee",
},

navItem: {
	flex: 1,
	alignItems: "center",
	justifyContent: "center",
},

icon: {
	width: 24,
	height: 24,
	marginBottom: 4,
},

navText: {
	fontSize: 10,
	color: "#9E9E9E",
},

navActive: {
	fontSize: 10,
	color: "#F48BA1",
	fontWeight: "bold",
},
chatNavIcon: {
        fontSize: 22,
        marginBottom: 2,
},
chatNavText: {
        fontSize: 10,
        color: "#7D944D",
        fontWeight: "600",
},
fab: {
        position: "absolute",
        bottom: 28,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: "hidden",
        shadowColor: "#7D944D",
        shadowOpacity: 0.4,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 8,
},
fabGradient: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
},
fabIcon: {
        fontSize: 28,
},
});