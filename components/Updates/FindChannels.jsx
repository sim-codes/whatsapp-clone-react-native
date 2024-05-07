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
import { ChannelData } from '../../lib/data';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FindChannels() {

  const Item = ({name, image}) => (

    <View>
      <TouchableOpacity style={styles.channelCtn}
        activeOpacity={0.6}>
          <Image style={styles.image}
          source={image}
          borderRadius={50} resizeMode='cover'/>
          <Text style={styles.name}>{name}</Text>

          <Text style={styles.follow}>Follow</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <View style={styles.findHeader}>
            <Text style={styles.title}>Find channels</Text>
            <View style={styles.allCtn}>
                <Text style={styles.all}>See all</Text>
                <MaterialCommunityIcons name="greater-than" size={24} color="rgb(95, 252, 123)" />
            </View>
        </View>

        <ScrollView contentInsetAdjustmentBehavior="automatic" 
        horizontal={true} contentContainerStyle={styles.statusCtn}
        showsHorizontalScrollIndicator={false}>

            <View style={styles.channelsCtn}>
                <FlatList
                    data={ChannelData}
                    renderItem={({item}) => 
                    <Item name={item.name} image={item.image}/>}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    scrollEnabled={false}
                    />
            </View>
        </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        height: 250,
        marginTop: 10,
    },
    findHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    channelsCtn: {
        flexDirection: 'row',
        gap: 5,
    },
    chatCtn: {
        marginTop: 20,
    },
    channelCtn: {
        padding: 10,
        borderWidth: 2,
        borderColor: '#043f39',
        borderRadius: 20,
        height: 170,
        width: 135,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      gap: 5,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 15,
      color: 'white',
      textAlign: 'center',
    },
    image: {
        width: 70,
        height: 70,
    },
    title: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20,
        marginBottom: 20,
    },
    follow: {
        fontWeight: 'bold',
        borderRadius: 20,
        width: '100%',
        padding: 10,
        backgroundColor: 'rgba(95, 252, 123,0.2)',
        color: 'white',
        textAlign: 'center',
    },
    allCtn: {
        alignContent: 'center',
        flexDirection: 'row',
        gap: 15,
    },
    all: {
        color: 'rgb(95, 252, 123)',
        fontWeight: 'bold'
    }
});
