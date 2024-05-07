import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function CallsHeader(){

  return (
    <View style={styles.headerCtn}>
        <Text style={styles.logo}>Calls</Text>
        <View style={styles.iconCtn}>
            <Feather name="camera" size={24} color="white" />
            <Feather name="search" size={24} color="white" />
            <Feather name="more-vertical" size={24} color="white" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    logo: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    headerCtn: {
        marginTop: StatusBar.currentHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconCtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    }
});
