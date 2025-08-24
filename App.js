import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider, useDispatch, useSelector } from 'react-redux'
import styles from './App.components.style';
import { Item, Action } from './components'
import petData from './data/pets'
import store from './store'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default function App() {
  const [pet, setPet] = useState(2)
  const data = petData[pet]
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };

  const nextPet = () => {
    if( pet < petData.length-1 ) {
      setPet(pet+1)
    } else {
      setPet(0)
    }
  }

  const prevPet = () => {
    if( pet > 0 ) {
      setPet(pet-1)
    } else {
      setPet(petData.length-1)
    }
  }

  const onSwipe = (gestureName, gestureState) => {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    switch(gestureName){
      case SWIPE_UP:
      case SWIPE_RIGHT:
        nextPet()
        break;
      case SWIPE_DOWN:
      case SWIPE_LEFT:
        prevPet()
        break;
      default:
        break
    }
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.background}></View>
        <View style={styles.mainWrapper}>
          <GestureRecognizer
          style={styles.wrapper}
          onSwipe={(direction, state) => onSwipe(direction, state)}
          >
            <Item data={data} />
          </GestureRecognizer>
          <Action data={data} />
        </View>
      </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
