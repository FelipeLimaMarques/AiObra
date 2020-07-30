import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ededed',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    scrollContainer: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
        paddingTop: 5,
        paddingHorizontal: 5,
    },
    sendView: {
        backgroundColor: '#e32b2b',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
        height: 50,
        width: '100%',
        marginTop: 5,
        padding: 5,
        flexDirection: 'row'
    },
    head: {  height: 40,  backgroundColor: '#fff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#fff' },
    row: {  height: 50, backgroundColor: '#fff'  },
    text: { textAlign: 'center' }
})