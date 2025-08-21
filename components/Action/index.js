import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./styles";
import Images from "../../contain/images";
import { useSelector, useDispatch } from "react-redux"
import { add, remove } from '../../store/favorStore'

export default function Action({data}) {
    const listData = useSelector((state) => state.favor)
    const dispatch = useDispatch();

    const onReaction = (status) => {
        console.log(listData)
        dispatch(add({id: data.id, status}))
    }

    

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => { onReaction('funny') }} style={[styles.item, styles.funny]}>
            <View>
                <Image source={Images.Funny} style={styles.icon} />
            </View>
            <Text style={styles.number}>100</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { onReaction('sad') }} style={[styles.item, styles.sad]}>
            <View>
                <Image source={Images.Sad} style={styles.icon} />
            </View>
            <Text style={styles.number}>100</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { onReaction('happy') }} style={[styles.item, styles.happy]}>
            <View>
                <Image source={Images.Happy} style={styles.icon} />
            </View>
            <Text style={styles.number}>100</Text>
        </TouchableOpacity>
    </View>
    );
  }
