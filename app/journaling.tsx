
import {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef, useState, useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";		
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


import Activity from "C:/Users/GIGABYTE/blooming_app/app/activity";
import WriteScreen from "C:/Users/GIGABYTE/blooming_app/app/write-screen";
import { replace } from "expo-router/build/global-state/routing";


const { width } = Dimensions.get("window");
const CELL = (width - 32 - 32) / 7;;

const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

type Props = {
  visible: boolean;
  onClose: () => void;
};
export default function JournalingHome({visible, onClose}: Props) {
  const [month, setMonth] = useState(3);
  
  const [selected, setSelected] = useState<number | null>(null);
  const translateX = useRef(new Animated.Value(0)).current;

  const [open, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const [moodModal, setMoodModal] = useState(false);
  const [mood, setMood] = useState<string | null>(null);
  const [step, setStep] = useState<"view" | "mood" | "write">("view");
  const [showWrite, setShowWrite] = useState(false);
  const [diary, setDiary] = useState<{
  [day: number]: {
    content: string;
    activity: { name: string; image: string } | null;
  };
}>({});
const router = useRouter();
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

const params = useLocalSearchParams();

const [activity, setActivity] = useState<{
  name: string;
  image: string;
} | null>(null);
const [showActivity, setShowActivity] = useState(false);
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, g) => Math.abs(g.dx) > 20,
      onPanResponderMove: (_, g) => {
        translateX.setValue(g.dx);
      },
      onPanResponderRelease: (_, g) => {
        if (g.dx < -80) setMonth((m) => m + 1);
        else if (g.dx > 80) setMonth((m) => m - 1);

        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  const generateDates = (): (number | null)[] => {
  const arr: (number | null)[] = [null, 1, 2, 3, 4, 5, 6, 7,
                 8, 9, 10, 11, 12, 13, 14,
                 15, 16, 17, 18, 19, 20, 21,
                 22, 23, 24, 25, 26, 27, 28,
                 29, 30,];
    return arr;
  };

  const dates = generateDates();
const scales = useRef(dates.map(() => new Animated.Value(1))).current;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#F7F4F2",
          paddingTop: 20,
        }}
      >
        {/* HEADER */}
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginBottom: 20,
        }}>
          <TouchableOpacity onPress={() => router.replace("/indexhome")}>
			  <Image
				source={{
				  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/phk9o67e_expires_30_days.png"
				}}
				style={{borderRadius: 999,
		width: 39,
		height: 39,
		marginRight: 4,}}
				resizeMode="stretch"
			  />
			</TouchableOpacity>
		  
			<View style={{ alignItems: "center" }}>
				<Text style={{
				  color: "#9E9E9E",
				  fontSize: 12,
				  marginRight: -8,
				}}>
				  Hi {name}!!
				</Text>
			
				<Text style={{
				  color: "#5F5F5F",
				  fontSize: 16,
				  fontWeight: "bold",
				  marginTop: 2,
				}}>
				  Good Morning
				</Text>
			  </View>
			
			  {/* Avatar phải */}
			  <Image
			  source={{ uri: avatar || "https://via.placeholder.com/40" }}
			  style={{ width: 40, height: 40, borderRadius: 20,  }}
			/>
			</View>
        	<View 
					style={{
						flexDirection: "row",
						marginBottom: 37,
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							flex: 1,
							marginTop: 43,
							marginRight: 21,
						}}>
						<Text 
							style={{
								color: "#212121",
								fontSize: 24,
								fontWeight: "bold",
							}}>
							{"Pause and listen to your heart today"}
						</Text>
						<Text 
							style={{
								color: "#5F5F5F",
								fontSize: 12,
								marginHorizontal: 2,
							}}>
							{"Notice how your journey has already blossomed."}
						</Text>
					</View>
					<View 
						style={{
							flex: 1,
							marginTop: 15,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/gnxre9oj_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 40,
								width: 185,
								height: 220,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/hudqtleh_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								position: "absolute",
								bottom: -13,
								right: -15,
								borderRadius: 40,
								width: 40,
								height: 40,
							}}
						/>
					</View>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/jol934zf_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							position: "absolute",
							top: 0,
							left: 166,
							borderRadius: 40,
							width: 35,
							height: 40,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 17,
						marginHorizontal: 38,
					}}>
					<TouchableOpacity 
						style={{
							backgroundColor: "#F48BA1",
							borderRadius: 128,
							paddingVertical: 6,
							paddingHorizontal: 16,
						}} onPress={()=>alert('Pressed!')}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
								fontWeight: "bold",
							}}>
							{"Journaling"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						style={{
							backgroundColor: "#F5F5F5",
							borderRadius: 128,
							paddingVertical: 6,
							paddingHorizontal: 16,
						}} onPress={()=>replace("/confideAI")}>
						<Text 
							style={{
								color: "#9E9E9E",
								fontSize: 10,
								fontWeight: "bold",
							}}>
							{"Confide in AI"}
						</Text>
					</TouchableOpacity>
				</View>
                    <View 
                style={{
                    alignItems: "center",
                    backgroundColor: "#FFFFFF",
                    borderRadius: 32,
                    paddingVertical: 20,
                    marginHorizontal: 16,   // ✅ thêm
                    marginBottom: 20,
                    shadowColor: "#00000040",
                    shadowOpacity: 0.3,
                    shadowOffset: {
                        width: 0,
                        height: 4
                    },
                    shadowRadius: 4,
                    elevation: 4,
                }}>
                <Text 
						style={{
							color: "#B3B3B3",
							fontSize: 16,
							marginBottom: 38,
						}}>
						{"How do you feel today ?"}
					</Text>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/msggubow_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 41,
								height: 41,
								marginRight: 10,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/rapaxtjj_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 41,
								height: 41,
								marginRight: 10,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/ywnbzxvn_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 41,
								height: 41,
								marginRight: 10,
							}}
						/>
						<Image
							source={require("../assets/images/fun.png")}
							resizeMode="stretch"
							style={{
								width: 41,
								height: 41,
								marginRight: 10,

							}}
							/>
						<Image
							source={require("../assets/images/happy.png")}
							resizeMode="stretch"
							style={{
								width: 41,
								height: 41,
							}}
							/>
					</View>
				</View>

        {/* CALENDAR */}
        <View style={{
          marginHorizontal: 16,
          backgroundColor: "#fff",
          borderRadius: 20,
          padding: 16,
          elevation: 4
        }}>

          {/* MONTH */}
         <View style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10
            }}>

            <Text style={{
  marginTop: 10,
  backgroundColor: "#1170AF",
  color: "#fff",
  paddingHorizontal: 12,
  paddingVertical: 4,
  borderRadius: 6
}}>
              2026 - Month {month + 1}
            </Text>
          </View>

          {/* DAYS */}
          <View style={{ flexDirection: "row" }}>
            {days.map((d, i) => (
              <View key={i} style={{ width: CELL, alignItems: "center" }}>
                <Text style={{ fontWeight: "bold" }}>{d}</Text>
              </View>
            ))}
          </View>

          {/* GRID */}
          <Animated.View
            {...panResponder.panHandlers}
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 10,
              transform: [{ translateX }]
            }}
          >
{dates.map((d, i) => {
  const scale = scales[i]; // ✅ lấy từ list

  const press = () => {
    if (d !== null) {
      setSelected(d);
      setSelectedDay(d);

      if (diary[d]) {
        setActivity(diary[d].activity);
      } else {
        setActivity(null);
      }

      setStep("view");
      setOpen(true);
    }

    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <TouchableOpacity
      key={i}
      style={{
        width: CELL,
        height: CELL * 0.8,
        alignItems: "center",
        justifyContent: "center"
      }}
      onPress={press}
    >
      <Animated.View
        style={{
          transform: [{ scale }],
          width: 30,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
          backgroundColor: diary[d!] ? "#F48BA1" : "transparent",
          borderWidth: selected === d ? 2 : 0,
          borderColor: "#F48BA1",
        }}
      >
        <Text
          style={{
            color:
              i % 7 === 5 || i % 7 === 6
                ? "#177DC2"
                : "#333"
          }}
        >
          {d}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
})}
          </Animated.View>

        </View>

      </ScrollView>
      				<View style={{
					  backgroundColor: "#FFFFFF",
					  paddingVertical: 12,
					  borderTopWidth: 1,
					  borderTopColor: "#F0F0F0",
					}}>
					  <View style={{
						flexDirection: "row",
						justifyContent: "space-around",
						alignItems: "center",
					  }}>
						<TouchableOpacity onPress={() => router.push("/indexhome")} style={{ alignItems: "center" }}>
						  <Image source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/7xzn0bya_expires_30_days.png"}}
							resizeMode="stretch" style={{ width: 24, height: 24, marginBottom: 4 }} />
						  <Text style={{ color: "#9E9E9E", fontSize: 10 }}>Health</Text>
						</TouchableOpacity>
					
						<TouchableOpacity style={{ alignItems: "center" }}>
						  <Image source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/g7la5z8d_expires_30_days.png"}}
							resizeMode="stretch" style={{ width: 24, height: 24, marginBottom: 4 }} />
						  <Text style={{ color: "#F48BA1", fontSize: 10, fontWeight: "bold" }}>Expression</Text>
						</TouchableOpacity>
					
						<TouchableOpacity onPress={() => router.push("/AISchedule")} style={{ alignItems: "center" }}>
						  <Image source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/ndb4dzls_expires_30_days.png"}}
							resizeMode="stretch" style={{ width: 24, height: 24, marginBottom: 4 }} />
						  <Text style={{ color: "#9E9E9E", fontSize: 10 }}>Appointments</Text>
						</TouchableOpacity>
					
						<TouchableOpacity onPress={() => router.push("/profile-user")} style={{ alignItems: "center" }}>
						  <Image source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/45638hlp_expires_30_days.png"}}
							resizeMode="stretch" style={{ width: 24, height: 24, marginBottom: 4 }} />
						  <Text style={{ color: "#9E9E9E", fontSize: 10 }}>Profile</Text>
						</TouchableOpacity>
					  </View>
					</View>
		<Modal visible={open && !showWrite} animationType="slide" transparent={true}>
			
			{/* NỀN MỜ */}
			<View style={{
				flex: 1,
				backgroundColor: "rgba(0,0,0,0.4)",
				justifyContent: "flex-end"
			}}>

				{/* BOX MODAL */}
				<View style={{
					height: "80%",
					backgroundColor: "#F7F4F2",
					borderTopLeftRadius: 30,
					borderTopRightRadius: 30,
					overflow: "hidden"
				}}>

					<SafeAreaView style={{ flex: 1 }}>
						  {step === "view" && (
						<ScrollView
							style={{
								flex: 1,
								backgroundColor: "#F7F4F2",
								paddingBottom: 40,
							}}>

							{/* HEADER */}
							<View style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 11,
								marginLeft: 28,
								marginRight: 10,
								marginTop: 10
							}}>
								<Text style={{
									color: "#666668",
									fontSize: 32,
									fontWeight: "bold",
								}}>
									{"Today"}
								</Text>

								{/* NÚT ĐÓNG */}
								<TouchableOpacity onPress={() => setOpen(false)}>
									<Text style={{ fontSize: 20 }}>✕</Text>
								</TouchableOpacity>
							</View>

							{/* ===== GIỮ NGUYÊN UI CỦA BẠN ===== */}

							<View style={{ alignItems: "center", marginBottom: 19 }}>
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									<View style={{ marginRight: 7 }}>
										<Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/flw2spia_expires_30_days.png" }} style={{ width: 135, height: 19 }} />
									</View>
									<View>
										<Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/rfdct6s6_expires_30_days.png" }} style={{ width: 135, height: 19 }} />
									</View>
								</View>
							</View>

							{diary[selectedDay!] ? (
  <Text
    style={{
      color: "#333",
      fontSize: 16,
      marginBottom: 16,
      marginLeft: 53,
    }}
  >
    {diary[selectedDay!].content}
  </Text>
) : (
  <Text
    style={{
      color: "#B3B3B3",
      fontSize: 16,
      marginBottom: 16,
      marginLeft: 53,
    }}
  >
    {"No diary that day"}
  </Text>
)}
{diary[selectedDay!]?.activity && (
  <Image
    source={{ uri: diary[selectedDay!].activity!.image }}
    style={{
      width: 100,
      height: 100,
      marginLeft: 53,
      marginBottom: 20,
      borderRadius: 10
    }}
  />
)}

							<View style={{
								alignItems: "flex-end",
								backgroundColor: "#FFFFFF",
								borderRadius: 22,
								paddingTop: 156,
								paddingRight: 21,
								marginBottom: 12,
								marginLeft: 42,
								marginRight: 27,
								elevation: 4,
							}}>
								<TouchableOpacity onPress={() => setStep("mood")}>
									<LinearGradient
										colors={["#7A7A7AD4", "#BECBF8D4"]}
										style={{ borderRadius: 23, padding: 5 }}>
										<Image
											source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/vqpi7b1a_expires_30_days.png" }}
											style={{ width: 23, height: 23 }}
										/>
									</LinearGradient>
								</TouchableOpacity>
							</View>

						</ScrollView>
						  )}
						  {step === "mood" && (
  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }}>
    <Text style={{ marginBottom: 20 }}>
      How do you feel today?
    </Text>

    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => { setMood("angry"); setOpen(false); setShowWrite(true); }}>
        <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/msggubow_expires_30_days.png" }} style={{ width: 40, height: 40, margin: 6 }} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { setMood("sad"); setOpen(false); setShowWrite(true);}}>
        <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/rapaxtjj_expires_30_days.png" }} style={{ width: 40, height: 40, margin: 6 }} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { setMood("neutral"); setOpen(false); setShowWrite(true);}}>
        <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/roiPl7nvjg/ywnbzxvn_expires_30_days.png" }} style={{ width: 40, height: 40, margin: 6 }} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { setMood("fun"); setOpen(false); setShowWrite(true);}}>
        <Image source={require("../assets/images/fun.png")} style={{ width: 40, height: 40, margin: 6 }} />
      </TouchableOpacity>

	  <TouchableOpacity onPress={() => { setMood("happy"); setOpen(false); setShowWrite(true);}}>
        <Image source={require("../assets/images/happy.png")} style={{ width: 40, height: 40, margin: 6 }} />
      </TouchableOpacity>
    </View>
  </View>
)}
					</SafeAreaView>
				</View>
			</View>
		</Modal>
		<Modal visible={showWrite} animationType="slide">
  <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
    
    {/* Nút back */}
    <TouchableOpacity
      onPress={() => setShowWrite(false)}
      style={{ padding: 15 }}
    >
    </TouchableOpacity>

    {/* Màn write của bạn */}
<WriteScreen 
  mood={mood} 
  activity={activity}
  openActivity={() => setShowActivity(true)}
  selectedDay={selectedDay}   // 👈 THÊM
  onSave={(data) => {
    setDiary((prev) => ({
      ...prev,
      [selectedDay!]: data
    }));
    setShowWrite(false); // quay lại
  }}
/>
<Modal visible={showActivity} animationType="slide">
  <Activity
    onClose={() => setShowActivity(false)}
    onSelect={(item) => {
      setActivity(item);       // lưu activity
      setShowActivity(false);  // đóng modal
    }}
  />
</Modal>
  </SafeAreaView>
</Modal>
<TouchableOpacity
  onPress={() => setShowActivity(true)}
  style={{
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5BF",
    borderRadius: 32,
    paddingVertical: 6,
    marginTop: 2,
    marginBottom: 6,
    marginLeft: 23,
    paddingRight: 16,
  }}
>

</TouchableOpacity>
    </SafeAreaView>
	
	
  );
}
