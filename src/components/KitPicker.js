import React, { useState, useEffect } from 'react'
import { Picker, Text, StyleSheet, View } from 'react-native'

const KitPicker = (props) => {
    const [selectedValue, setSelectedValue] = useState("none");

    return (
        <View style={styles.pickerShape}>
            <Picker
                mode="dropdown"
                selectedValue={selectedValue}
                style={styles.pickerSize}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {props.children}
            </Picker>
        </View>
    )
}

export default KitPicker

const styles = StyleSheet.create({
    pickerShape: {
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 3
    },
    pickerSize: {
        width: "100%",
        height: "100%"
    },
    pickerLabel: {
        
    }
})