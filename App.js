import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import Chat from './components/chat';
import Updates from './components/updates';
import MyTabs from './components/tabs';

import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    // <SafeAreaView>
    //   {/* <Chat /> */}
    //   <Updates />
    // </SafeAreaView>
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
