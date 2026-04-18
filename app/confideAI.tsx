import React, { useState, useRef, useCallback } from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";


const GEMINI_API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

const SYSTEM_PROMPT = `You are Bloom, a gentle mental wellness companion built into a wellness app.

Your role:
- Listen empathetically to the user's feelings and daily life stories
- Validate their emotions without judgment
- Never diagnose, prescribe, or act like a therapist or doctor
- Give kind, supportive, warm responses in the same language as the user
- Suggest small, realistic activities to help them feel better (e.g., a short walk, drinking water, rest, journaling, soft music, breathing exercises)
- Be concise — keep responses under 120 words unless the user needs more

If the user expresses sadness or stress:
- Respond with empathy first
- Then offer gentle encouragement
- Then suggest 1–2 simple calming activities

CRITICAL SAFETY RULE — If the user expresses any sign of self-harm, suicidal thoughts, or crisis (e.g., "I want to disappear", "I don't want to live", "I want to hurt myself"):
- Do NOT respond casually or give simple advice
- Express deep care and concern
- Strongly encourage them to reach out to a trusted person or professional
- Provide a crisis helpline: Vietnam: 1800 599 920 (free, 24/7)
- Your response must be compassionate, not alarming

Tone: calm · warm · non-judgmental · like a close trusted friend
Language: always reply in the same language the user writes in (Vietnamese or English)`;

const DOCTOR = {
  name: "Dr. Mehmet Khan",
  title: "Mental Health Specialist",
  address: "123 Wellness Street, District 1, Ho Chi Minh City",
  phone: "+84 28 1234 5678",
  hours: "Mon – Fri · 9:00 AM – 5:00 PM",
  rating: "4.9",
  reviews: "128 reviews",
  avatar: "👨‍⚕️",
};

const THERAPY_KEYWORDS = [
  "bác sĩ", "gặp bác", "trị liệu", "tâm lý", "chuyên gia",
  "tư vấn", "đặt lịch", "muốn gặp", "nói chuyện với",
  "doctor", "therapist", "therapy", "appointment", "book",
  "specialist", "psychiatrist", "psychologist", "mental health professional",
  "see a", "talk to a",
];

function isTherapyRequest(text: string): boolean {
  const lower = text.toLowerCase();
  return THERAPY_KEYWORDS.some((kw) => lower.includes(kw));
}

type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
  type?: "text" | "doctor";
};

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  type: "text",
text: "Xin chào 🌸 Mình là Bloom — người bạn đồng hành sức khỏe tinh thần của bạn.\n\nHôm nay bạn cảm thấy thế nào? Mình ở đây để lắng nghe.",
};

