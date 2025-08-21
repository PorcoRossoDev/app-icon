import { StyleSheet } from "react-native";
import COLORS from '../../contain/colors'

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 70,
    },
    item: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        borderRadius: 20,
        textAlign: 'center'
    },
    icon: {
        width: '70',
        height: '70'
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