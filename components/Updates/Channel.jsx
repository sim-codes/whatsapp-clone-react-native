import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { ChannelFollowed } from '../../lib/data';
import { Entypo } from '@expo/vector-icons';

export default function Channels() {

  const Item = ({name, image, message, datetime}) => (
    <TouchableOpacity
        activeOpacity={0.6}>
        <View style={styles.channelCtn}>
          <Image style={styles.image}
          source={image}
          borderRadius={50} resizeMode='cover'/>

          <View style={styles.msgCtn}>
            <View style={styles.userDetail}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.message}>{message}</Text>
            </View>
            <Text style={styles.message}>{datetime}</Text>
          </View>
        </View>
      </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <View style={styles.titleCtn}>
            <Text style={styles.title}>Channels</Text>
            <Entypo name="plus" size={24} color="white" />
        </View>

        <ScrollView contentInsetAdjustmentBehavior="automatic" 
        horizontal={false} contentContainerStyle={styles.channelsCtn}
        showsHorizontalScrollIndicator={false}>

            <View style={styles.chatCtn}>
                <FlatList
                    data={ChannelFollowed}
                    renderItem={({item}) => 
                    <Item name={item.name} image={item.image} message={item.message} datetime={item.datetime}/>}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    scrollEnabled={false}
                    />
            </View>
        </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        marginTop: 20,
        paddingBottom: 10,
    },
  channelsCtn: {
    flexDirection: 'row',
      gap: 15,
      alignItems: 'center',
      marginBottom: 25,
  },
    chatCtn: {
        marginTop: 20,
    },
    channelCtn: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      gap: 10
    },
    titleCtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    channelDetail: {
      gap: 5,
      width: 100,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white',
    },
    image: {
        width: 60,
        height: 60,
    },
    title: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 30,
    },
    channelHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20
    },
    message: {
        fontSize: 15,
        color: '#cbd5c0'
    },
    msgCtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    }
});
