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
        flexDirection: 'row',
        backgroundColor: '#e32b2b',
        padding: 10,
        marginBottom: 5,
        marginHorizontal: 4,
        height: 'auto',
        width: '97.5%',
        overflow: 'hidden',
        borderRadius: 3
    },
    noKitsContainer: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noKitsText: {
        color: '#7a7a7a',
        fontStyle: 'italic'
    },
    row: {
        flexDirection: 'row',
    },
    inputLabel: {
        color: 'white'
    },
    inputShape: {
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 3
    },
    inputText: {
        width: '100%',
        height: '100%'
    },
    kitLabel: {
        color: 'white',
        fontSize: 20,
    },
    kitContainer: {
        alignContent: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
    }
})