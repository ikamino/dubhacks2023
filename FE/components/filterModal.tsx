import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Switch
} from "react-native";
import axios from "axios";
import Star from "../icons/star.svg";
import { color } from "react-native-elements/dist/helpers";

interface FilterModalProps {
  isVisible: boolean;
  onClose: () => void;
  // id: string | undefined
}

const TOP_MARGIN = 0; // Adjust this value as needed

const FilterModal: React.FC<FilterModalProps> = ({
  isVisible,
  onClose,
  // id
}) => {
  const handleFormSubmit = () => {};

  const [isHourlyEnabled, setIsHourlyEnabled] = useState(false);
  const [isDailyEnabled, setIsDailyEnabled] = useState(false);
  const [isShortTermEnabled, setIsShortTermEnabled] = useState(false);
  const [isLongTermEnabled, setIsLongTermEnabled] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0)

//   const toggleSwitch = (toggle: (x: boolean) => void) => toggle((x) => !x);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { marginTop: TOP_MARGIN }]}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filter</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  onClose();
                }}
              >
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 25, marginRight: 25 }}>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                Price Range
              </Text>
              <View style={{
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: "space-between", 
                alignItems: "center",
                marginTop: 16
              }}>
                <View
                  style={{
                    width: 125,
                    height: 45,
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: "#A2A2A2",
                    display: "flex",
                  }}
                >
                  <Text
                    style={{
                      color: "#A2A2A2",
                      fontSize: 10,
                      fontWeight: "500",
                      marginTop: 4,
                      marginLeft: 8,
                    }}
                  >
                    Minimum
                  </Text>
                  <TextInput
                    style={{
                      // width: 125,
                      height: 27,
                      // borderWidth: 1,
                      borderRadius: 8,
                      paddingLeft: 8,
                      // borderColor: '#A2A2A2'
                    }}
                    placeholder="eg. 2.00"
                  />
                </View>
                <View style={{width: 22, borderColor: '#A2A2A2', borderWidth: 1, height: 1}}/>
                <View
                  style={{
                    width: 125,
                    height: 45,
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: "#A2A2A2",
                    display: "flex",
                  }}
                >
                  <Text
                    style={{
                      color: "#A2A2A2",
                      fontSize: 10,
                      fontWeight: "500",
                      marginTop: 4,
                      marginLeft: 8,
                    }}
                  >
                    Maximum
                  </Text>
                  <TextInput
                    style={{
                      height: 27,
                      borderRadius: 8,
                      paddingLeft: 8,
                    }}
                    placeholder="eg. 5.00"
                  />
                </View>
              </View>
              <Text style={{ fontSize: 20, fontWeight: "500", marginTop: 32 }}>
                Rent Duration
              </Text>
              <View style={styles.switchRow}>
                <View style={styles.switchCol}>
                    <Text style={styles.swtichTitle}>Hourly</Text>
                    <Text style={styles.switchSubTitle}>Rent a lot for the duration of your stay</Text>
                </View>
                <Switch trackColor={{false: 'black', true: 'black'}} onValueChange={() => setIsHourlyEnabled(previousState => !previousState)} value={isHourlyEnabled}/>
              </View>
              <View style={styles.switchRow}>
                <View style={styles.switchCol}>
                    <Text style={styles.swtichTitle}>Daily</Text>
                    <Text style={styles.switchSubTitle}>Rent a lot for 24 hours</Text>
                </View>
                <Switch trackColor={{false: 'black', true: 'black'}} onValueChange={() => setIsDailyEnabled(previousState => !previousState)} value={isDailyEnabled}/>
              </View>
              <View style={styles.switchRow}>
                <View style={styles.switchCol}>
                    <Text style={styles.swtichTitle}>Short-term</Text>
                    <Text style={styles.switchSubTitle}>Lot rental between 1-6 month(s)</Text>
                </View>
                <Switch trackColor={{false: 'black', true: 'black'}} onValueChange={() => setIsShortTermEnabled(previousState => !previousState)} value={isShortTermEnabled}/>
              </View>
              <View style={styles.switchRow}>
                <View style={styles.switchCol}>
                    <Text style={styles.swtichTitle}>Long-term</Text>
                    <Text style={styles.switchSubTitle}>Lot rental for more than 6 months</Text>
                </View>
                <Switch trackColor={{false: 'black', true: 'black'}} onValueChange={() => setIsLongTermEnabled(previousState => !previousState)} value={isLongTermEnabled}/>
              </View>
              <Text style={{marginTop: 32, fontSize: 20, fontWeight: '500'}}>Number of Lots</Text>
              <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 22}}>
                <TouchableOpacity onPress={() => setSelectedNumber(1)} style={selectedNumber == 1 ? styles.selectedCircle : styles.circleButton}><Text style={selectedNumber == 1 ? styles.selectedText : {fontSize: 15}}>1</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedNumber(2)} style={selectedNumber == 2 ? styles.selectedCircle : styles.circleButton}><Text style={selectedNumber == 2 ? styles.selectedText : {fontSize: 15}}>2</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedNumber(3)} style={selectedNumber == 3 ? styles.selectedCircle : styles.circleButton}><Text style={selectedNumber == 3 ? styles.selectedText : {fontSize: 15}}>3</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedNumber(4)} style={selectedNumber == 4 ? styles.selectedCircle : styles.circleButton}><Text style={selectedNumber == 4 ? styles.selectedText : {fontSize: 15}}>4</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedNumber(5)} style={selectedNumber == 5 ? styles.selectedCircle : styles.circleButton}><Text style={selectedNumber == 5 ? styles.selectedText : {fontSize: 15}}>5+</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
  selectedText: {
    color: 'white',
    fontSize: 15
  },
  circleButton: {
    height: 45, 
    width: 45, 
    borderRadius: 50, 
    borderColor: 'black', 
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedCircle: {
    height: 45, 
    width: 45, 
    borderRadius: 50, 
    borderColor: 'black', 
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  switchRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
  },
  switchCol: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  swtichTitle: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 8
  },
  switchSubTitle: {
    color: '#A2A2A2',
    fontSize: 12,
    fontWeight: '500'
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
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    // borderBottomWidth: 1,
    // borderColor: '#ccc',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
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
    position: "absolute",
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    marginLeft: 122,
    marginTop: -10,
  },
  modalImage: {
    width: "100%",
    height: 280,
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
});

export default FilterModal;
