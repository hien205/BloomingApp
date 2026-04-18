import { useRouter } from "expo-router";

import { Image, ScrollView, Text, TouchableOpacity, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useCallback } from "react";

export default function IndexhomeScreen() {
	
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


  const router = useRouter();
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
						backgroundColor: "#F7F4F2",
						marginBottom: 28,
					}}>
					<View style={{
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginHorizontal: 20,
  marginTop: 10,
  marginLeft: 40,
}}>
  
  {/* Avatar trái (hoặc back button nếu muốn) */}
  <TouchableOpacity>
    
  </TouchableOpacity>

  {/* TEXT CENTER */}
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
							marginBottom: 20,
							marginHorizontal: 16,
						}}>
						<View 
							style={{
								flex: 1,
								marginTop: 43,
								marginRight: 11,
							}}>
							<View 
								style={{
									marginBottom: 15,
								}}>
								<Text 
									style={{
										color: "#212121",
										fontSize: 23,
										fontWeight: "bold",
										width: 161,
									}}>
									{"Check-in with yourself today"}
								</Text>
								<Text 
									style={{
										color: "#5F5F5F",
										fontSize: 12,
										marginLeft: 2,
										width: 173,
									}}>
									{"Check your new Level to\nsee how far you have come!"}
								</Text>
							</View>
							<TouchableOpacity
                                onPress={() => router.push("/question1")}
                                  activeOpacity={0.7}
                                  style={{
                                  marginTop: 10,
                                  width: 50,
                                  height: 30,
                                  backgroundColor: "#7B5E4B",
                                  borderRadius: 15,
                                  justifyContent: "center",
                                  alignItems: "center",
  }}
>
  <Image
    source={{
uri: "https://img.icons8.com/ios-filled/50/ffffff/long-arrow-right.png",
    }}
    style={{
      width: 18,
      height: 18,
    }}
  />
