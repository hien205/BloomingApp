import React from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type Props = {
  onSelect: (item: { name: string; image: string }) => void;
  onClose: () => void;
};
export default function Activity({ onSelect, onClose }: Props) {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					paddingTop: 9,
					paddingHorizontal: 6,
				}}>
				<ImageBackground 
					source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/uztxgide_expires_30_days.png"}} 
					resizeMode = {'stretch'}
					style={{
						paddingBottom: 61,
						marginBottom: 48,
					}}
					>
					<View 
						style={{
							alignItems: "flex-end",
						}}>
						<View 
							style={{
								width: 25,
								height: 20,
								marginRight: 18,
							}}>
						</View>
					</View>
<View style={{ flexDirection: "row", marginHorizontal: 8, marginBottom: 20 }}>
  
  {/* Music */}
  <TouchableOpacity
    style={{ flex: 1, alignItems: "center", }}
    onPress={() => onSelect({name:"Music",  image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/1x6yieee_expires_30_days.png",
    })}
  >
    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/1x6yieee_expires_30_days.png" }} style={{ height: 95, width: "100%", }} />
    <Text>Music</Text>
  </TouchableOpacity>

  {/* Drawing */}
  <TouchableOpacity
    style={{ flex: 1, alignItems: "center" }}
onPress={() => onSelect({name:"Drawing", image:"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/wpg17ama_expires_30_days.png",})}

  >
    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/wpg17ama_expires_30_days.png" }} style={{ height: 95, width: "100%" }} />
    <Text>Drawing</Text>
  </TouchableOpacity>

  {/* Reading */}
  <TouchableOpacity
    style={{ flex: 1, alignItems: "center" }}
onPress={() => onSelect({ name:"Reading", image:"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/52hbojvf_expires_30_days.png"})}
  >
    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/52hbojvf_expires_30_days.png" }} style={{ height: 95, width: "100%" }} />
    <Text>Reading</Text>
  </TouchableOpacity>

  {/* Eating */}
  <TouchableOpacity
    style={{ flex: 1, alignItems: "center" }}
onPress={() => onSelect({name:"Eating", image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/qjh6vo31_expires_30_days.png"})}
  >
    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/qjh6vo31_expires_30_days.png" }} style={{ height: 95, width: "100%" }} />
    <Text>Eating</Text>
  </TouchableOpacity>

</View>
<View style={{ flexDirection: "row", marginHorizontal: 8 }}>

  {/* Gaming */}
  <TouchableOpacity
    style={{ flex: 1, alignItems: "center" }}
onPress={() => onSelect({name:"Gaming", image:"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/a782vmua_expires_30_days.png"})}
  >
    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/a782vmua_expires_30_days.png" }} style={{ height: 95, width: "100%" }} />
    <Text>Gaming</Text>
  </TouchableOpacity>

  {/* Exercise */}
  <TouchableOpacity
    style={{ flex: 1, alignItems: "center" }}
onPress={() => onSelect({name:"Excersise", image:"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/chgh54h1_expires_30_days.png"})}
  >
    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/chgh54h1_expires_30_days.png" }} style={{ height: 95, width: "100%" }} />
    <Text>Exercise</Text>
  </TouchableOpacity>

  {/* Meditation */}
  <TouchableOpacity
    style={{ flex: 1, alignItems: "center" }}
onPress={() => onSelect({name:"Meditation", image:"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/bsems8uq_expires_30_days.png"})}
  >
    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/bsems8uq_expires_30_days.png" }} style={{ height: 95, width: "100%" }} />
    <Text>Meditation</Text>
  </TouchableOpacity>

  {/* Movie */}
  <TouchableOpacity
    style={{ flex: 1, alignItems: "center" }}
onPress={() => onSelect({name:"Movie", image:"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/y34t9tes_expires_30_days.png"})}
  >
    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/y34t9tes_expires_30_days.png" }} style={{ height: 95, width: "100%" }} />
    <Text>Movie</Text>
  </TouchableOpacity>

</View>
				</ImageBackground>
			</ScrollView>
		</SafeAreaView>
	)
}