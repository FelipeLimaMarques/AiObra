import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = (props) => {
    return (
        <TouchableOpacity style={[styles.buttonShape, {width: props.width}]}
            onPress={props.onPress}
        >
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonShape: {
        alignItems: 'center',
        padding: 10,
        marginRight: 6,
        height: 40,
        backgroundColor: '#e32b2b',
        borderColor: "#ededed",
        borderWidth: 1,
        borderRadius: 3
    },
    buttonText: {
        color: '#ededed'
    }
})