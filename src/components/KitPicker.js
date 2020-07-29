import React, { useState, useEffect } from 'react'
import { Picker, Text, StyleSheet, View } from 'react-native'
import { Formik } from 'formik'

const KitPicker = (props) => {
    const [selectedValue, setSelectedValue] = useState("none");

    return (
        <View style={[styles.pickerShape, { width: props.width }]}>
            <Picker
                mode="dropdown"
                selectedValue={selectedValue}
                style={styles.pickerSize}
                onValueChange={props.onValueChange}
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
        paddingHorizontal: 1,
        paddingVertical: 5,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 3,
    },
    pickerSize: {
        width: "100%",
        height: "100%",
    },
    pickerLabel: {
        
    }
})