import React, { useState, useEffect } from 'react'
import { View, ScrollView, TextInput, Text, StatusBar, Picker, AsyncStorage } from 'react-native'
import { Formik } from 'formik'

// Components
import Button from '../../components/Button'
import KitPicker from '../../components/KitPicker'

// Styles
import styles from './styles'

// AsyncStorage functions
saveKit = async (key, item) => {
    try {
      await AsyncStorage.setItem(
        key,
        item
      );
    } catch (error) {
      // Error saving data
      console.log('Error on AsyncStorage.setItem')
    }
}

getKit = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
      console.log('Error on AsyncStorage.getItem')
    }
}

export default function CreateKit({ navigation }) {
    const [state, setState] = useState([0])

    useEffect(() => {
        console.log('Mounted CreateKit')
        return () => console.log('Unmounted CreateKit')
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#e32b2b'} barStyle={'light-content'} />
            <Formik
                initialValues={{
                    kit:
                        {
                            etapa: '', local: '', data: '', dataLimite: '', material: [{
                                    tipo: '', quantidade: '', unidade: ''
                                }]
                        },
                }}
                onSubmit={values => {
                    console.log(
                        `Submitting back to Requests:
                        Etapa: ${values.kit.etapa}
                        Local: ${values.kit.local}
                        Data: ${values.kit.data} ~ ${values.kit.dataLimite}
                        Material 1:
                        Tipo: ${values.kit.material[0].tipo}
                        Qtd: ${values.kit.material[0].quantidade}
                        Unidade: ${values.kit.material[0].unidade}`
                    )
                    navigation.goBack()
                }}
            >
                {({ values, handleChange, handleSubmit, setFieldValue }) => (
                    <View style={styles.scrollContainer}>
                        <ScrollView>
                            <View style={styles.formContainer}>
                                <Text style={styles.inputLabel}>Etapa:</Text>
                                <KitPicker width='100%'
                                    field='kit.etapa'
                                    sfv={setFieldValue}
                                >
                                    <Picker.Item label="--" value="none" />
                                    <Picker.Item label="60.007 - FERRAMENTAS/EQUIPAMENTOS" value="60.007" />
                                </KitPicker>
                            </View>
                            <View style={styles.formContainer}>
                                <Text style={styles.inputLabel}>Local:</Text>
                                <KitPicker width='100%' 
                                    field='kit.local'
                                    sfv={setFieldValue}
                                >
                                    <Picker.Item label="--" value="none" />
                                    <Picker.Item label="2º Pavimento" value="pavimento2" />
                                </KitPicker>
                            </View>
                            <View style={styles.formContainer}>
                                <Text style={styles.inputLabel}>Data:</Text>
                                <KitPicker width='100%' 
                                    field='kit.data'
                                    sfv={setFieldValue}
                                >
                                    <Picker.Item label="--" value="none" />
                                    <Picker.Item label="20/10/2020" value="20/10/2020" />
                                </KitPicker>
                            </View>
                            <View style={styles.formContainer}>
                                <Text style={styles.inputLabel}>Data Limite:</Text>
                                <KitPicker width='100%' 
                                    field='kit.dataLimite'
                                    sfv={setFieldValue}
                                >
                                    <Picker.Item label="--" value="none" />
                                    <Picker.Item label="24/10/2020" value="24/10/2020" />
                                    <Picker.Item label="30/10/2020" value="30/10/2020" />
                                </KitPicker>
                            </View>
                            {
                                state.map((index) => {
                                    return <View key={index} style={styles.formContainer}>
                                        <View style={styles.row}>
                                            <View style={{ width: '55%'}}>
                                                <Text style={styles.inputLabel}>Material:</Text>
                                                <KitPicker 
                                                    field={`kit.material[${index}].tipo`}
                                                    sfv={setFieldValue}
                                                >
                                                    <Picker.Item label="--" value="none" />
                                                    <Picker.Item label="Colher de pedreiro" value="colherPedreiro" />
                                                    <Picker.Item label="Furadeira" value="furadeira" />
                                                    <Picker.Item label="Parafusadeira" value="parafusadeira" />
                                                    <Picker.Item label="Perfuratriz" value="perfuratriz" />
                                                </KitPicker>
                                            </View>
                                            <View style={{ width: '18%'}}>
                                                <Text style={styles.inputLabel}>Qtd.:</Text>
                                                <View style={[styles.inputShape, { width: '83%'}]}>
                                                    <TextInput
                                                        style={styles.inputText}
                                                        defaultValue=''
                                                        onChangeText={handleChange(`kit.material[${index}].quantidade`)}
                                                        maxLength={3}
                                                        keyboardType={'numeric'}
                                                    />
                                                </View>
                                            </View>
                                            <View style={{ width: '27%'}}>
                                                <Text style={styles.inputLabel}>Unidade:</Text>
                                                <KitPicker 
                                                    field={`kit.material[${index}].unidade`}
                                                    sfv={setFieldValue}
                                                >
                                                    <Picker.Item label="--" value="none" />
                                                    <Picker.Item label="Und" value="unidades" />
                                                    <Picker.Item label="Kg" value="kilogramas" />
                                                    <Picker.Item label="T" value="toneladas" />
                                                </KitPicker>
                                            </View>
                                        </View>
                                    </View>
                                })
                            }
                            <View style={styles.buttonRow}>
                                <Button
                                    text='+'
                                    width={60}
                                    onPress={() => {
                                        const old = [...state]
                                        setState(state => [...old, old.length])
                                    }}
                                />
                                <Button
                                    text='-'
                                    width={60}
                                    onPress={() => {
                                        const old = [...state]
                                        old.pop()
                                        values.kit.material.pop()
                                        setState(state => [...old])
                                    }}
                                />
                            </View>
                        </ScrollView>
                        <View style={styles.sendView}>
                            <Button
                                text='Enviar'
                                width={100}
                                onPress={handleSubmit}
                            />
                            <Button
                                text='Cancelar'
                                width={100}
                                onPress={() => navigation.goBack()}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </View >
    )
}