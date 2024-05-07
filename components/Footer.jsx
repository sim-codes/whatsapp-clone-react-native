import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Menu } from '../lib/data';

const Item = ({title, icon}) => (
    <View style={styles.iconCtn}>
        <Image style={styles.icon} source={icon} />
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function Footer(){

  return (
    <View style={styles.footer}>
        {
            Menu.map((item) => <Item icon={item.icon} title={item.title} key={item.id} />)
        }
    </View>
  );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#011513',
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        position: 'absolute',
        bottom: 0,
    },
    iconCtn: {
        marginRight: 30,
        marginLeft: 20,
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
    },
    title: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15,
    }
});
