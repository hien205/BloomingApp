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
export default function BreakfastScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.column}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.back()}
            >
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57d57a09-c37c-4a49-ba2f-25b67b9845d6",
                }}
                resizeMode={"stretch"}
                style={styles.image}
              />
            </TouchableOpacity>
            <View style={styles.view}>
              <Text style={styles.text}>{"Breakfast"}</Text>
            </View>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => alert("Pressed!")}
            >
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b737554-93d3-4ec5-9bba-a59189697a12",
                }}
                resizeMode={"stretch"}
                style={styles.image2}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row2}>
            <View style={styles.view2}>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf2e0e4e-04c6-4cda-9a67-4de76e02b27f",
                }}
                resizeMode={"stretch"}
                style={styles.image3}
              />
            </View>
            <Text style={styles.text2}>{"Search Pancake"}</Text>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d57863dc-8b6e-4c43-8a40-f6004d23d3ad",
                }}
                resizeMode={"stretch"}
                style={styles.image4}
              />
            </View>
          </View>
        </View>
        <View style={styles.column2}>
          <View style={styles.view3}>
            <Text style={styles.text3}>{"Category"}</Text>
          </View>
          <View style={styles.row3}>
            {/* CAKES */}
            <TouchableOpacity
              style={styles.column3}
              onPress={() => router.push("/cakecategory")}
            >
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3e9fa2a-d897-4358-b0c8-1b5c093593db",
                }}
                resizeMode="stretch"
                style={styles.image5}
              />
              <View style={styles.view4}>
                <Text style={styles.text4}>Cakes</Text>
              </View>
            </TouchableOpacity>

            {/* BOWLS */}
            <TouchableOpacity onPress={() => router.push("/cakecategory")}>
              <LinearGradient
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0 }}
                colors={["#92A3FD", "#9DCEFF"]}
                style={styles.column4}
              >
                <Image
                  source={{
                    uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/966e28f3-5337-4ae9-a2ff-9455f7223fa3",
                  }}
                  resizeMode="stretch"
                  style={styles.image5}
                />
                <View style={styles.view4}>
                  <Text style={styles.text4}>Bowls</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>

            {/* SMOOTHIES */}
            <TouchableOpacity
              style={styles.column5}
              onPress={() => router.push("/cakecategory")}
            >
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d187c034-013c-4f7f-a23b-96f03fd7ea38",
                }}
                resizeMode="stretch"
                style={styles.image5}
              />
              <View style={styles.view5}>
                <Text style={styles.text4}>Smoothies</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.view6}>
          <Text style={styles.text5}>{"Recommendation for Breakfast"}</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {/* CARD 1 */}
          {/* CARD 1 */}
          <TouchableOpacity
            style={[styles.card, styles.card1]}
            onPress={() => router.push("/cakedetails")}
          >
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5527acf6-f4ac-449c-bce0-1cdfe8633e66",
              }}
              style={styles.image6}
            />

            <View style={styles.column7}>
              <Text style={styles.text6}>Banana Sandwich</Text>
              <Text style={styles.text7}>Easy | 15mins | 195kCal</Text>
            </View>

            <TouchableOpacity style={styles.button3}>
              <Text style={styles.text8}>View</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          {/* CARD 2 */}
          <View style={[styles.card, styles.card2]}>
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5527acf6-f4ac-449c-bce0-1cdfe8633e66",
              }}
              style={styles.image6}
            />
            <View style={styles.column7}>
              <Text style={styles.text6}>Banana Sandwich</Text>
              <Text style={styles.text7}>Easy | 15mins | 195kCal</Text>
            </View>
            <TouchableOpacity style={styles.button3}>
              <Text style={styles.text8}>View</Text>
            </TouchableOpacity>
          </View>

          {/* CARD 3 */}
          <View style={[styles.card, styles.card3]}>
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5527acf6-f4ac-449c-bce0-1cdfe8633e66",
              }}
              style={styles.image6}
            />
            <View style={styles.column7}>
              <Text style={styles.text6}>Banana Sandwich</Text>
              <Text style={styles.text7}>Easy | 15mins | 195kCal</Text>
            </View>
            <TouchableOpacity style={styles.button3}>
              <Text style={styles.text8}>View</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.view7}>
          <Text style={styles.text3}>{"Popular"}</Text>
        </View>
        <View style={styles.row4}>
          <Image
            source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb7b4385-219c-4bd3-b230-10fe34fe3f93",
            }}
            resizeMode={"stretch"}
            style={styles.image7}
          />
          <View>
            <Text style={styles.text9}>{"Mango Smoothie"}</Text>
            <Text style={styles.text7}>{"Medium | 10mins | 230kCal"}</Text>
          </View>
          <View style={styles.box}></View>
          <Image
            source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1af82b9a-370c-4d81-9c98-2e9c9c2c08c0",
            }}
            resizeMode={"stretch"}
            style={styles.image8}
          />
        </View>
        <View style={styles.row5}>
          <Image
            source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d3789a5-aae9-4a72-8b4c-3a1ea294f19e",
            }}
            resizeMode={"stretch"}
            style={styles.image7}
          />
          <View>
            <Text style={styles.text10}>{"Pineapple Smoothie"}</Text>
            <Text style={styles.text7}>{"Medium | 15mins | 120kCal"}</Text>
          </View>
          <View style={styles.box}></View>
          <Image
            source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/554279c5-f4b8-483f-8c37-29034acf24b1",
            }}
            resizeMode={"stretch"}
            style={styles.image8}
          />
        </View>
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
    flex: 1,
    alignSelf: "stretch",
  },
  box2: {
    width: 8,
    height: 20,
    backgroundColor: "#DDD9DA",
    marginRight: 6,
  },
  button: {
    borderColor: "#4E3321",
    borderRadius: 1234,
    borderWidth: 1,
    padding: 3,
  },
  button2: {
    backgroundColor: "#F7F8F8",
    borderRadius: 8,
    padding: 12,
  },
  button3: {
    backgroundColor: "#F48BA1",
    borderRadius: 99,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  column: {
    backgroundColor: "#F3F0EE",
    paddingTop: 42,
    marginBottom: 13,
  },
  column2: {
    marginBottom: 18,
    marginLeft: 22,
    marginRight: 39,
  },
  column3: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D6A5D2",
    borderRadius: 16,
    paddingVertical: 14,
    marginRight: 38,
  },
  column4: {
    flex: 1,
    alignItems: "center",
    borderRadius: 16,
    paddingVertical: 14,
    marginRight: 38,
  },
  column5: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D6A5D2",
    borderRadius: 16,
    paddingVertical: 14,
  },
  column6: {
    alignItems: "center",
    backgroundColor: "#F48BA1",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 33,
    marginLeft: 19,
    marginRight: -371,
  },
  column7: {
    marginBottom: 15,
  },
  column8: {
    alignItems: "center",
    backgroundColor: "#F48BA1",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 33,
  },
  image: {
    borderRadius: 1234,
    width: 24,
    height: 24,
  },
  image2: {
    width: 11,
    height: 3,
  },
  image3: {
    width: 16,
    height: 16,
  },
  image4: {
    width: 14,
    height: 12,
  },
  image5: {
    width: 53,
    height: 48,
    marginBottom: 6,
  },
  image6: {
    width: 120,
    height: 87,
    marginBottom: 18,
  },
  image7: {
    width: 74,
    height: 60,
    marginRight: 16,
  },
  image8: {
    width: 27,
    height: 24,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 42,
    marginLeft: 33,
    marginRight: 21,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 15,
    paddingHorizontal: 18,
    marginHorizontal: 22,
    shadowColor: "#1D161712",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
  },
  row3: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
  },
  row4: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
    marginHorizontal: 19,
    shadowColor: "#1D161712",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
  },
  row5: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 13,
    paddingHorizontal: 12,
    marginHorizontal: 19,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F7F4F2",
    paddingBottom: 14,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
  },
  scrollView2: {
    flexDirection: "row",
    marginBottom: 10,
  },
  text: {
    color: "#4E3321",
    fontSize: 20,
    fontWeight: "bold",
  },
  text2: {
    color: "#DDD9DA",
    fontSize: 12,
  },
  text3: {
    color: "#1D1517",
    fontSize: 16,
    fontWeight: "bold",
  },
  text4: {
    color: "#1D1517",
    fontSize: 12,
  },
  text5: {
    color: "#1D1517",
    fontSize: 16,
    fontWeight: "bold",
    width: 170,
  },
  text6: {
    color: "#1D1517",
    fontSize: 14,
    marginBottom: 5,
  },
  text7: {
    color: "#7B6F72",
    fontSize: 12,
  },
  text8: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  text9: {
    color: "#1D1517",
    fontSize: 14,
    marginBottom: 3,
    marginRight: 37,
  },
  text10: {
    color: "#1D1517",
    fontSize: 14,
    marginBottom: 3,
  },
  view: {
    paddingBottom: 1,
  },
  view2: {
    marginRight: 14,
  },
  view3: {
    alignSelf: "flex-start",
    paddingBottom: 1,
    marginBottom: 15,
  },
  view4: {
    paddingBottom: 1,
    marginHorizontal: 22,
  },
  view5: {
    paddingBottom: 1,
    marginHorizontal: 9,
  },
  view6: {
    alignSelf: "flex-start",
    paddingBottom: 1,
    marginBottom: 23,
    marginLeft: 22,
  },
  view7: {
    alignSelf: "flex-start",
    paddingBottom: 1,
    marginBottom: 15,
    marginLeft: 19,
    marginTop: 20,
  },
  scrollContainer: {
    paddingLeft: 20,
    paddingRight: 10,
  },

  card: {
    width: 220,
    backgroundColor: "#F48BA1",
    borderRadius: 20,
    padding: 15,
    marginRight: 15,
    alignItems: "center",
  },
  card1: {
    backgroundColor: "#FFE5E5", // hồng pastel
  },

  card2: {
    backgroundColor: "#E5F4FF", // xanh dương pastel
  },

  card3: {
    backgroundColor: "#f5ebfb", // xanh lá pastel
  },
});
