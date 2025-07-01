import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

// ตรวจสอบให้แน่ใจว่าไฟล์รูปภาพนี้ (653450513-4.jpg) อยู่ในโฟลเดอร์ assets/images/ ของโปรเจกต์
const profileImg = require("../assets/images/653450513-4.jpg");
// const { width } = Dimensions.get('window'); // ไม่ได้ใช้ในโค้ดส่วนนี้ สามารถลบออกได้ถ้าไม่จำเป็น

const Home = () => {
  return (
    <View style={styles.container}>
      {/* เปลี่ยนสี Header เป็น #000080 ตามที่คุณกำหนดใน styles.header */}
      <Text style={styles.header}>My Profile</Text> 
      <View style={styles.card}>
        <Image source={profileImg} style={styles.profileImage} />
        <View style={styles.infoTable}>
          <View style={styles.infoRow}>
            <MaterialIcons name="person" size={24} color="#007BFF" />
            <Text style={styles.label}>ชื่อ</Text>
            <Text style={styles.info}>ศิริพร แก้วลินลา</Text>
          </View>
          <View style={styles.infoRow}>
            <MaterialIcons name="badge" size={24} color="#007BFF" />
            <Text style={styles.label}>รหัส</Text>
            <Text style={styles.info}>653450513-4</Text>
          </View>
          <View style={styles.infoRow}>
            <FontAwesome5 name="laptop-code" size={22} color="#007BFF" />
            <Text style={styles.label}>สาขา</Text>
            <Text style={styles.info}>คอมพิวเตอร์และสารสนเทศ</Text>
          </View>
          <View style={styles.infoRow}>
            <MaterialIcons name="school" size={24} color="#007BFF" />
            <Text style={styles.label}>หลักสูตร</Text>
            <Text style={styles.info}>วิทยาศาสตรบัณฑิต</Text>
          </View>
          <View style={styles.infoRow}>
            <MaterialIcons name="location-city" size={24} color="#007BFF" />
            <Text style={styles.label}>มหาวิทยาลัย</Text>
            <Text style={styles.info}>มหาวิทยาลัยขอนแก่น</Text>
          </View>
          <View style={styles.infoRow}>
            <MaterialIcons name="star" size={24} color="#FFC107" />
            <Text style={styles.label}>สกิล</Text>
            {/* **เปลี่ยนข้อความส่วนสกิลตามที่คุณต้องการ** */}
            <Text style={styles.info}>
              JavaScript, Git, UI/UX Design, html
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F7FA", // สีฟ้าอ่อน
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 24,
  },
  header: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#000080", // สีน้ำเงินเข้มตามที่คุณกำหนดในโค้ด
    marginTop: 40,
    marginBottom: 28,
    letterSpacing: 2,
    textShadowColor: "#0056b355", // เงา
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    textAlign: "center",
    textTransform: "uppercase",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 30,
    alignItems: "center",
    width: "100%",
    maxWidth: 500,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 8,
    borderWidth: 1,
    borderColor: "#ADD8E6",
  },
  profileImage: {
    width: 100, // คุณกำหนด width 100
    height: 133, // คุณกำหนด height 133 (สัดส่วน 100:133 หรือประมาณ 3:4 แนวตั้ง)
    borderRadius: 5,
    marginBottom: 25,
    borderWidth: 2, // คุณกำหนด borderWidth 2
    borderColor: "#007BFF", // คุณกำหนด borderColor เป็น #007BFF (สีน้ำเงิน)
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    resizeMode: 'contain', // คุณกำหนด resizeMode เป็น 'contain'
  },
  infoTable: {
    width: "100%",
    marginTop: 15,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#F0F8FF",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#B0E0E6",
  },
  label: {
    fontSize: 16,
    color: "#000080", // สีน้ำเงินเข้ม
    fontWeight: "bold",
    marginLeft: 15,
    width: 100,
  },
  info: {
    fontSize: 15,
    color: "#000000",
    marginLeft: 10,
    flex: 1,
    flexWrap: "wrap",
    fontWeight: "500",
  },
});