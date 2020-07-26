import React, { useState, useEffect } from 'react'
import { Picker, Text, StyleSheet, View } from 'react-native'

const FakePicker = (props) => {
    const [selectedValue, setSelectedValue] = useState("none");

    return (
        <View style={styles.pickerShape}>
            <Picker
                selectedValue={selectedValue}
                style={styles.pickerSize}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="--" value="none" />
                <Picker.Item label="Colher de pedreiro" value="material1" />
                <Picker.Item label="Furadeira" value="material2" />
                <Picker.Item label="Parafusadeira" value="material3" />
                <Picker.Item label="Perfuratriz" value="material4" />
            </Picker>
        </View>
    )
}

export default FakePicker

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