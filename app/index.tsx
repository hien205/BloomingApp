import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, StyleSheet, } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import { replace } from "expo-router/build/global-state/routing";
export default function IndexScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.column}>
					<View style={styles.box}>
					</View>
					<View style={styles.column2}>
						<Image
  source={require("../assets/images/logo.png")}
  resizeMode="cover"
  style={styles.image}
/>
						<Text style={styles.absoluteText}>
							{"Join the path of self-restoration!"}
						</Text>
						
					</View>
					<Text style={styles.text}>
						{"Your well-being is our priority."}
					</Text>
					<TouchableOpacity style={styles.button} onPress={()=>replace("/login")}>
						<LinearGradient 
							start={{x:0, y:1}}
							end={{x:1, y:1}}
							colors={["#7B5E4B", "#2e160680"]}
							style={styles.button}>
							<Text style={styles.text2}>
								{"Log in"}
							</Text>
						</LinearGradient>
					</TouchableOpacity>
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
	absoluteText: {
		position: "absolute",
		bottom: 5,
		right: 10,
		left: 12,
		color: "#000000",
		fontSize: 25.5,
        textAlign: "center",
		fontWeight: "bold",
        
		
	},
	absoluteView: {
		position: "absolute",
		bottom: 71,
		right: 0,
		left: 0,
		alignItems: "center",
	},
	box: {
		height: 48,
		alignSelf: "stretch",
		marginBottom: 46,
		marginHorizontal: 27,
	},
	button: {
		borderRadius: 20,
		paddingVertical: 12,
		paddingHorizontal: 33,
		marginBottom: 48,
		justifyContent: "center",
	},
	column: {
		alignItems: "center",
		paddingTop: 46,
	},
	column2: {
		paddingBottom: 161,
		marginBottom: 12,
        marginTop: -30,
	},
	image: {
		width: 240,
		height: 220,
        marginTop: -40,
		overflow: "hidden",
	},
	image2: {
		width: 152,
		height: 228,
	},
	scrollView: {
		flex: 1,
		borderColor: "#000000",
		
	},
	text: {
		color: "#000000",
		fontSize: 16,
		marginBottom: 82,
	},
	text2: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "bold",
	},
});