</TouchableOpacity>
						</View>
						<View 
							style={{
								flex: 1,
								marginTop: 35,
								marginRight: -5,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/xqo8uutj_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 175,
									height: 175,
									marginRight: 20,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/uifvh8nu_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									position: "absolute",
									bottom: -12,
									right: -14,
									width: 30,
									height: 30,
								}}
							/>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/6xjp7xi5_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								position: "absolute",
								top: 0,
								left: 172,
								width: 30,
								height: 30,
							}}
						/>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 12,
							marginLeft: 18,
							marginRight: 32,
						}}>
						<TouchableOpacity 
							style={{
								flex: 1,
								alignItems: "center",
								backgroundColor: "#F48BA1",
								borderRadius: 128,
								paddingVertical: 6,
								marginRight: 12,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 10,
									fontWeight: "bold",
								}}>
								{"Well-being"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								flex: 1,
								alignItems: "center",
								backgroundColor: "#F5F5F5",
								borderRadius: 128,
								paddingVertical: 6,
								marginRight: 12,
							}} onPress={() => router.push("/nourishment")}>
							<Text 
								style={{
									color: "#9E9E9E",
									fontSize: 10,
								}}>
								{"Nourishment"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								backgroundColor: "#F5F5F5",
								borderRadius: 128,
								paddingVertical: 6,
								paddingHorizontal: 16,
								marginRight: 12,
							}} onPress={()=>router.push("/rest")}>
							<Text 
								style={{
									color: "#9E9E9E",
									fontSize: 10,
								}}>
								{"Rest"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								backgroundColor: "#F5F5F5",
								borderRadius: 128,
								paddingVertical: 6,
								paddingHorizontal: 16,
							}} onPress={()=>router.push("/calmhome")}>
							<Text 
								style={{
									color: "#9E9E9E",
									fontSize: 10,
								}}>
								{"Calm  "}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View 
					style={{
marginBottom: 19,
						marginHorizontal: 32,
					}}>
					<View 
						style={{
							paddingTop: 10,
							marginBottom: 11,
						}}>
						<View >
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/qa89jkyo_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									height: 198,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/5koiv9gu_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									position: "absolute",
									top: 30,
									right: 0,
									left: 0,
									height: 53,
								}}
							/>
						</View>
						<View 
							style={{
								position: "absolute",
								top: 0,
								right: 0,
								left: 0,
								alignItems: "center",
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/n6sueoda_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 21,
									height: 21,
								}}
							/>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginHorizontal: 16,
						}}>
						<Text 
							style={{
								color: "#444459",
								fontSize: 12,
								textAlign: "center",
								marginRight: 20,
								flex: 1,
							}}>
							{"Mon"}
						</Text>
						<Text 
							style={{
								color: "#444459",
								fontSize: 12,
								textAlign: "center",
								marginRight: 19,
								flex: 1,
							}}>
							{"Tues"}
						</Text>
						<Text 
							style={{
								color: "#444459",
								fontSize: 12,
								textAlign: "center",
								marginRight: 16,
								flex: 1,
							}}>
							{"Wed"}
						</Text>
						<Text 
							style={{
								color: "#444459",
								fontSize: 12,
								textAlign: "center",
								marginRight: 24,
								flex: 1,
							}}>
							{"Thur"}
						</Text>
						<Text 
							style={{
								color: "#444459",
								fontSize: 12,
								marginRight: 29,
							}}>
							{"Fri"}
						</Text>
						<Text 
							style={{
								color: "#444459",
								fontSize: 12,
								marginRight: 25,
							}}>
							{"Sat"}
						</Text>
						<Text 
							style={{
								color: "#444459",
								fontSize: 12,
								textAlign: "center",
								flex: 1,
							}}>
							{"Sun"}
						</Text>
					</View>
				</View>
				<View 
					style={{
						marginBottom: 29,
						marginHorizontal: 42,
					}}>
					<View 
						style={{
							paddingTop: 7,
							marginBottom: 20,
						}}>
						<Text 
							style={{
								color: "#003F5F",
								fontSize: 24,
								marginBottom: 27,
							}}>
							{"Your Medications"}
						</Text>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<View 
								style={{
									flex: 1,
									marginRight: 21,
}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/bncxaeug_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 25,
										height: 25,
										marginBottom: 20,
									}}
								/>
								<Text 
									style={{
										color: "#003F5F",
										fontSize: 18,
									}}>
									{"Mo"}
								</Text>
							</View>
							<View 
								style={{
									flex: 1,
									marginRight: 20,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/q07zgh98_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 25,
										height: 25,
										marginBottom: 20,
									}}
								/>
								<Text 
									style={{
										color: "#003F5F",
										fontSize: 18,
									}}>
									{"Tu"}
								</Text>
							</View>
							<View 
								style={{
									flex: 1,
									marginRight: 22,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/z5011cro_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 25,
										height: 25,
										marginBottom: 20,
									}}
								/>
								<Text 
									style={{
										color: "#003F5F",
										fontSize: 18,
									}}>
									{"We"}
								</Text>
							</View>
							<View 
								style={{
									flex: 1,
									marginRight: 21,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/5vjonguy_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 25,
										height: 25,
										marginBottom: 20,
									}}
								/>
								<Text 
									style={{
										color: "#003F5F",
										fontSize: 18,
									}}>
									{"Th"}
								</Text>
							</View>
							<View 
								style={{
									flex: 1,
									marginRight: 20,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/p01uemj5_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 25,
										height: 25,
										marginBottom: 20,
									}}
								/>
								<Text 
									style={{
										color: "#003F5F",
										fontSize: 18,
									}}>
									{"Fr"}
								</Text>
							</View>
							<View 
								style={{
									flex: 1,
									marginRight: 21,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/x73ytmg9_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 25,
										height: 25,
										marginBottom: 20,
									}}
								/>
								<Text 
									style={{
										color: "#003F5F",
										fontSize: 18,
									}}>
{"Sa"}
								</Text>
							</View>
							<View 
								style={{
									flex: 1,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/a5x2gln0_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 25,
										height: 25,
										marginBottom: 20,
									}}
								/>
								<Text 
									style={{
										color: "#003F5F",
										fontSize: 18,
									}}>
									{"So"}
								</Text>
							</View>
						</View>
					</View>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							borderRadius: 32,
							padding: 30,
							marginBottom: 20,
							shadowColor: "#DADADA",
							shadowOpacity: 1,
							shadowOffset: {
							    width: 0,
							    height: 1
							},
							shadowRadius: 3,
							elevation: 3,
						}}>
						<View 
							style={{
								marginBottom: 16,
							}}>
							<Text 
								style={{
									color: "#003F5F",
									fontSize: 18,
									fontWeight: "bold",
									marginBottom: 8,
									marginRight: 71,
								}}>
								{"Aspirin"}
							</Text>
							<Text 
								style={{
									color: "#003F5F",
									fontSize: 10,
								}}>
								{"ASS, 500mg BAYER, überzogene Tabletten"}
							</Text>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
							}}>
							<View >
								<View 
									style={{
										alignSelf: "flex-start",
										flexDirection: "row",
										alignItems: "center",
										marginBottom: 8,
										marginRight: 28,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/5kbucxxo_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 12,
											height: 12,
											marginRight: 5,
										}}
									/>
									<Text 
										style={{
											color: "#003F5F",
											fontSize: 10,
										}}>
										{"Reminders"}
									</Text>
								</View>
								<Text 
									style={{
										color: "#003F5F",
										fontSize: 18,
										fontWeight: "bold",
									}}>
									{"6:00, 22:00"}
								</Text>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/icxi91hc_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 44,
									height: 44,
									marginTop: 12,
								}}
							/>
						</View>
					</View>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							borderRadius: 32,
							padding: 30,
							shadowColor: "#DADADA",
							shadowOpacity: 1,
							shadowOffset: {
							    width: 0,
							    height: 1
							},
							shadowRadius: 3,
							elevation: 3,
						}}>
						<View 
							style={{
								marginBottom: 16,
							}}>
							<Text 
								style={{
color: "#003F5F",
									fontSize: 18,
									fontWeight: "bold",
									marginBottom: 8,
									marginRight: 52,
								}}>
								{"Vitamins"}
							</Text>
							<Text 
								style={{
									color: "#003F5F",
									fontSize: 10,
								}}>
								{"Mulitvitamin from Xworks, Capsule"}
							</Text>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
							}}>
							<View >
								<View 
									style={{
										alignSelf: "flex-start",
										flexDirection: "row",
										alignItems: "center",
										marginBottom: 8,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/2b2x4fzr_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 12,
											height: 12,
											marginRight: 5,
										}}
									/>
									<Text 
										style={{
											color: "#003F5F",
											fontSize: 10,
										}}>
										{"Reminders"}
									</Text>
								</View>
								<Text 
									style={{
										color: "#003F5F",
										fontSize: 18,
										fontWeight: "bold",
										marginRight: 36,
									}}>
									{"8:00"}
								</Text>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/on6pmaru_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 44,
									height: 44,
									marginTop: 12,
								}}
							/>
						</View>
					</View>
				</View>
				<View 
					style={{
						marginBottom: 58,
						marginHorizontal: 39,
					}}>
					<View 
						style={{
							paddingVertical: 4,
							paddingLeft: 2,
							marginBottom: 20,
						}}>
						<Text 
							style={{
								color: "#003F5F",
								fontSize: 24,
							}}>
							{"Updates"}
						</Text>
					</View>
					<View 
						style={{
							flexDirection: "row",
							backgroundColor: "#FFFFFF",
							borderRadius: 32,
							padding: 30,
							shadowColor: "#DADADA",
							shadowOpacity: 1,
							shadowOffset: {
							    width: 0,
							    height: 1
							},
							shadowRadius: 3,
							elevation: 3,
						}}>
						<View 
							style={{
								flex: 1,
								marginRight: 28,
							}}>
							<View 
								style={{
									marginBottom: 16,
								}}>
								<Text 
									style={{
										color: "#003F5F",
										fontSize: 18,
										fontWeight: "bold",
										marginBottom: 8,
									}}>
									{"Daily Log"}
								</Text>
								<Text 
									style={{
										color: "#003F5F",
										fontSize: 10,
									}}>
									{"Tell us how you are today!!"}
								</Text>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
								}}>
								<View 
									style={{
										alignSelf: "flex-start",
										flexDirection: "row",
										alignItems: "center",
marginBottom: 8,
										marginRight: 28,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/nfh79lev_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 12,
											height: 12,
											marginRight: 5,
										}}
									/>
									<Text 
										style={{
											color: "#003F5F",
											fontSize: 10,
										}}>
										{"Reminders"}
									</Text>
								</View>
								<Text 
									style={{
										color: "#003F5F",
										fontSize: 18,
										fontWeight: "bold",
									}}>
									{"6:00, 22:00"}
								</Text>
							</View>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/loxw4bye_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 84,
								height: 84,
							}}
						/>
					</View>
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
    <TouchableOpacity style={{ alignItems: "center" }}>
      <Image source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/0e1y69h4_expires_30_days.png"}}
        resizeMode="stretch" style={{ width: 24, height: 24, marginBottom: 4 }} />
      <Text style={{ color: "#F48BA1", fontSize: 10, fontWeight: "bold" }}>Health</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => router.push("/journaling")} style={{ alignItems: "center" }}>
      <Image source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/qglghqbr_expires_30_days.png"}}
        resizeMode="stretch" style={{ width: 24, height: 24, marginBottom: 4 }} />
      <Text style={{ color: "#9E9E9E", fontSize: 10 }}>Expression</Text>
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


		</SafeAreaView>
	)}