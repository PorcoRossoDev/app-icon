import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './App.components.style';
import { Item, Action } from './components'

export default function App() {
  return (
    <>
    <StatusBar />
    <SafeAreaView style={styles.container}>
      <View style={styles.background}></View>
      <View style={styles.mainWrapper}>
        <Item />
        <Action />
      </View>
    </SafeAreaView>
    </>
  );
}
