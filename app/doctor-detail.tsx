import { useLocalSearchParams, useRouter } from "expo-router";
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

export default function DoctorDetail() {
  const params = useLocalSearchParams();

  const name = Array.isArray(params.name) ? params.name[0] : params.name;
  const specialty = Array.isArray(params.specialty)
    ? params.specialty[0]
    : params.specialty;
  const image = Array.isArray(params.image) ? params.image[0] : params.image;
  const experience = Array.isArray(params.experience)
    ? params.experience[0]
    : params.experience;
  const focus = Array.isArray(params.focus) ? params.focus[0] : params.focus;
  const rating = Array.isArray(params.rating)
    ? params.rating[0]
    : params.rating;
  const patients = Array.isArray(params.patients)
    ? params.patients[0]
    : params.patients;
  const schedule = Array.isArray(params.schedule)
    ? params.schedule[0]
    : params.schedule;
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.back()} // Dùng replace để quay về Home mượt
          >
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc7bdbaf-ebeb-419e-bd48-d3cc21b09288",
              }}
              style={styles.image}
            />
          </TouchableOpacity>

          <Text style={styles.text}>{"Doctors"}</Text>
          <View style={styles.box}></View>
        </View>

        <View style={styles.column}>
          <View style={styles.row2}>
            <Image source={{ uri: image }} style={styles.image2} />

            <View style={styles.column2}>
              <View style={styles.row3}>
                <TouchableOpacity style={styles.button2}>
                  <Image
                    source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/474e8721-6a5d-4db3-9a0c-95538f5ce3ac",
                    }}
                    style={styles.image3}
                  />
                </TouchableOpacity>

                <View style={styles.column3}>
                  <Text style={styles.text2}>{experience}</Text>
                  <Text style={styles.text3}>experience</Text>
                </View>
                <View style={styles.box2}></View>
              </View>

              <View style={styles.view}>
                <Text style={styles.text4}>{"Focus: " + focus}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.buttonColumn}>
            <Text style={styles.text5}>{name}</Text>
            <Text style={styles.text6}>{specialty}</Text>
          </TouchableOpacity>

          <View style={styles.row4}>
            <View style={styles.row5}>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5dd74cd2-69bd-40ab-a49b-15c505f3cbc7",
                }}
                style={styles.image4}
              />
              <Text style={styles.text7}>{rating + " "}</Text>
              <View style={styles.box3}></View>
            </View>

            <View style={styles.row6}>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/150bcecf-720d-4f3e-b6ed-34a8f2b4cb55",
                }}
                style={styles.image5}
              />
              <Text style={styles.text8}>{patients}</Text>
            </View>

            <View style={styles.row7}>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/756bf12b-7fb1-440f-9deb-f13cc6c485b7",
                }}
                style={styles.image6}
              />
              <Text style={styles.text8}>{schedule}</Text>
            </View>
          </View>
          <View style={styles.row8}>
            <View style={styles.row9}>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abb0fa7e-c667-4a98-92c5-5aa841798594",
                }}
                resizeMode="contain"
                style={styles.image7}
              />
              <Text style={styles.text9}>{"Schedule"}</Text>
            </View>

            <View style={styles.box4} />

            {/* 4 nút icon - đã thêm kích thước rõ ràng */}
            <TouchableOpacity
              style={[
                styles.button3,
                {
                  width: 42,
                  height: 42,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
              onPress={() => alert("Calendar Pressed!")}
            >
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01ef3019-cef1-49dd-b660-6aa1de5049a1",
                }}
                resizeMode="contain"
                style={styles.image8}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button4,
                {
                  width: 42,
                  height: 42,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
              onPress={() => alert("Clock Pressed!")}
            >
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83f37208-25d7-47fc-93af-20dbe5a4473c",
                }}
                resizeMode="contain"
                style={styles.image9}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button5,
                {
                  width: 42,
                  height: 42,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
              onPress={() => alert("Pressed!")}
            >
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbedba4f-7df8-4f55-b8de-e7a3816d3414",
                }}
                resizeMode="contain"
                style={styles.image10}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button6,
                {
                  width: 42,
                  height: 42,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
              onPress={() => alert("Pressed!")}
            >
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e69ecb02-6f92-4fe9-b9eb-62dff770f546",
                }}
                resizeMode="contain"
                style={styles.image11}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.column4}>
          <Text style={styles.text10}>{"Profile"}</Text>
          <Text style={styles.text8}>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          </Text>
        </View>

        <View style={styles.column5}>
          <Text style={styles.text10}>{"Career path"}</Text>
          <Text style={styles.text8}>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          </Text>
        </View>

        <View style={styles.column6}>
          <Text style={styles.text11}>{"Highlights"}</Text>
          <Text style={styles.text8}>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F4F2",
  },
  box: {
    width: 36,
    height: 36,
  },
  box2: {
    width: 24,
    height: 21,
  },
  box3: {
    width: 11,
    height: 10,
  },
  box4: {
    flex: 1,
    alignSelf: "stretch",
  },
  button: {
    borderColor: "#000000",
    borderRadius: 1234,
    borderWidth: 1,
    padding: 6,
  },
  button2: {
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    paddingVertical: 4,
    paddingHorizontal: 7,
    marginRight: 8,
  },
  button3: {
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    paddingVertical: 6,
    paddingHorizontal: 11,
    marginRight: 3,
  },
  button4: {
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    paddingVertical: 6,
    paddingHorizontal: 9,
    marginRight: 3,
  },
  button5: {
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    paddingVertical: 5,
    paddingHorizontal: 6,
    marginRight: 3,
  },
  button6: {
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    paddingVertical: 5,
    paddingHorizontal: 6,
  },
  buttonColumn: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    paddingVertical: 8,
    marginBottom: 12,
  },
  column: {
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    paddingVertical: 17,
    paddingHorizontal: 25,
    marginBottom: 34,
    marginHorizontal: 20,
    overflow: "visible", // ← thêm dòng này
    marginTop: -40,
  },
  column2: {
    flex: 1,
  },
  column3: {
    marginRight: 8,
  },
  column4: {
    marginBottom: 22,
    marginLeft: 16,
    marginRight: 41,
  },
  column5: {
    marginBottom: 19,
    marginLeft: 16,
    marginRight: 41,
  },
  column6: {
    marginBottom: 48,
    marginLeft: 16,
    marginRight: 41,
  },
  image: {
    borderRadius: 1234,
    width: 24,
    height: 24,
  },
  image2: {
    height: 140,
    flex: 1,
    marginRight: 11,
    borderRadius: 70, // giữ bo tròn nếu muốn
  },
  image3: {
    width: 11,
    height: 13,
  },
  image4: {
    width: 11,
    height: 10,
    marginRight: 7,
  },
  image5: {
    width: 11,
    height: 9,
    marginRight: 5,
  },
  image6: {
    width: 11,
    height: 10,
    marginRight: 6,
  },
  image7: {
    width: 11,
    height: 11,
    marginLeft: 11,
    marginRight: 9,
  },
  image8: {
    width: 5,
    height: 8,
  },
  image9: {
    width: 5,
    height: 9,
  },
  image10: {
    width: 12,
    height: 11,
  },
  image11: {
    width: 12,
    height: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 71,
    marginHorizontal: 35,
    marginTop: -40,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  row3: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F48BA1",
    borderRadius: 18,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginBottom: 3,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
  },
  row4: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  row5: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginRight: 4,
  },
  row6: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    paddingVertical: 4,
    paddingHorizontal: 5,
    marginRight: 6,
  },
  row7: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    paddingVertical: 4,
    paddingHorizontal: 7,
  },
  row8: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12, // thêm khoảng cách với phần trên
    paddingHorizontal: 5,
  },
  row9: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F48BA1",
    borderRadius: 13,
    paddingVertical: 5,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F7F4F2",
    paddingTop: 55,
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
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
  },
  text2: {
    color: "#FFFFFF",
    fontSize: 12,
    marginRight: 12,
  },
  text3: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  text4: {
    color: "#FFFFFF",
    fontSize: 12,
    marginBottom: 35,
  },
  text5: {
    color: "#000000",
    fontSize: 15,
    marginBottom: 1,
  },
  text6: {
    color: "#000000",
    fontSize: 13,
  },
  text7: {
    color: "#000000",
    fontSize: 12,
    marginRight: 7,
  },
  text8: {
    color: "#000000",
    fontSize: 12,
  },
  text9: {
    color: "#FFFFFF",
    fontSize: 12,
    marginRight: 23,
  },
  text10: {
    color: "#000000",
    fontSize: 14,
  },
  text11: {
    color: "#000000",
    fontSize: 14,
  },
  view: {
    backgroundColor: "#F48BA1",
    borderRadius: 18,
    paddingTop: 9,
    paddingHorizontal: 15,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
  },
});