function DoctorCard() {
  return (
    <View style={cardStyles.card}>
      <View style={cardStyles.topRow}>
        <View style={cardStyles.avatarCircle}>
          <Text style={cardStyles.avatarEmoji}>{DOCTOR.avatar}</Text>
        </View>
        <View style={cardStyles.info}>
          <Text style={cardStyles.name}>{DOCTOR.name}</Text>
          <Text style={cardStyles.title}>{DOCTOR.title}</Text>
          <View style={cardStyles.ratingRow}>
            <Text style={cardStyles.star}>★</Text>
            <Text style={cardStyles.rating}>{DOCTOR.rating}</Text>
            <Text style={cardStyles.reviews}>({DOCTOR.reviews})</Text>
          </View>
        </View>
      </View>
      <View style={cardStyles.divider} />
      <View style={cardStyles.detailRow}>
        <Text style={cardStyles.detailIcon}>📍</Text>
        <Text style={cardStyles.detailText}>{DOCTOR.address}</Text>
      </View>
      <View style={cardStyles.detailRow}>
        <Text style={cardStyles.detailIcon}>📞</Text>
        <Text style={cardStyles.detailText}>{DOCTOR.phone}</Text>
      </View>
      <View style={cardStyles.detailRow}>
        <Text style={cardStyles.detailIcon}>🕐</Text>
        <Text style={cardStyles.detailText}>{DOCTOR.hours}</Text>
      </View>
      <TouchableOpacity style={cardStyles.bookBtn} activeOpacity={0.8}>
        <Text style={cardStyles.bookText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function ChatScreen() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef<FlatList>(null);
  useEffect(() => {
  flatListRef.current?.scrollToEnd({ animated: true });
}, [messages]);

useEffect(() => {
  flatListRef.current?.scrollToEnd({ animated: true });
}, [messages]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      type: "text",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Doctor referral — intercept before calling AI
    if (isTherapyRequest(text)) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            type: "text",
            text: "I understand. It's important to seek support and talk to a mental health professional. I can help connect you with resources right here 💙",
          },
          {
            id: (Date.now() + 2).toString(),
            role: "assistant",
            type: "doctor",
            text: "",
},
        ]);
        setLoading(false);
      }, 800);
      return;
    }

    try {
      const history = [...messages, userMsg]
        .filter((m) => m.id !== "welcome" && m.type !== "doctor")
        .map((m) => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.text }],
        }));

      const body = {
        system_instruction: {
          parts: [{ text: SYSTEM_PROMPT }],
        },
        contents: history.length > 0 ? history : [{ role: "user", parts: [{ text }] }],
      };

      if (!GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not configured");
      }

      const res = await fetch(GEMINI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        const apiError = data?.error?.message ?? `HTTP ${res.status}`;
        console.error("Gemini API error:", apiError, JSON.stringify(data));
        throw new Error(apiError);
      }

      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ??
        "Mình xin lỗi, có lỗi xảy ra. Bạn thử lại nhé 🙏";

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          type: "text",
          text: reply,
        },
      ]);
    } catch (err: any) {
      console.error("Chat error:", err?.message ?? err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          type: "text",
          text: "Mình không kết nối được lúc này. Bạn thử lại sau nhé 🙏",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages]);

  const handleKeyPress = useCallback(
    (e: any) => {
      if (Platform.OS === "web") {
        const nativeEvent = e.nativeEvent as KeyboardEvent;
        if (nativeEvent.key === "Enter" && !nativeEvent.shiftKey) {
          e.preventDefault?.();
          sendMessage();
        }
      }
    },
    [sendMessage]
  );

  const renderItem = ({ item }: { item: Message }) => {
    const isUser = item.role === "user";

    if (item.type === "doctor") {
      return (
        <View style={styles.doctorRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>🌸</Text>
          </View>
          <DoctorCard />
        </View>
      );
    }

    return (
      <View style={[styles.bubbleRow, isUser ? styles.bubbleRowUser : styles.bubbleRowAI]}>
        {!isUser && (
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>🌸</Text>
          </View>
        )}
        <View style={[styles.bubble, isUser ? styles.bubbleUser : styles.bubbleAI]}>
          <Text style={[styles.bubbleText, isUser ? styles.bubbleTextUser : styles.bubbleTextAI]}>
            {item.text}
          </Text>
        </View>
</View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/s6ZJwwxffE/phk9o67e_expires_30_days.png",
              }}
              style={styles.backBtn}
            />
          </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Bloom</Text>
          <Text style={styles.headerSub}>Người bạn đồng hành tinh thần</Text>
        </View>
        <View style={styles.onlineDot} />
      </View>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(m) => m.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: true })
          }
          showsVerticalScrollIndicator={false}
        />

        {loading && (
          <View style={styles.typingRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>🌸</Text>
            </View>
            <View style={styles.typingBubble}>
              <ActivityIndicator size="small" color="#7D944D" />
              <Text style={styles.typingText}>Bloom đang gõ...</Text>
            </View>
          </View>
        )}

        {/* Input bar */}
        <View style={styles.inputBar}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Chia sẻ với Bloom nhé..."
            placeholderTextColor="#BDBDBD"
            multiline
            maxLength={500}
            onKeyPress={handleKeyPress}
            blurOnSubmit={false}
          />
          <TouchableOpacity
            style={[styles.sendBtn, (!input.trim() || loading) && styles.sendBtnDisabled]}
            onPress={sendMessage}
            disabled={!input.trim() || loading}
          >
            <LinearGradient
              colors={["#7D944D", "#9DB86B"]}
              style={styles.sendGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.sendIcon}>↑</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <Text style={styles.disclaimer}>
          Bloom không thay thế chuyên gia tâm lý. Nếu cần hỗ trợ khẩn cấp: 1800 599 920
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const BG = "#F7F4F2";
const PRIMARY = "#7D944D";
const USER_BUBBLE = "#7D944D";

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: BG },
  flex: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
