import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ededed',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    buttonRow: {
        flexDirection: 'row',
        marginHorizontal: 4
    },
    scrollContainer: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
        paddingTop: 10,
    },
    sendView: {
        backgroundColor: '#e32b2b',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
        height: 50,
        width: '100%',
        marginTop: 5,
        padding: 5,
        flexDirection: 'row-reverse'
    },
    formContainer: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: '#e32b2b',
        padding: 10,
        marginBottom: 5,
        marginHorizontal: 4,
        height: 'auto',
        width: '97.5%',
        overflow: 'hidden',
        borderRadius: 3
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between'
    },
    inputLabel: {
        color: 'white'
    },
    inputShape: {
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        height: 30,
        marginLeft: 10,
        backgroundColor: 'white',
        borderRadius: 3
    },
    inputText: {
        width: '100%',
        height: '100%'
    },
})