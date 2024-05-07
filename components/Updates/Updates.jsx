import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import UpdatesHeader from './UpdatesHeader';
import Footer from '../Footer';
import Status from './Status';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Channels from './Channel';
import FindChannels from './FindChannels';

export default function Updates(){

  return (
    <View style={styles.container}>
        <UpdatesHeader />

        <Status />
        <Channels />
        <FindChannels />

        <View style={styles.newUpdate}>
            <View style={styles.pen}>
              <FontAwesome name="pencil" size={24} color="white" />
            </View>
            <View style={styles.cam}>
              <MaterialIcons name="add-ic-call" size={20} color="#011513" />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#011513',
    },
    newUpdate: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      gap: 20,
      alignItems: 'center',
  },
  pen: {
    borderRadius: 10,
      backgroundColor: '#365563',
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
  },
  cam: {
      borderRadius: 15,
      backgroundColor: 'rgb(95, 252, 123)',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
  },
});
