import { View, Text, Image } from "react-native"
import styles from "./styles";

export default function Item({data}) {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>{data.name}</Text>
        <View style={styles.box}>
            <Image source={data.image} style={styles.image} />
        </View>
    </View>
    );
  }
