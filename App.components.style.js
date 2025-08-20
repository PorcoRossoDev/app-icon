import { StyleSheet } from "react-native";
import COLORS from './contain/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainWrapper: {
        paddingHorizontal: 20,
        flex: 1,
        paddingBottom: 30
    },
    background: {
        backgroundColor: COLORS.backgroundColor,
        position: 'absolute',
        width: '100%',
        height: '50%',
    }
});

export default styles