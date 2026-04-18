import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function CakeScreen() {
    const router = useRouter();
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => router.push("/breakfast")}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/arcu74zt_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
                </TouchableOpacity>
					<View style={styles.view}>
						<Text style={styles.text}>
							{"Cakes"}
						</Text>
					</View>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/95nsfn97_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</TouchableOpacity>
				</View>
				<LinearGradient 
					start={{x:0, y:0}}
					end={{x:0, y:1}}
					colors={["#F48BA1", "#9DCEFF"]}
					style={styles.column}>
					<Text style={styles.text2}>
						{"Most Viewed Today"}
					</Text>
					<View style={styles.row2}>
						<View style={styles.column2}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/ag9lc3y6_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.image3}
							/>
							<View style={styles.absoluteColumn}>
								<Text style={styles.text3}>
									{"Banana Sandwich"}
								</Text>
								<View style={styles.row3}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/v2jxbijd_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.image4}
									/>
									<View style={styles.box}>
									</View>
									<View style={styles.row4}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/qkj2r2w2_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={styles.image5}
										/>
										<Text style={styles.text4}>
											{"15min"}
										</Text>
									</View>
									<View style={styles.box}>
									</View>
								</View>
							</View>
						</View>
						<View style={styles.column3}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/qjd27x5x_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.image3}
							/>
							<View style={styles.absoluteColumn}>
								<Text style={styles.text3}>
									{"Banana Oatmeal"}
								</Text>
								<View style={styles.row3}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/eg8a7n7p_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.image4}
									/>
									<View style={styles.box}>
									</View>
									<View style={styles.row4}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/de3d8cgm_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={styles.image5}
										/>
										<Text style={styles.text4}>
											{"15min"}
										</Text>
									</View>
									<View style={styles.box}>
									</View>
								</View>
							</View>
						</View>
					</View>
				</LinearGradient>
				<View style={styles.column4}>
					<View style={styles.row5}>
						<View style={styles.column5}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/w5huo6fa_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
							<View style={styles.column6}>
								<View style={styles.view2}>
									<Text style={styles.text5}>
										{"Tuna Sandwich"}
									</Text>
								</View>
								<View style={styles.row6}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/fwk5ogq1_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.image7}
									/>
									<View style={styles.row4}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/dctqc8w9_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={styles.image8}
										/>
										<Text style={styles.text4}>
											{"30min"}
										</Text>
									</View>
								</View>
							</View>
						</View>
						<View style={styles.column7}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/l9sdyz1v_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
							<View style={styles.column6}>
								<View style={styles.view2}>
									<Text style={styles.text5}>
										{"Cheese Sandwich"}
									</Text>
								</View>
								<View style={styles.row6}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/9mr5ft2f_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.image7}
									/>
									<View style={styles.row4}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/grna0fmq_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={styles.image8}
										/>
										<Text style={styles.text4}>
											{"30min"}
										</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.row4}>
						<View style={styles.column5}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/215pgjai_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
							<View style={styles.column6}>
								<View style={styles.view2}>
									<Text style={styles.text5}>
										{"Apple Cakes"}
									</Text>
								</View>
								<View style={styles.row6}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/1h0mfpet_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.image7}
									/>
									<View style={styles.row4}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/fpbdtu0g_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={styles.image8}
										/>
										<Text style={styles.text4}>
											{"30min"}
										</Text>
									</View>
								</View>
							</View>
						</View>
						<View style={styles.column8}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/cxipmv9z_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={styles.image9}
							/>
							<View style={styles.column6}>
								<View style={styles.view2}>
									<Text style={styles.text5}>
										{"Oatmeal Pancakes"}
									</Text>
								</View>
								<View style={styles.row6}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/445h3fnd_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.image7}
									/>
									<View style={styles.row4}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/p3yrn4k5_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={styles.image8}
										/>
										<Text style={styles.text4}>
											{"30min"}
										</Text>
									</View>
								</View>
							</View>
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
	absoluteColumn: {
		position: "absolute",
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: "#FFFCF8",
		borderRadius: 13,
		paddingVertical: 5,
		paddingRight: 15,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	box: {
		flex: 1,
		alignSelf: "stretch",
	},
	button: {
		backgroundColor: "#F7F8F8",
		borderRadius: 8,
		padding: 12,
	},
	column: {
		borderRadius: 20,
		paddingTop: 14,
		paddingRight: 38,
		marginBottom: 16,
	},
	column2: {
		flex: 1,
		borderRadius: 14,
		paddingBottom: 28,
		marginRight: 16,
	},
	column3: {
		flex: 1,
		borderRadius: 14,
		paddingBottom: 28,
	},
	column4: {
		marginBottom: 19,
		marginHorizontal: 26,
	},
	column5: {
		flex: 1,
		marginRight: 19,
	},
	column6: {
		backgroundColor: "#FFFCF8",
		borderBottomRightRadius: 14,
		borderBottomLeftRadius: 14,
		paddingTop: 6,
		paddingHorizontal: 15,
	},
	column7: {
		flex: 1,
	},
	column8: {
		flex: 1,
		paddingHorizontal: 1,
	},
	image: {
		width: 31,
		height: 31,
	},
	image2: {
		width: 11,
		height: 3,
	},
	image3: {
		borderRadius: 14,
		width: 150,
		height: 162,
	},
	image4: {
		width: 22,
		height: 18,
	},
	image5: {
		width: 9,
		height: 10,
		marginRight: 7,
	},
	image6: {
		width: 160,
		height: 153,
	},
	image7: {
		width: 23,
		height: 18,
	},
	image8: {
		width: 9,
		height: 10,
		marginRight: 6,
	},
	image9: {
		width: 158,
		height: 153,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
		marginLeft: 33,
		marginRight: 21,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 38,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 15,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 30,
	},
	row6: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 22,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#F7F4F2",
		paddingTop: 40,
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
		color: "#FFFCF8",
		fontSize: 15,
		marginBottom: 9,
		marginLeft: 38,
	},
	text3: {
		color: "#1C0F0D",
		fontSize: 12,
		marginBottom: 2,
		marginLeft: 15,
	},
	text4: {
		color: "#EB878D",
		fontSize: 12,
	},
	text5: {
		color: "#3E2823",
		fontSize: 12,
	},
	view: {
		paddingBottom: 1,
	},
	view2: {
		paddingBottom: 1,
		marginBottom: 12,
	},
});