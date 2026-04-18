import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function MealscheduleScreen() {
const scrollRef = useRef<ScrollView | null>(null);
const router = useRouter();
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
  ref={scrollRef}
  style={styles.scrollView}
>
				<View style={styles.column}>
					<View style={styles.row}>
						<TouchableOpacity
  onPress={() => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
    router.back();
  }}
>
  <Image
    source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/phk9o67e_expires_30_days.png"}}
    resizeMode={"stretch"}
    style={styles.image}
  />
</TouchableOpacity>
						<View style={styles.view}>
							<Text style={styles.text}>
								{"Meal Schedule"}
							</Text>
						</View>
						<View style={styles.box}>
						</View>
					</View>
					<View style={styles.row2}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/ndks0b58_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<Text style={styles.text2}>
							{"May 2026"}
						</Text>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/sby9nn8j_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
					</View>
					<View style={styles.row3}>
						<View style={styles.column2}>
							<Text style={styles.text3}>
								{"Sat"}
							</Text>
							<Text style={styles.text4}>
								{"9"}
							</Text>
						</View>
						<View style={styles.column3}>
							<Text style={styles.text3}>
								{"Sun"}
							</Text>
							<Text style={styles.text4}>
								{"10"}
							</Text>
						</View>
						<View style={styles.column4}>
							<Text style={styles.text3}>
								{"Tue"}
							</Text>
							<Text style={styles.text4}>
								{"11"}
							</Text>
						</View>
						<View style={styles.column5}>
							<Text style={styles.text3}>
								{"Wed"}
							</Text>
							<Text style={styles.text4}>
								{"12"}
							</Text>
						</View>
						<View style={styles.column6}>
							<Text style={styles.text3}>
								{"Thus"}
							</Text>
							<Text style={styles.text4}>
								{"13"}
							</Text>
						</View>
					</View>
					<View style={styles.column7}>
						<View style={styles.row4}>
							<Text style={styles.text5}>
								{"Breakfast"}
							</Text>
							<Text style={styles.text6}>
								{"2 meals | 230 calories"}
							</Text>
						</View>
						<View style={styles.row5}>
							<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
								<LinearGradient 
									start={{x:0, y:0}}
									end={{x:0, y:1}}
									colors={["#92A3FD", "#9DCEFF"]}
									style={styles.button}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/xo6nhb7w_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.image4}
									/>
								</LinearGradient>
							</TouchableOpacity>
							<View >
								<Text style={styles.text7}>
									{"Oatmeal Pancakes"}
								</Text>
								<Text style={styles.text8}>
									{"07:00am"}
								</Text>
							</View>
							<View style={styles.box2}>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/xysnhuty_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.image5}
							/>
						</View>
						<View style={styles.row6}>
							<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
								<LinearGradient 
									start={{x:0, y:0}}
									end={{x:0, y:1}}
									colors={["#C58BF2", "#EEA4CE"]}
									style={styles.button}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/z5tdtcd7_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.image4}
									/>
								</LinearGradient>
							</TouchableOpacity>
							<View >
								<Text style={styles.text7}>
									{"Mango Smoothies"}
								</Text>
								<Text style={styles.text9}>
									{"08:30am"}
								</Text>
							</View>
							<View style={styles.box2}>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/n3k7hbpn_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
						</View>
					</View>
					<View style={styles.column7}>
						<View style={styles.row4}>
							<Text style={styles.text5}>
								{"Lunch"}
							</Text>
							<Text style={styles.text6}>
								{"2 meals | 500 calories"}
							</Text>
						</View>
						<View style={styles.row5}>
							<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
								<LinearGradient 
									start={{x:0, y:0}}
									end={{x:0, y:1}}
									colors={["#92A3FD", "#9DCEFF"]}
									style={styles.button}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/9j31lnc7_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.image4}
									/>
								</LinearGradient>
							</TouchableOpacity>
							<View >
								<Text style={styles.text7}>
									{"Squid Salad"}
								</Text>
								<Text style={styles.text10}>
									{"01:00pm"}
								</Text>
							</View>
							<View style={styles.box2}>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/izptika7_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
						</View>
						<View style={styles.row6}>
							<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
								<LinearGradient 
									start={{x:0, y:0}}
									end={{x:0, y:1}}
									colors={["#C58BF2", "#EEA4CE"]}
									style={styles.button}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/v8fu8pup_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.image4}
									/>
								</LinearGradient>
							</TouchableOpacity>
							<View >
								<Text style={styles.text7}>
									{"Grilled Chicken"}
								</Text>
								<Text style={styles.text11}>
									{"01:00pm"}
								</Text>
							</View>
							<View style={styles.box2}>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/b1y7a974_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
						</View>
					</View>
					<View style={styles.row7}>
						<Text style={styles.text5}>
							{"Dinner"}
						</Text>
						<Text style={styles.text6}>
							{"3 meals | 300 calories"}
						</Text>
					</View>
					<View style={styles.row8}>
						<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
							<LinearGradient 
								start={{x:0, y:0}}
								end={{x:0, y:1}}
								colors={["#92A3FD", "#9DCEFF"]}
								style={styles.button}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/t321bchd_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={styles.image4}
								/>
							</LinearGradient>
						</TouchableOpacity>
						<View >
							<Text style={styles.text7}>
								{"Veggie Salad"}
							</Text>
							<Text style={styles.text12}>
								{"07:00pm"}
							</Text>
						</View>
						<View style={styles.box2}>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/9kqjq9g9_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
					</View>
					<View style={styles.row9}>
						<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
							<LinearGradient 
								start={{x:0, y:0}}
								end={{x:0, y:1}}
								colors={["#C58BF2", "#EEA4CE"]}
								style={styles.button}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/mczi4r22_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={styles.image4}
								/>
							</LinearGradient>
						</TouchableOpacity>
						<View >
							<Text style={styles.text7}>
								{"Pumpkin Soup"}
							</Text>
							<Text style={styles.text13}>
								{"07:00pm"}
							</Text>
						</View>
						<View style={styles.box2}>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/23gyspj8_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
					</View>
					<View style={styles.row10}>
						<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
							<LinearGradient 
								start={{x:0, y:0}}
								end={{x:0, y:1}}
								colors={["#92A3FD", "#9DCEFF"]}
								style={styles.button}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/mh0wiivx_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={styles.image4}
								/>
							</LinearGradient>
						</TouchableOpacity>
						<View >
							<Text style={styles.text7}>
								{"Orange Smoothies"}
							</Text>
							<Text style={styles.text14}>
								{"07:30pm"}
							</Text>
						</View>
						<View style={styles.box2}>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/qh5pchm3_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
					</View>
					<View style={styles.column8}>
						<View >
							<View style={styles.view2}>
								<Text style={styles.text5}>
									{"Today Meal Nutritions"}
								</Text>
							</View>
							<View style={styles.column9}>
								<View style={styles.row11}>
									<Text style={styles.text15}>
										{"Calories"}
									</Text>
									<Text style={styles.text16}>
										{"320 kCal"}
									</Text>
								</View>
								<View style={styles.view3}>
									<LinearGradient 
										start={{x:0, y:0}}
										end={{x:0, y:1}}
										colors={["#C58BF2", "#92A3FD"]}
										style={styles.box3}>
									</LinearGradient>
								</View>
							</View>
							<View style={styles.column10}>
								<View style={styles.row11}>
									<Text style={styles.text17}>
										{"Proteins"}
									</Text>
									<Text style={styles.text16}>
										{"300g"}
									</Text>
								</View>
								<View style={styles.view3}>
									<LinearGradient 
										start={{x:0, y:0}}
										end={{x:0, y:1}}
										colors={["#C58BF2", "#92A3FD"]}
										style={styles.box4}>
									</LinearGradient>
								</View>
							</View>
							<View style={styles.column11}>
								<View style={styles.row11}>
									<Text style={styles.text17}>
										{"Fats"}
									</Text>
									<Text style={styles.text16}>
										{"140g"}
									</Text>
								</View>
								<View style={styles.view3}>
									<LinearGradient 
										start={{x:0, y:0}}
										end={{x:0, y:1}}
										colors={["#C58BF2", "#92A3FD"]}
										style={styles.box5}>
									</LinearGradient>
								</View>
							</View>
						</View>
						<View style={styles.view4}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/a7dhaoki_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
						</View>
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
	box: {
		width: 31,
		height: 31,
	},
	box2: {
		flex: 1,
		alignSelf: "stretch",
	},
	box3: {
		width: 217,
		height: 10,
		borderTopLeftRadius: 99,
		borderBottomLeftRadius: 99,
	},
	box4: {
		width: 134,
		height: 10,
		borderTopLeftRadius: 99,
		borderBottomLeftRadius: 99,
	},
	box5: {
		width: 102,
		height: 10,
		borderTopLeftRadius: 99,
		borderBottomLeftRadius: 99,
	},
	button: {
		borderRadius: 12,
		paddingVertical: 6,
		paddingHorizontal: 7,
		marginRight: 10,
	},
	column: {
		alignItems: "center",
		paddingBottom: 45,
		paddingTop:-5,
	},
	column2: {
		flex: 1,
		backgroundColor: "#539CF336",
		borderRadius: 10,
		paddingVertical: 15,
		paddingHorizontal: 21,
		marginRight: 15,
	},
	column3: {
		flex: 1,
		backgroundColor: "#F7F8F8",
		borderRadius: 10,
		paddingVertical: 15,
		paddingHorizontal: 19,
		marginRight: 15,
	},
	column4: {
		flex: 1,
		backgroundColor: "#F7F8F8",
		borderRadius: 10,
		paddingVertical: 15,
		paddingHorizontal: 20,
		marginRight: 15,
	},
	column5: {
		flex: 1,
		backgroundColor: "#F7F8F8",
		borderRadius: 10,
		paddingVertical: 15,
		paddingHorizontal: 17,
		marginRight: 15,
	},
	column6: {
		flex: 1,
		backgroundColor: "#F7F8F8",
		borderRadius: 10,
		padding: 15,
	},
	column7: {
		alignSelf: "stretch",
		marginBottom: 20,
		marginHorizontal: 41,
	},
	column8: {
  alignSelf: "stretch",
  marginHorizontal: 37,
  paddingBottom: 20, 
},
	column9: {
		backgroundColor: "#FFFFFF",
		borderRadius: 16,
		padding: 15,
		marginBottom: 15,
		shadowColor: "#1D161712",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: 10
		},
		shadowRadius: 40,
		elevation: 40,
	},
	column10: {
		backgroundColor: "#FFFFFF",
		borderRadius: 16,
		padding: 15,
		marginBottom: 15,
	},
	column11: {
		backgroundColor: "#FFFFFF",
		borderRadius: 16,
		padding: 15,
	},
	image: {
		width: 31,
		height: 31,
	},
	image2: {
		width: 22,
		height: 22,
		marginRight: 30,
	},
	image3: {
		width: 22,
		height: 22,
	},
	image4: {
		width: 47,
		height: 47,
	},
	image5: {
		width: 23,
		height: 24,
	},
	image6: {
		width: 24,
		height: 24,
	},
	image7: {
		width: 60,
		height: 1,
	},
	row: {
		alignSelf: "stretch",
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#F7F4F2",
		paddingTop: 42,
		paddingBottom: 10,
		paddingHorizontal: 33,
		marginBottom: 10,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 18,
	},
	row3: {
		alignSelf: "stretch",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 29,
		marginHorizontal: 18,
	},
	row4: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 15,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
	},
	row7: {
		alignSelf: "stretch",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 15,
		marginHorizontal: 37,
	},
	row8: {
		alignSelf: "stretch",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
		marginHorizontal: 37,
	},
	row9: {
		alignSelf: "stretch",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 15,
		marginHorizontal: 37,
	},
	row10: {
		alignSelf: "stretch",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 22,
		marginHorizontal: 37,
	},
	row11: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 5,
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
		color: "#4E3321",
		fontSize: 20,
		fontWeight: "bold",
	},
	text2: {
		color: "#ACA3A5",
		fontSize: 14,
		marginRight: 29,
	},
	text3: {
		color: "#7B6F72",
		fontSize: 12,
		marginBottom: 10,
	},
	text4: {
		color: "#7B6F72",
		fontSize: 14,
	},
	text5: {
		color: "#1D1517",
		fontSize: 16,
		fontWeight: "bold",
	},
	text6: {
		color: "#ACA3A5",
		fontSize: 12,
	},
	text7: {
		color: "#1D1517",
		fontSize: 14,
		marginBottom: 3,
	},
	text8: {
		color: "#7B6F72",
		fontSize: 12,
		marginRight: 83,
	},
	text9: {
		color: "#7B6F72",
		fontSize: 12,
		marginRight: 75,
	},
	text10: {
		color: "#7B6F72",
		fontSize: 12,
		marginRight: 35,
	},
	text11: {
		color: "#7B6F72",
		fontSize: 12,
		marginRight: 58,
	},
	text12: {
		color: "#7B6F72",
		fontSize: 12,
		marginRight: 42,
	},
	text13: {
		color: "#7B6F72",
		fontSize: 12,
		marginRight: 50,
	},
	text14: {
		color: "#7B6F72",
		fontSize: 12,
		marginRight: 80,
	},
	text15: {
		color: "#1D1517",
		fontSize: 12,
	},
	text16: {
		color: "#7B6F72",
		fontSize: 10,
	},
	text17: {
		color: "#000000",
		fontSize: 12,
	},
	view: {
		paddingHorizontal: 13,
	},
	view2: {
		alignSelf: "flex-start",
		paddingBottom: 1,
		marginBottom: 15,
	},
	view3: {
		backgroundColor: "#F7F8F8",
		borderRadius: 99,
	},
	view4: {
		alignItems: "flex-end",
	},
});