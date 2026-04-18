import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function CakeDetailScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.column}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/cakecategory")}
          >
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/022f1830-043d-4040-8713-d6e7c173da50",
              }}
              resizeMode={"stretch"}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3f99fbe-e3a6-4f84-844a-883774156309",
          }}
          resizeMode={"stretch"}
          style={styles.image2}
        />
        <View style={styles.view}>
          <View style={styles.box}></View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.text}>{"Banana Sandwich"}</Text>
            <Text style={styles.text2}>{"by James Ruth"}</Text>
          </View>
          <TouchableOpacity
            style={styles.button3}
            onPress={() => alert("Pressed!")}
          >
            <View style={styles.view2}>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc724a23-7f6f-4bc0-9e8e-81a10f4d31f2",
                }}
                resizeMode={"stretch"}
                style={styles.image3}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.column2}>
          <View style={styles.view3}>
            <Text style={styles.text3}>{"Nutrition"}</Text>
          </View>
          <View style={styles.row2}>
            <LinearGradient
              start={{ x: 1, y: 1 }}
              end={{ x: -0, y: -0 }}
              colors={["#92A3FD", "#9DCEFF"]}
              style={styles.row3}
            >
              <View style={styles.view4}>
                <Image
                  source={{
                    uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7762a8da-31c1-4fc1-a6c7-54af8656f0a3",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image4}
                />
              </View>
              <View style={styles.view5}>
                <Text style={styles.text4}>{"180kCal"}</Text>
              </View>
            </LinearGradient>
            <LinearGradient
              start={{ x: 1, y: 1 }}
              end={{ x: -0, y: -0 }}
              colors={["#92A3FD", "#9DCEFF"]}
              style={styles.row4}
            >
              <View style={styles.view6}>
                <Image
                  source={{
                    uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/929fe4ce-ae12-495e-b9cb-9b6e377cf78b",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image5}
                />
              </View>
              <View style={styles.view5}>
                <Text style={styles.text4}>{"30g fats"}</Text>
              </View>
            </LinearGradient>
            <LinearGradient
              start={{ x: 1, y: 1 }}
              end={{ x: -0, y: -0 }}
              colors={["#92A3FD", "#9DCEFF"]}
              style={styles.row5}
            >
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5023f3b3-3382-4824-8215-14e47e4fa347",
                }}
                resizeMode={"stretch"}
                style={styles.image6}
              />
              <View style={styles.view5}>
                <Text style={styles.text4}>{"20g proteins"}</Text>
              </View>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.column3}>
          <View style={styles.view7}>
            <Text style={styles.text3}>{"Descriptions"}</Text>
          </View>
          <View style={styles.view8}>
            <Text style={styles.text5}>
              {
                "Pancakes are some people's favorite breakfast, who doesn't like pancakes? Especially with the real honey splash on top of the pancakes, of course everyone loves that! besides being Read More..."
              }
            </Text>
          </View>
        </View>
        <View style={styles.row6}>
          <View style={styles.view9}>
            <Text style={styles.text6}>{"Ingredients That You Will Need"}</Text>
          </View>
          <Text style={styles.text7}>{"6 items"}</Text>
        </View>
        <View style={styles.row7}>
          <TouchableOpacity
            style={styles.button4}
            onPress={() => alert("Pressed!")}
          >
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c82c5cc-6e00-4e41-bc46-b5f485d69d6c",
              }}
              resizeMode={"stretch"}
              style={styles.image7}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button5}
            onPress={() => alert("Pressed!")}
          >
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6940fcc5-3c07-4fa8-9526-6a8dd13ee5ad",
              }}
              resizeMode={"stretch"}
              style={styles.image8}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button6}
            onPress={() => alert("Pressed!")}
          >
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3b76b65-691c-4064-aaa2-1e1bca1ee7bb",
              }}
              resizeMode={"stretch"}
              style={styles.image9}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button7}
            onPress={() => alert("Pressed!")}
          >
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37ee00e6-1dd7-4b6b-aa16-27ec4a451dd6",
              }}
              resizeMode={"stretch"}
              style={styles.image10}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row8}>
          <View style={styles.column4}>
            <Text style={styles.text8}>{"Wheat Flour"}</Text>
            <Text style={styles.text9}>{"100gr"}</Text>
          </View>
          <View style={styles.column5}>
            <Text style={styles.text10}>{"Sugar"}</Text>
            <Text style={styles.text11}>{"3 tbsp"}</Text>
          </View>
          <View style={styles.column6}>
            <Text style={styles.text12}>{"Baking Soda"}</Text>
            <Text style={styles.text11}>{"2 tsp"}</Text>
          </View>
          <View>
            <Text style={styles.text10}>{"Eggs"}</Text>
            <Text style={styles.text11}>{"2 items"}</Text>
          </View>
        </View>
        <View style={styles.column7}>
          <View style={styles.row9}>
            <View style={styles.view5}>
              <Text style={styles.text3}>{"Step by Step"}</Text>
            </View>
            <Text style={styles.text7}>{"8 Steps"}</Text>
          </View>
          <View>
            <View style={styles.row10}>
              <View style={styles.view10}>
                <Text style={styles.text13}>{"01"}</Text>
              </View>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d80af6d-44bd-4c40-92d7-9f9ba9a5e74e",
                }}
                resizeMode={"stretch"}
                style={styles.image11}
              />
              <View style={styles.column8}>
                <View style={styles.view11}>
                  <Text style={styles.text14}>{"Step 1"}</Text>
                </View>
                <View style={styles.view5}>
                  <Text style={styles.text7}>
                    {"Prepare all of the ingredients that needed"}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.row11}>
              <View style={styles.view12}>
                <Text style={styles.text15}>{"02"}</Text>
              </View>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8da7bdee-f8de-4410-84b7-2c1b22ad5fd1",
                }}
                resizeMode={"stretch"}
                style={styles.image11}
              />
              <View style={styles.column9}>
                <View style={styles.view11}>
                  <Text style={styles.text14}>{"Step 2"}</Text>
                </View>
                <View style={styles.view5}>
                  <Text style={styles.text7}>
                    {"Mix flour, sugar, salt, and baking powder"}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.row11}>
              <View style={styles.view12}>
                <Text style={styles.text15}>{"03"}</Text>
              </View>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a74b7df9-d7ef-40fe-a6bb-61ecae5d8caf",
                }}
                resizeMode={"stretch"}
                style={styles.image11}
              />
              <View style={styles.column10}>
                <View style={styles.view11}>
                  <Text style={styles.text14}>{"Step 3"}</Text>
                </View>
                <View style={styles.view5}>
                  <Text style={styles.text7}>
                    {
                      "In a seperate place, mix the eggs and liquid milk until blended"
                    }
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.row11}>
              <View style={styles.view13}>
                <Text style={styles.text15}>{"04"}</Text>
              </View>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f962528-96a5-4ea0-a545-d50890305392",
                }}
                resizeMode={"stretch"}
                style={styles.image11}
              />
              <View style={styles.column11}>
                <View style={styles.view11}>
                  <Text style={styles.text14}>{"Step 4"}</Text>
                </View>
                <View style={styles.view5}>
                  <Text style={styles.text7}>
                    {
                      "Put the egg and milk mixture into the dry ingredients, Stir untul smooth and smooth"
                    }
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.row12}>
              <View style={styles.view12}>
                <Text style={styles.text15}>{"05"}</Text>
              </View>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2dc9432f-7965-4191-8448-7ac2391b3721",
                }}
                resizeMode={"stretch"}
                style={styles.image11}
              />
              <View style={styles.column8}>
                <View style={styles.view11}>
                  <Text style={styles.text14}>{"Step 5"}</Text>
                </View>
                <View style={styles.view5}>
                  <Text style={styles.text7}>
                    {"Prepare all of the ingredients that needed"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button8}
          onPress={() =>
    router.push({
      pathname: "/nourishment",
      params: {
        name: "Banana Sandwich",
        time: "Today | 9am",
        image: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54769192-fb25-444b-91da-08c1749bbf05"
      }
    })
  }
