import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider, useDispatch, useSelector } from 'react-redux'
import styles from './App.components.style';
import { Item, Action } from './components'
import petData from './data/pets'
import store from './store'

export default function App() {
  const [pet, setPet] = useState(2)
  const data = petData[pet]
  return (
    <Provider store={store}>
      <SafeAreaProvider>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.background}></View>
        <View style={styles.mainWrapper}>
          <Item data={data} />
          <Action data={data} />
        </View>
      </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
