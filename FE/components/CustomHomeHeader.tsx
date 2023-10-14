import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface HeaderProps {
  title: string;
  user?: string;
}

const HomeHeader: React.FC<HeaderProps> = ({ title, user }) => {

  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.header}>
      <View style={styles.headerUserInfo} >
        <Image style={styles.headerImage} source={require("../icons/emptyPic.png")} />
        <View>
          <Text style={styles.headerMessage}>Welcome back!👋</Text>
          <Text style={styles.headerName}>{loading ? '' : user}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', // Vertically align text
    alignItems: "center",
    width: '100%',
    marginTop: 26
  },
  headerUserInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginRight: 'auto'
  },
  headerMessage: {
    color: 'black', // Text color
    marginRight: 'auto',
    fontSize: 12,
    marginTop: 6
  },
  headerName: {
    fontSize: 15,
    color: 'black',
    marginRight: 'auto',
    fontWeight: "bold",
  },
  headerImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 4
  },

});

export default HomeHeader;
