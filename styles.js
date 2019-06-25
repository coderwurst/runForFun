import { StyleSheet } from "react-native"

export default StyleSheet.create({
    Button: {
        backgroundColor: 'white',
        width: 256,
        height: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#f67944',
        alignItems: 'center',
        fontSize: 18,
        justifyContent: 'flex-start'
    },
    Icon: {
        width: 128,
        height: 128,
        resizeMode: 'contain'
    },
    Title: {
        color: 'white',
        fontSize: 24,
        marginTop: 32,
        marginBottom: 32
    },
    TextInput: {
        margin: 24,
        paddingLeft: 12,
        width: 256,
        height: 50
    }
})