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
import Search from './Search';
import Header from './Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Chat(){

  const Item = ({name, image, message, time}) => (
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
              <Text style={styles.message}>{message}</Text>
            </View>
            <Text style={styles.message}>{time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <View style={styles.chatCtn}>
              <FlatList
                  data={Users}
                  renderItem={({item}) => 
                  <Item name={item.name} message={item.message} image={item.image} time={item.time}/>}
                  keyExtractor={item => item.id}
                  horizontal={false}
                  scrollEnabled={false}
                  ListHeaderComponent={Search}
                />
          </View>
        </ScrollView>

        <View style={styles.newUpdate}>
            <View style={styles.pen}>
              {/* <FontAwesome name="pencil" size={24} color="white" /> */}
              <Image style={{width: 30, height: 30}} source={require('../../assets/images/ai.png')}/>
            </View>
            <View style={styles.msg}>
              <MaterialCommunityIcons name="message-plus" size={28} color="#011513" />
              {/* <MaterialIcons name="add-ic-call" size={20} color="#011513" /> */}
            </View>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#011513',
    height: '100%'
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
    touch: {
      backgroundColor: 'red',
    },
    msgCtn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    },
    userDetail: {
      gap: 5,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white',
    },
    message: {
      fontSize: 13,
      color: '#cbd5c0'
    },
    image: {
        width: 55,
        height: 55,
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
      backgroundColor: '#233040',
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
  },
  msg: {
      borderRadius: 15,
      backgroundColor: 'rgb(95, 252, 123)',
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
  },
});
