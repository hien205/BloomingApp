import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native";
import { Switch } from "react-native";
import { useLocalSearchParams } from "expo-router";
export default function SleepTrackerScreen() {
	const params = useLocalSearchParams<{
  sound?: string;
}>();
	const [sound, setSound] = React.useState("Bluebird");

React.useEffect(() => {
  if (params.sound) {
    setSound(params.sound);
  }
}, [params.sound]);

    const router = useRouter();
    const [repeatOn, setRepeatOn] = React.useState(false);
    const [vibrateOn, setVibrateOn] = React.useState(false);

  

    

    const [repeatDays, setRepeatDays] = React.useState([]);
    const [sleepHour, setSleepHour] = React.useState("00");
const [sleepMinute, setSleepMinute] = React.useState("00");
    const [alarmName, setAlarmName] = React.useState("");
    const [hour, setHour] = React.useState("09");
const [minute, setMinute] = React.useState("30");
const [ampm, setAmpm] = React.useState("PM");
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#F7F4F2",
					paddingVertical: 54,
					shadowColor: "#00000040",
					shadowOpacity: 0.3,
					shadowOffset: {
					    width: 0,
					    height: 4
					},
					shadowRadius: 4,
					elevation: 4,
				}}>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 35,
						marginHorizontal: 34,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 14,
						}}>
						{"Cancel"}
					</Text>
					<Text
  style={{ color: "#539CF3", fontSize: 14 }}
  onPress={() => {
  router.push({
  pathname: "/addalarm",
  params: {
    alarmName,
    bedHour: hour,        // 🔥 đổi tên
    bedMinute: minute,
    bedAmpm: ampm,

    sleepHour,
    sleepMinute,

    alarmHour: sleepHour,   // nếu alarm = wake up
    alarmMinute: sleepMinute,
    alarmAmpm: "AM",

    sound,
    vibrateOn: String(vibrateOn),
  },
});
}}
>
  Save
</Text>
				</View>
				<View 
					style={{
						alignSelf: "flex-start",
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 21,
						marginLeft: 37,
					}}>
					<TextInput
    placeholder="Alarm Name"
    value={alarmName}
    onChangeText={setAlarmName}
    style={{
        fontSize: 14,
        color: "#000",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        minWidth: 120,
        marginRight: 9,
        paddingVertical: 2
    }}
/>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QixVuhYNuV/yboxyrvt_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 18,
							height: 18,
						}}
					/>
				</View>
				 {/* TIME PICKER */}
<View style={{ alignItems: "center", marginBottom: 20 }}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>

        {/* HOUR */}
        <Picker
            selectedValue={hour}
            style={{ width: 120, height: 180 }}
            itemStyle={{ fontSize: 40, fontWeight: "bold", color: "#000" }}
            onValueChange={(v) => setHour(v)}
        >
            {Array.from({ length: 12 }, (_, i) => {
                const val = (i + 1).toString().padStart(2, "0");
                return <Picker.Item key={val} label={val} value={val} />;
            })}
        </Picker>

        {/* DẤU : */}
        <Text style={{
            fontSize: 48,
            fontWeight: "bold",
            marginHorizontal: 6,
            marginTop: 28
        }}>
            :
        </Text>

        {/* MINUTE */}
        <Picker
            selectedValue={minute}
            style={{ width: 120, height: 180 }}
            itemStyle={{ fontSize: 40, fontWeight: "bold", color: "#000" }}
            onValueChange={(v) => setMinute(v)}
        >
            {Array.from({ length: 60 }, (_, i) => {
                const val = i.toString().padStart(2, "0");
                return <Picker.Item key={val} label={val} value={val} />;
            })}
        </Picker>

        {/* AM PM */}
        <Picker
            selectedValue={ampm}
            style={{ width: 100, height: 180 }}
            itemStyle={{ fontSize: 26, fontWeight: "bold", color: "#000" }}
            onValueChange={(v) => setAmpm(v)}
        >
            <Picker.Item label="AM" value="AM" />
            <Picker.Item label="PM" value="PM" />
        </Picker>

    </View>
