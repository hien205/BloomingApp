import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
const ITEM_HEIGHT = 44;

const hours = Array.from({ length: 12 }, (_, i) => i + 1);
const minutes = Array.from({ length: 60 }, (_, i) => i);
const periods = ["AM", "PM"];
const daysOfWeek = ["SU", "M", "T", "W", "TH", "F", "S"];

export default function App() {
  const router = useRouter();
  const [hour, setHour] = useState(11);
  const [minute, setMinute] = useState(30);
  const [period, setPeriod] = useState("AM");
  const [days, setDays] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    setDays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  const renderItem = (
    item: number | string,
    selected: any,
    onSelect: (v: any) => void
  ) => {
    const isSelected = item === selected;
    const isPeriod = typeof item === "string";

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => onSelect(item)}
      >
        <Text
          style={[
            styles.text,
            isSelected && styles.selectedText,
            isPeriod && styles.periodText,
            isPeriod && isSelected && styles.periodSelectedText,
          ]}
        >
          {typeof item === "number"
            ? String(item).padStart(2, "0")
            : item}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleScroll = (e: any, data: any[], setValue: any) => {
    const index = Math.round(
      e.nativeEvent.contentOffset.y / ITEM_HEIGHT
    );
    if (data[index] !== undefined) {
      setValue(data[index]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        What time would you like to meditate?
      </Text>

      {/* PICKER */}
      <View style={styles.pickerBox}>

        {/* HOUR */}
        <FlatList
          style={styles.list}
          data={hours}
          keyExtractor={(i) => i.toString()}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: ITEM_HEIGHT * 2,
          }}
          onMomentumScrollEnd={(e) =>
            handleScroll(e, hours, setHour)
          }
          renderItem={({ item }) =>
            renderItem(item, hour, setHour)
          }
        />

        {/* MINUTE */}
        <FlatList
          style={styles.list}
          data={minutes}
          keyExtractor={(i) => i.toString()}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: ITEM_HEIGHT * 2,
          }}
          onMomentumScrollEnd={(e) =>
            handleScroll(e, minutes, setMinute)
          }
          renderItem={({ item }) =>
            renderItem(item, minute, setMinute)
          }
        />

        {/* AM PM */}
        <FlatList
          style={styles.list}
          data={periods}
          keyExtractor={(i) => i}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: ITEM_HEIGHT * 2,
          }}
          onMomentumScrollEnd={(e) =>
            handleScroll(e, periods, setPeriod)
          }
          renderItem={({ item }) =>
            renderItem(item, period, setPeriod)
          }
        />

        {/* highlight */}
        <View style={styles.highlight} pointerEvents="none" />

        {/* fade */}
        <View style={styles.fadeTop} pointerEvents="none" />
        <View style={styles.fadeBottom} pointerEvents="none" />
      </View>

      {/* DAY */}
      <Text style={styles.title}>
        Which day would you like to meditate?
      </Text>

      <View style={styles.dayRow}>
        {daysOfWeek.map((d) => {
          const active = days.includes(d);

          return (
            <TouchableOpacity
              key={d}
              onPress={() => toggleDay(d)}
              style={[
                styles.day,
                active && { backgroundColor: "#8E97FD" },
              ]}
            >
              <Text style={{ color: active ? "#FFF" : "#666" }}>
                {d}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* SAVE */}
      <TouchableOpacity
  style={styles.button}
  onPress={() => {
    router.push("/calmhome"); // 🔥 chuyển màn
  }}
>
        <Text style={{ color: "#FFF", fontWeight: "bold" }}>
          SAVE
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F4F2",
    justifyContent: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 20,
  },

  pickerBox: {
    flexDirection: "row",
    height: ITEM_HEIGHT * 5,
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    borderRadius: 20,
    overflow: "hidden",
  },

  list: {
    width: 70,
  },

  item: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 18,
    color: "#A1A4B2",
  },

  selectedText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },

  // 🔥 FIX AM/PM nhỏ hơn
  periodText: {
    fontSize: 16,
  },

  periodSelectedText: {
    fontSize: 22,
    fontWeight: "bold",
  },

  highlight: {
    position: "absolute",
    top: ITEM_HEIGHT * 2,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#DDD",
  },

  fadeTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT * 2,
    backgroundColor: "rgba(255,255,255,0.7)",
  },

  fadeBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT * 2,
    backgroundColor: "rgba(255,255,255,0.7)",
  },

  dayRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
  },

  day: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EEE",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#8E97FD",
    margin: 20,
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },
});