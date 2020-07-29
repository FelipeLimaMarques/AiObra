import React, { useState, useEffect } from 'react'
import { View, StatusBar } from 'react-native'

// Components

// Styles
import styles from './styles'

export default function ReportInfo({ navigation }) {
    const [state, setState] = useState([0])

    useEffect(() => {
        console.log('Mounted CreateKit')
        return () => console.log('Unmounted CreateKit')
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#e32b2b'} barStyle={'light-content'} />
            <View style={styles.scrollContainer}>

            </View>
            <View style={styles.sendView}>
            </View>
        </View >
    )
}