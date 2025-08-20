import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./styles";
import Images from "../../contain/images";

export default function Action() {
    return (
    <View style={styles.container}>
        <TouchableOpacity style={[styles.item, styles.funny]}>
            <View>
                <Image source={Images.Funny} style={styles.icon} />
            </View>
            <Text style={styles.number}>100</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item, styles.sad]}>
            <View>
                <Image source={Images.Sad} style={styles.icon} />
            </View>
            <Text style={styles.number}>100</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item, styles.happy]}>
            <View>
                <Image source={Images.Happy} style={styles.icon} />
            </View>
            <Text style={styles.number}>100</Text>
        </TouchableOpacity>
    </View>
    );
  }
