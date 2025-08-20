import { StyleSheet } from "react-native";
import COLORS from '../../contain/colors'

const styles = StyleSheet.create({
    container: {
        flex: 4,
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 10
    },
    box: {
        width: '100%',
        height: '100%',
        shadowColor: COLORS.shadowBox,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        borderRadius: 20
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        marginTop: 10,
    }
})

export default styles