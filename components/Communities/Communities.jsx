import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar
} from 'react-native';
import CommunitiesHeader from './CommunitiesHeader';
import { Entypo } from '@expo/vector-icons';

export default function Communities() {
    return (
      <View style={styles.container}>
        <CommunitiesHeader />

        <View style={styles.newCtn}>
          <View>
            <Image style={styles.image} source={require('../../assets/images/community.png')} />
            
            <View style={styles.plus}>
              <Entypo name="plus" size={24} color="#011513" />
            </View>
          </View>
          <Text style={styles.text}>New Community</Text>
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
    newCtn: {
      marginTop: 40,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 15,
    },
    text: {
      color: 'white',
      fontSize: 20,
    },
    image: {
      height: 60,
      width: 60,
      borderRadius: 20,
    },
    plus: {
      position: 'absolute',
      bottom: -5,
      right: -5,
      width: 30,
      height: 30,
      backgroundColor: '#25D366',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#011513',
    }
});