import { View, Text, Image } from "react-native"
import styles from "./styles";
import IMAGES from '../../contain/images'

export default function Item() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Chú chó đáng yêu</Text>
        <View style={styles.box}>
            <Image source={IMAGES.Dog1} style={styles.image} />
        </View>
    </View>
    );
  }
