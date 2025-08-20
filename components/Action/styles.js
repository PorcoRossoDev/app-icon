import { StyleSheet } from "react-native";
import COLORS from '../../contain/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 70,
    },
    item: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
        textAlign: 'center'
    },
    icon: {
        width: '74',
        height: '74'
    },
    funny: {
        backgroundColor: COLORS.funny
    },
    sad: {
        backgroundColor: COLORS.sad
    },
    happy: {
        backgroundColor: COLORS.happy
    },
    number: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingHorizontal: 20
    }
})

export default styles