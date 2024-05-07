import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList
} from 'react-native';
import CallsHeader from './CallsHeader';
import { Ionicons, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Users, CallHistory } from '../../lib/data';


const Item = ({name, image, datetime, type, status, missed}) => (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}>
        <View style={styles.userCtn}>
          <Image style={styles.image}
          source={image}
          borderRadius={50} resizeMode='cover'/>

          <View style={styles.msgCtn}>
            <View style={styles.userDetail}>
              <Text style={styles.name}>{name}</Text>

              <View style={styles.statusCtn}>
                {
                    (status == 'incoming') ?
                    <MaterialCommunityIcons name="arrow-bottom-left" size={24} color={(missed) ? '#ba0c2f' : "rgb(95, 252, 123)"} /> :
                    <MaterialCommunityIcons name="arrow-top-right" size={24} color="rgb(95, 252, 123)" />
                }
                <Text style={styles.textSub}>{datetime}</Text>
              </View>
            </View>
            {
                (type == 'call') ?
                <Ionicons name="call-outline" size={24} color="rgb(95, 252, 123)" /> :
                <Feather name="video" size={24} color="rgb(95, 252, 123)" />
            }
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

export default function Calls() {
    return (
      <View style={styles.container}>
        <CallsHeader />
       
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.linkCtn}>
                <View style={styles.iconCtn}>
                    <Ionicons name="link" size={28} color="#011513" />
                </View>

                <View style={styles.textCtn}>
                    <Text style={styles.text}>Create call link</Text>
                    <Text style={styles.textSub}>Share a link for your WhatsSup call</Text>
                </View>
            </View>

            <View style={styles.chatCtn}>
              <FlatList
                  data={CallHistory}
                  renderItem={({item}) => 
                  <Item name={item.name} image={item.image} missed={item.missed} datetime={item.datetime} status={item.status} type={item.type}/>}
                  keyExtractor={item => item.id}
                  horizontal={false}
                  scrollEnabled={false}
                //   ListHeaderComponent={Search}
                />
          </View>
        </ScrollView>

        <View style={styles.newCall}>
            <MaterialIcons name="add-ic-call" size={20} color="#011513" />
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
    iconCtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        backgroundColor: 'rgb(95, 252, 123)',
        borderRadius: 50,
    },
    textCtn: {
        flexDirection: 'column',
    },
    linkCtn: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    textSub: {
        color: '#cbd5c0'
    },
    chatCtn: {
        marginTop: 20,
    },
    userCtn: {
      flexDirection: 'row',
      gap: 15,
      alignItems: 'center',
      marginBottom: 25,
    },
    statusCtn: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
    touch: {
      backgroundColor: 'red',
    },
    msgCtn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    },
    userDetail: {
    //   gap: 1,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white',
    },
    message: {
      fontSize: 12,
      color: 'white',
    },
    image: {
        width: 55,
        height: 55,
    },
    newCall: {
        backgroundColor: 'rgb(95, 252, 123)',
        width: 50,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
});