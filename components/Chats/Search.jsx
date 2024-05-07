import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

export default function Search() {

  return (
    <View style={styles.searchCtn}>
        <Image style={{width: 30, height: 30, marginLeft: 7,}} source={require('../../assets/images/ai.png')}/>
        <TextInput style={styles.searchInp} 
        placeholder='Ask Meta Ai or Search' placeholderTextColor='#b4c7c5' />
    </View>
  );
}

const styles = StyleSheet.create({
    searchInp: {
        width: '100%',
        fontSize: 16,
        padding: 10,
        color: '#b4c7c5',
    },
    searchCtn: {
      flexDirection: 'row',
      alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#043f39',
        borderRadius: 40,
        padding: 5,
    },
});
