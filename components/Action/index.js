import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./styles";
import Images from "../../contain/images";
import { useSelector, useDispatch } from "react-redux"
import { add, remove } from '../../store/favorStore'

export default function Action({data}) {
    const listData = useSelector((state) => state.favor)
    const dispatch = useDispatch();

    const activeItem = listData.find(item => item.id === data.id)
    const activeStatus = activeItem?.status

    const onReaction = (status) => {
        if(activeItem && activeStatus === status) {
            dispatch(remove({id: data.id}))
        } else {
            dispatch(add({id: data.id, status}))
        }
    }

    

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => { onReaction('funny') }} style={[styles.item, styles.funny]}>
            <View>
                <Image source={Images.Funny} style={styles.icon} />
            </View>
            <Text style={styles.number}>{ activeStatus == 'funny' ? data.like + 1 : data.like}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { onReaction('sad') }} style={[styles.item, styles.sad]}>
            <View>
                <Image source={Images.Sad} style={styles.icon} />
            </View>
            <Text style={styles.number}>{activeStatus == 'sad' ? data.dislike + 1 : data.dislike}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { onReaction('happy') }} style={[styles.item, styles.happy]}>
            <View>
                <Image source={Images.Happy} style={styles.icon} />
            </View>
            <Text style={styles.number}>{ activeStatus == 'happy' ? data.love + 1 : data.love}</Text>
        </TouchableOpacity>
    </View>
    );
  }
