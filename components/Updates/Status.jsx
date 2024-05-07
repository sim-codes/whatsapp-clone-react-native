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
import { Users } from '../../lib/data';

export default function Status() {

  const Item = ({name, image, message, time}) => (

    <View>
      <TouchableOpacity style={styles.userCtn}
        activeOpacity={0.6}>
          <Image style={styles.image}
          source={image}
          borderRadius={50} resizeMode='cover'/>
          <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Status</Text>

        <ScrollView contentInsetAdjustmentBehavior="automatic" 
        horizontal={true} contentContainerStyle={styles.statusCtn}
        showsHorizontalScrollIndicator={false}>
            <View style={styles.my}>
                <Image style={styles.image}
                source={require('../../assets/images/samuel.jpg')}
                borderRadius={50} resizeMode='cover'/>
                <Text style={styles.name}>My status</Text>
            </View>

            <View style={styles.chatCtn}>
                <FlatList
                    data={Users}
                    renderItem={({item}) => 
                    <Item name={item.name} message={item.message} image={item.image} time={item.time}/>}
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
      flex: 1,
        marginTop: 50,
        borderBottomWidth: 2,
        borderBottomColor: '#043f39',
    },
    my: {
        padding: 2,
        alignItems: 'center',
        gap:5
    },
  statusCtn: {
    // height: 100,
    flexDirection: 'row',
    gap: 25,
    alignItems: 'center',
    alignContent: 'center'
  },
    chatCtn: {
        marginTop: 20,
    },
    userCtn: {
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: 25,
    },
    userDetail: {
      gap: 5,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 15,
      color: 'white',
    },
    image: {
        width: 55,
        height: 55,
        borderWidth: 2,
        borderColor: '#25D366',
    },
    title: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 30,
    }
});
