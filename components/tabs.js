import { Text, Animated, View, StyleSheet,
    TouchableOpacity, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from './Chats/Chat';
import Updates from './Updates/Updates';
import Communities from './Communities/Communities';
import Calls from './Calls/Calls';
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      tabBarPosition="bottom"
      screenOptions={{
        tabBarLabelStyle: styles.title,
        tabBarStyle: styles.tab,
      }}
    >
      <Tab.Screen
        name="Chats"
        component={Chat}
        options={{ 
            tabBarLabel: 'Chats',
            tabBarIndicator: () => (
                <View style={{left:27, top: 8, height: 33, width: 60, transition: 'ease-in-out .5', backgroundColor: 'rgba(95, 252, 123,0.2)', borderRadius: 20}} />
            ),
        tabBarIcon: () => (
            <MaterialCommunityIcons name="message-text-outline" size={24} color="white" />
        ),
        }}
      />
      <Tab.Screen
        name="Updates"
        component={Updates}
        options={{ tabBarLabel: 'Updates' ,
        tabBarIndicator: () => (
            <View style={{left:140, top: 8, height: 33, width: 60, backgroundColor: 'rgba(95, 252, 123,0.2)', borderRadius: 20}} />
        ),
            tabBarIcon: () => (
                <MaterialIcons name="downloading" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name="Communities"
        component={Communities}
        options={{ tabBarLabel: 'Communities' ,
        tabBarIndicator: () => (
            <View style={{left:252, top: 8, height: 33, width: 60, backgroundColor: 'rgba(95, 252, 123,0.2)', borderRadius: 20}} />
        ),
            tabBarIcon: () => (
                <MaterialCommunityIcons name="account-group" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{ tabBarLabel: 'Call' ,
        tabBarIndicator: () => (
            <View style={{left:365, top: 8, height: 33, width: 60, backgroundColor: 'rgba(95, 252, 123,0.2)', borderRadius: 20}} />
        ),
            tabBarIcon: () => (
                <Ionicons name="call-outline" size={24} color="white" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    tab: {
    backgroundColor: '#011513',
    height: 70,
    },
    icon: {
        alignSelf: 'center',
        width: 30,
        height: 30,
    },
    title: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
    },
})