</View>
				<Text 
					style={{
						color: "#000000",
						fontSize: 18,
						fontWeight: "bold",
						marginBottom: 5,
						marginLeft: 23,
					}}>
					{"Hours of sleep"}
				</Text>
				<View 
					style={{
						alignSelf: "flex-start",
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 5,
						marginLeft: 135,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 12,
							marginRight: 78,
						}}>
						{"Hours"}
					</Text>
					<Text 
						style={{
							color: "#000000",
							fontSize: 12,
						}}>
						{"Minutes"}
					</Text>
				</View>
				<View style={{ alignItems: "center", marginBottom: 23 }}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>

        {/* SLEEP HOURS */}
        <Picker
            selectedValue={sleepHour}
            style={{ width: 120, height: 150 }}
            onValueChange={(v) => setSleepHour(v)}
        >
            {Array.from({ length: 24 }, (_, i) => {
                const val = i.toString().padStart(2, "0");
                return <Picker.Item key={val} label={val} value={val} />;
            })}
        </Picker>

        {/* SLEEP MINUTES */}
        <Picker
            selectedValue={sleepMinute}
            style={{ width: 120, height: 150 }}
            onValueChange={(v) => setSleepMinute(v)}
        >
            {Array.from({ length: 60 }, (_, i) => {
                const val = i.toString().padStart(2, "0");
                return <Picker.Item key={val} label={val} value={val} />;
            })}
        </Picker>

    </View>
</View>
				<View 
					style={{
						marginBottom: 24,
						marginHorizontal: 22,
						shadowColor: "#00000040",
						shadowOpacity: 0.3,
						shadowOffset: {
						    width: 0,
						    height: 4
						},
						shadowRadius: 4,
						elevation: 4,
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 4,
						}}>
						<View 
							style={{
								paddingRight: 197,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 18,
									fontWeight: "bold",
								}}>
								{"Repeat"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QixVuhYNuV/pkvjpt5e_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
							}}
						/>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<TouchableOpacity 
							style={{
								flex: 1,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 8,
								paddingVertical: 6,
								marginRight: 8,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 16,
								}}>
								{"Mon"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								flex: 1,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 8,
								paddingVertical: 6,
								marginRight: 8,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 16,
								}}>
								{"Tue"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								flex: 1,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 8,
								paddingVertical: 6,
								marginRight: 8,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 16,
								}}>
								{"Wed"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								flex: 1,
alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 8,
								paddingVertical: 6,
								marginRight: 8,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 16,
								}}>
								{"Thr"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								flex: 1,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 8,
								paddingVertical: 6,
								marginRight: 8,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 16,
								}}>
								{"Fri"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								flex: 1,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 8,
								paddingVertical: 6,
								marginRight: 8,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 16,
								}}>
								{"Sat"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								flex: 1,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 8,
								paddingVertical: 6,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 16,
								}}>
								{"Sun"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 24,
						marginHorizontal: 22,
					}}>
					<View >
						<View 
							style={{
								alignSelf: "flex-start",
								paddingBottom: 1,
								paddingRight: 204,
								marginBottom: 4,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 18,
									fontWeight: "bold",
								}}>
								{"Sound"}
							</Text>
						</View>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
								marginRight: 198,
							}}>
							{"Bluebird"}
						</Text>
					</View>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QixVuhYNuV/lrmymgxr_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 24,
							height: 24,
						}}
					/>
				</View>
				<View 
					style={{
						marginBottom: 24,
						marginHorizontal: 22,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 18,
							fontWeight: "bold",
							marginBottom: 4,
						}}>
						{"Volume"}
					</Text>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QixVuhYNuV/37igd24f_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							height: 16,
						}}
					/>
				</View>
				<View style={{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 22,
    backgroundColor: "#F7F4F2",
    borderRadius: 20,
    padding: 16,
}}>
    <Text style={{
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    }}>
        Vibrate
    </Text>

    <Switch
        value={vibrateOn}
        onValueChange={setVibrateOn}
        trackColor={{ false: "#ddd", true: "#C58BF2" }}
        thumbColor={"#fff"}
    />
</View>
			</ScrollView>
		</SafeAreaView>
	)
}