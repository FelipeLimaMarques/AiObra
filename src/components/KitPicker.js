import React, { useState, useEffect } from 'react'
import { Picker, Text, StyleSheet, View } from 'react-native'

const KitPicker = (props) => {
    const [selectedValue, setSelectedValue] = useState("none");

    return (
        <View style={styles.pickerShape}>
            <Picker
                selectedValue={selectedValue}
                style={styles.pickerSize}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="--" value="none" />
                <Picker.Item label="60.007 - FERRAMENTAS/EQUIPAMENTOS" value="etapa" />
                <Picker.Item label="2º Pavimento" value="local" />
                <Picker.Item label="20/10/2020" value="data" />
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