backgroundColor: BG,
    borderBottomWidth: 1,
    borderBottomColor: "#EDE8E3",
  },
  backBtn: {  borderRadius: 999,
    width: 39,
    height: 39,},
  backIcon: { fontSize: 32, color: PRIMARY, lineHeight: 36 },
  headerCenter: { flex: 1, alignItems: "center" },
  headerTitle: { fontSize: 17, fontWeight: "700", color: "#2D2D2D", letterSpacing: 0.3 },
  headerSub: { fontSize: 12, color: "#9E9E9E", marginTop: 1 },
  onlineDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: PRIMARY },
  listContent: { paddingHorizontal: 16, paddingVertical: 12, paddingBottom: 8 },
  bubbleRow: { flexDirection: "row", marginBottom: 14, maxWidth: "85%" },
  bubbleRowUser: { alignSelf: "flex-end", flexDirection: "row-reverse" },
  bubbleRowAI: { alignSelf: "flex-start" },
  doctorRow: { flexDirection: "row", marginBottom: 14, alignSelf: "flex-start", maxWidth: "95%" },
  avatar: {
    width: 32, height: 32, borderRadius: 16,
    backgroundColor: "#EDE8E3",
    justifyContent: "center", alignItems: "center",
    marginRight: 8, marginTop: 2,
  },
  avatarText: { fontSize: 16 },
  bubble: { borderRadius: 18, paddingHorizontal: 14, paddingVertical: 10, maxWidth: "100%" },
  bubbleUser: { backgroundColor: USER_BUBBLE, borderBottomRightRadius: 4 },
  bubbleAI: {
    backgroundColor: "#FFFFFF", borderBottomLeftRadius: 4,
    shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 }, elevation: 1,
  },
  bubbleText: { fontSize: 15, lineHeight: 22 },
  bubbleTextUser: { color: "#FFFFFF" },
  bubbleTextAI: { color: "#2D2D2D" },
  typingRow: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, marginBottom: 8 },
  typingBubble: {
    flexDirection: "row", alignItems: "center",
    backgroundColor: "#FFFFFF", borderRadius: 18, borderBottomLeftRadius: 4,
    paddingHorizontal: 14, paddingVertical: 10, gap: 8,
  },
  typingText: { fontSize: 13, color: "#9E9E9E", marginLeft: 6 },
  inputBar: {
    flexDirection: "row", alignItems: "flex-end",
    paddingHorizontal: 12, paddingVertical: 10,
    backgroundColor: BG, borderTopWidth: 1, borderTopColor: "#EDE8E3", gap: 8,
  },
  input: {
    flex: 1, backgroundColor: "#FFFFFF", borderRadius: 22,
    paddingHorizontal: 16, paddingVertical: 10,
    fontSize: 15, color: "#2D2D2D", maxHeight: 100,
    borderWidth: 1, borderColor: "#EDE8E3",
  },
  sendBtn: { width: 42, height: 42, borderRadius: 21, overflow: "hidden" },
  sendBtnDisabled: { opacity: 0.4 },
  sendGradient: { flex: 1, justifyContent: "center", alignItems: "center" },
  sendIcon: { color: "#FFFFFF", fontSize: 20, fontWeight: "700" },
  disclaimer: {
    fontSize: 10, color: "#BDBDBD",
    textAlign: "center", paddingHorizontal: 16, paddingBottom: 6,
  },
});

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    flex: 1,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 8,
shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  topRow: { flexDirection: "row", alignItems: "flex-start", marginBottom: 12 },
  avatarCircle: {
    width: 52, height: 52, borderRadius: 26,
    backgroundColor: "#EDF4E5",
    justifyContent: "center", alignItems: "center",
    marginRight: 12,
  },
  avatarEmoji: { fontSize: 28 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "700", color: "#1A1A1A" },
  title: { fontSize: 13, color: "#7D944D", marginTop: 2, fontWeight: "500" },
  ratingRow: { flexDirection: "row", alignItems: "center", marginTop: 4, gap: 3 },
  star: { color: "#F5A623", fontSize: 13 },
  rating: { fontSize: 13, fontWeight: "700", color: "#1A1A1A" },
  reviews: { fontSize: 12, color: "#9E9E9E" },
  divider: { height: 1, backgroundColor: "#F0EDE9", marginBottom: 12 },
  detailRow: { flexDirection: "row", alignItems: "flex-start", marginBottom: 8, gap: 8 },
  detailIcon: { fontSize: 13, marginTop: 1 },
  detailText: { fontSize: 13, color: "#555", flex: 1, lineHeight: 18 },
  bookBtn: {
    marginTop: 8,
    backgroundColor: "#7D944D",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  bookText: { color: "#FFFFFF", fontWeight: "700", fontSize: 14 },
});