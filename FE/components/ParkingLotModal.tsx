import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
  Button,
  TextInput,
} from "react-native";
import axios from "axios";
import Star from "../icons/star.svg";
import Location from "../icons/Location.svg";
import CalendarPicker from "react-native-calendar-picker";
import CanadianFlag from "../icons/CanadianFlag.svg";
import { LinearGradient } from "expo-linear-gradient";

interface ParkingLotModalProps {
  isVisible: boolean;
  onClose: () => void;
  id: string | undefined;
  
}

const TOP_MARGIN = 0; // Adjust this value as needed

const ParkingLotModal: React.FC<ParkingLotModalProps> = ({
  isVisible,
  onClose,
  id,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState('user1'); 
  const [phoneNumber, setPhoneNumber] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState({
    id: "lot3",
    title: "lot3",
    imagein:
      "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    hostId: "lot3",
    address: "Seattle, Washington",
    pricePerHour: 14,
    isAvailable: true,
    rating: 5.0,
    parkingRate: 14,
    description:
      "The highlight of this home is its large garage, boasting two parking spaces designed to comfortably accommodate two SUVs. The garage is not only spacious but also equipped with automatic doors, providing you with both security and convenience.",
  });

  const [selectedDate, setSelectedDate] = useState<moment.Moment>();
  const [selectedDuration, setSelectedDuration] = useState<string>("0");

  const fetchParkingLot = async () => {
    const listingService = new ListingService();
    setRefreshing(true);
    const res = await listingService.getListing(id)
    // const res = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/api/user-notifications/${user}`)
    const res = {
      id: "lot3",
      title: "lot3",
      imagein:
        "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      hostId: "lot3",
      address: "Seattle, Washington",
      pricePerHour: 14,
      isAvailable: true,
      rating: 5.0,
      parkingRate: 14,
      description:
        "The highlight of this home is its large garage, boasting two parking spaces designed to comfortably accommodate two SUVs. The garage is not only spacious but also equipped with automatic doors, providing you with both security and convenience.",
    };

    if (res) {
      setData(res);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchParkingLot();
  }, []);

  const onRefresh = React.useCallback(() => {
    // fetchParkingLot()
  }, []);

  const handleFormSubmit = () => {
    // You can handle form submission here, for example, by sending the data to an API or performing some action.
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <>
      {id && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={isVisible}
          onRequestClose={onClose}
        >
          {/* <StatusBar translucent backgroundColor="transparent" /> */}
          <View style={styles.modalContainer}>
            <View style={[styles.modalContent, { marginTop: TOP_MARGIN }]}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Details</Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => {
                    onClose();
                  }}
                >
                  <Text style={styles.closeButtonText}>X</Text>
                </TouchableOpacity>
              </View>
              <ScrollView>
                <View style={styles.lotInfo}>
                  <Image
                    style={styles.modalImage}
                    source={{ uri: data.imagein }}
                  />
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: 340,
                      flexDirection: "row",
                      marginTop: 16,
                    }}
                  >
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      <Location width={"17"} height={"20"} />
                      <Text
                        style={{
                          marginLeft: 6,
                          fontSize: 20,
                          fontWeight: "500",
                        }}
                      >
                        Seattle, Washington
                      </Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      <Star width={"15"} height={"15"} />
                      <Text>{data.rating}</Text>
                    </View>
                  </View>
                </View>

                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "500",
                    width: "100%",
                    marginLeft: 24,
                  }}
                >
                  {data.title}
                </Text>
                <View style={styles.lotInfo}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                      width: "100%",
                      marginTop: 16,
                    }}
                  >
                    <Text style={{ fontWeight: "700", fontSize: 25 }}>
                      ${data.parkingRate}
                    </Text>
                    <Text>/hr</Text>
                  </View>
                  <Text
                    style={{
                      width: "100%",
                      marginTop: 12,
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    {data.description}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "500",
                      width: "100%",
                      marginTop: 16,
                    }}
                  >
                    Rent a Lot
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    marginTop: 16,
                    marginBottom: 16,
                    paddingBottom: 16,
                    paddingRight: 24,
                  }}
                >
                  <CalendarPicker
                    onDateChange={(date) => {
                      setSelectedDate(date);
                      console.log(date);
                    }}
                    width={340}
                    height={340}
                    todayTextStyle={{ color: "blue" }}
                    selectedDayColor={"#B7F"}
                  />
                </View>
                <View style={{ marginLeft: 24, marginRight: 24 }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>
                      Duration of stay (Hours)
                    </Text>
                    <TextInput
                      style={styles.durationInput}
                      value={selectedDuration}
                      onChangeText={(text) => setSelectedDuration(text)}
                      placeholder="Enter duration"
                    />
                  </View>
                  <Text
                    style={{ fontSize: 20, fontWeight: "500", marginTop: 26 }}
                  >
                    Renter's Information
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 16,
                    }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>
                      Name
                    </Text>
                    <TextInput
                      style={{
                        width: 268,
                        height: 32,
                        backgroundColor: "#F3F3F3",
                        borderRadius: 20,
                        marginLeft: 16,
                        paddingLeft: 10,
                      }}
                      value={name}
                      onChangeText={(text) => setName(text)}
                      placeholder="Enter your name"
                    />
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 16,
                    }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>
                      Email
                    </Text>
                    <TextInput
                      style={{
                        width: 268,
                        height: 32,
                        backgroundColor: "#F3F3F3",
                        borderRadius: 20,
                        marginLeft: 16,
                        paddingLeft: 10,
                      }}
                      value={email}
                      onChangeText={(text) => setEmail(text)}
                      placeholder="Enter your email"
                    />
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      // justifyContent: 'space-between',
                      alignItems: "center",
                      marginTop: 16,
                    }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>
                      Phone
                    </Text>
                    <TouchableOpacity
                      style={{
                        width: 66,
                        height: 32,
                        backgroundColor: "#F3F3F3",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 20,
                        marginLeft: 32,
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <CanadianFlag />
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "500",
                            marginLeft: 2,
                          }}
                        >
                          +1
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TextInput
                      style={{
                        width: 120,
                        height: 32,
                        backgroundColor: "#F3F3F3",
                        borderRadius: 20,
                        marginLeft: 6,
                        paddingLeft: 10,
                      }}
                      value={phoneNumber}
                      onChangeText={(text) => setPhoneNumber(text)}
                      placeholder="XXX-XXX-XXXX"
                    />
                  </View>
                  <View style={{ width: "100%", alignItems: "center" }}>
                    <LinearGradient
                      // Background Linear Gradient
                      colors={["#BB77FF", "#77A5FF", "#77FFC6"]}
                      start={[0.0, 0.0]}
                      end={[1.0, 1.0]}
                      style={{
                        borderRadius: 20,
                        width: 220,
                        height: 42,
                        marginBottom: 82,
                        marginTop: 32,
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          height: 42,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>Reserve</Text>
                      </TouchableOpacity>
                    </LinearGradient>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFCF4",
    marginTop: 50,
    display: "flex",
    alignContent: "center",
  },
  notificationIndicator: {
    borderRadius: 50,
    width: 8,
    height: 8,
    position: "absolute",
    right: 4,
    top: 14,
    backgroundColor: "#FFFCF4",
  },
  modalContent: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFCF4",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    // borderBottomWidth: 1,
    // borderColor: '#ccc',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 140,
  },
  lotInfo: {
    paddingBottom: 20,
    marginTop: 10,
    marginLeft: 24,
    marginRight: 24,
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  notificationItem: {
    fontSize: 16,
    marginVertical: 5,
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
  },
  modalImage: {
    width: 345,
    height: 345,
    borderRadius: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    width: "100%",
    marginLeft: 48,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },
  durationInput: {
    width: 166,
    height: 32,
    backgroundColor: "#F3F3F3",
    borderRadius: 20,
    marginLeft: 16,
    paddingLeft: 10,
  },
});

export default ParkingLotModal;