>
          <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: -0, y: -0 }}
            colors={["#92A3FD", "#9DCEFF"]}
            style={styles.button8}
          >
            <Text style={styles.text16}>{"Add to Breakfast Meal"}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  box: {
    width: 50,
    height: 5,
    backgroundColor: "#1D1517",
    borderRadius: 50,
  },
  button: {
    alignSelf: "flex-start",
    borderColor: "#4E3321",
    borderRadius: 1234,
    borderWidth: 1,
    padding: 3,
  },
  button2: {
    alignSelf: "flex-start",
    borderColor: "#4E3321",
    borderRadius: 1234,
    borderWidth: 1,
    padding: 3,
    marginLeft: 11,
  },
  button3: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 10,
    shadowColor: "#1D161712",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
  },
  button4: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F7F8F8",
    borderRadius: 12,
    paddingVertical: 15,
    marginRight: 15,
  },
  button5: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F7F8F8",
    borderRadius: 12,
    paddingVertical: 19,
    marginRight: 15,
  },
  button6: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F7F8F8",
    borderRadius: 12,
    paddingVertical: 18,
    marginRight: 15,
  },
  button7: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F7F8F8",
    borderRadius: 12,
    paddingVertical: 25,
  },
  button8: {
    borderRadius: 25,
    paddingVertical: 16, // tăng chiều cao
    paddingHorizontal: 30, // tăng chiều ngang
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20, // cách 2 bên
  },
  column: {
    backgroundColor: "#F7F4F2",
    paddingVertical: 38,
    paddingLeft: 21,
    marginHorizontal: 1,
  },
  column2: {
    alignSelf: "flex-start",
    marginBottom: 30,
    marginLeft: 20,
  },
  column3: {
    alignSelf: "flex-start",
    marginBottom: 35,
    marginLeft: 20,
  },
  column4: {
    marginRight: 30,
  },
  column5: {
    marginRight: 45,
  },
  column6: {
    paddingRight: 1,
    marginRight: 21,
  },
  column7: {
    marginBottom: 16,
    marginHorizontal: 28,
  },
  column8: {
    flex: 1,
    paddingRight: 26,
  },
  column9: {
    flex: 1,
    paddingRight: 36,
  },
  column10: {
    flex: 1,
    paddingRight: 14,
  },
  column11: {
    flex: 1,
    paddingRight: 24,
  },
  image: {
    borderRadius: 1234,
    width: 24,
    height: 24,
  },
  image2: {
    height: 237,
    marginBottom: 31,
    marginHorizontal: 36,
  },
  image3: {
    width: 14,
    height: 12,
  },
  image4: {
    width: 13,
    height: 12,
  },
  image5: {
    width: 14,
    height: 11,
  },
  image6: {
    width: 15,
    height: 13,
    marginRight: 6,
  },
  image7: {
    width: 39,
    height: 42,
  },
  image8: {
    width: 36,
    height: 35,
  },
  image9: {
    width: 29,
    height: 36,
  },
  image10: {
    width: 34,
    height: 24,
  },
  image11: {
    width: 21,
    height: 20,
    marginRight: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    marginHorizontal: 20,
  },
  row2: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  row3: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 11,
    paddingHorizontal: 10,
    marginRight: 15,
  },
  row4: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 11,
    marginRight: 15,
  },
  row5: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 11,
    paddingHorizontal: 12,
  },
  row6: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17,
    marginLeft: 20,
  },
  row7: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginHorizontal: 20,
  },
  row8: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 26,
    marginLeft: 23,
  },
  row9: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  row10: {
    flexDirection: "row",
    marginBottom: 30,
  },
  row11: {
    flexDirection: "row",
    paddingBottom: 25,
    marginBottom: 5,
  },
  row12: {
    flexDirection: "row",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F7F4F2",
    paddingBottom: 20,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
  },
  text: {
    color: "#1D1517",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text2: {
    color: "#7B6F72",
    fontSize: 12,
    marginRight: 60,
  },
  text3: {
    color: "#1D1517",
    fontSize: 16,
    fontWeight: "bold",
  },
  text4: {
    color: "#1D1517",
    fontSize: 10,
  },
  text5: {
    color: "#7B6F72",
    fontSize: 12,
    width: 312,
  },
  text6: {
    color: "#1D1517",
    fontSize: 16,
    fontWeight: "bold",
    width: 165,
  },
  text7: {
    color: "#7B6F72",
    fontSize: 12,
  },
  text8: {
    color: "#1D1517",
    fontSize: 12,
    marginBottom: 8,
  },
  text9: {
    color: "#7B6F72",
    fontSize: 10,
    marginLeft: 2,
    marginRight: 41,
  },
  text10: {
    color: "#1D1517",
    fontSize: 12,
    marginBottom: 7,
  },
  text11: {
    color: "#7B6F72",
    fontSize: 10,
  },
  text12: {
    color: "#1D1517",
    fontSize: 12,
    marginBottom: 7,
    marginLeft: 1,
  },
  text13: {
    color: "#C58BF2",
    fontSize: 14,
  },
  text14: {
    color: "#1D1517",
    fontSize: 14,
  },
  text15: {
    color: "#ACA3A5",
    fontSize: 14,
  },
  text16: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  view: {
    alignItems: "center",
    marginBottom: 30,
  },
  view2: {
    alignSelf: "flex-start",
  },
  view3: {
    alignSelf: "flex-start",
    paddingBottom: 1,
    marginBottom: 15,
    marginRight: 233,
  },
  view4: {
    paddingHorizontal: 1,
    marginRight: 6,
  },
  view5: {
    paddingBottom: 1,
  },
  view6: {
    marginRight: 8,
  },
  view7: {
    alignSelf: "flex-start",
    paddingBottom: 1,
    marginBottom: 15,
    marginRight: 216,
  },
  view8: {
    alignSelf: "flex-start",
    paddingBottom: 1,
  },
  view9: {
    marginRight: 104,
  },
  view10: {
    paddingBottom: 1,
    marginRight: 18,
  },
  view11: {
    alignSelf: "flex-start",
    paddingBottom: 1,
    marginBottom: 5,
  },
  view12: {
    paddingBottom: 1,
    marginRight: 14,
  },
  view13: {
    paddingBottom: 1,
    marginRight: 13,
  },
});
