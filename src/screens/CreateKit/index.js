import React, { useState, useEffect } from 'react'
import { View, ScrollView, TextInput, Text, StatusBar, Picker } from 'react-native'
import { Formik } from 'formik'

// Components
import Button from '../../components/Button'
import KitPicker from '../../components/KitPicker'

// Styles
import styles from './styles'

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
                        { etapa: '', local: '', data: '', material: [{ tipo: '', quantidade: '' }] },
                }}
                onSubmit={values => {
                    console.log(
                        `Submitting back to Requests:
                        Etapa: ${values.kit.etapa}
                        Local: ${values.kit.local}
                        Data: ${values.kit.data}
                        Material 1: ${values.kit.material[0]}`
                    )
                    navigation.goBack({ obj: values })
                }}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <View style={styles.scrollContainer}>
                        <ScrollView>
                            <View style={styles.formContainer}>
                                <Text style={styles.inputLabel}>Etapa:</Text>
                                <KitPicker width='100%'>
                                    <Picker.Item label="--" value="none" />
                                    <Picker.Item label="60.007 - FERRAMENTAS/EQUIPAMENTOS" value="etapa" />
                                </KitPicker>
                                {/*
                                <View style={[styles.inputShape, { width: 330 }]}>
                                    <TextInput
                                        style={styles.inputText}
                                        defaultValue=''
                                        onChangeText={handleChange(`kit.etapa`)}
                                        maxLength={8}
                                        keyboardType={'numeric'}
                                    />
                                </View>
                                */
                                }
                            </View>
                            <View style={styles.formContainer}>
                                <Text style={styles.inputLabel}>Local:</Text>
                                <KitPicker width='100%'>
                                    <Picker.Item label="--" value="none" />
                                    <Picker.Item label="2º Pavimento" value="local" />
                                </KitPicker>
                                {/*
                                <View style={[styles.inputShape, { width: 330 }]}>
                                    <TextInput
                                        style={styles.inputText}
                                        defaultValue=''
                                        onChangeText={handleChange(`kit.local`)}
                                        maxLength={22}
                                    />
                                </View>
                                */
                                }
                            </View>
                            <View style={styles.formContainer}>
                                <Text style={styles.inputLabel}>Data:</Text>
                                <KitPicker width='100%'>
                                    <Picker.Item label="--" value="none" />
                                    <Picker.Item label="20/10/2020" value="data" />
                                </KitPicker>
                                {/* 
                                <View style={[styles.inputShape, { width: 330 }]}>
                                    <TextInput
                                        style={styles.inputText}
                                        defaultValue=''
                                        onChangeText={handleChange(`kit.data`)}
                                        maxLength={40}
                                    />
                                </View>
                                */}
                            </View>
                            {
                                state.map((index) => {
                                    return <View key={index} style={styles.formContainer}>
                                        <View style={styles.row}>
                                            <View style={{ width: '55%'}}>
                                                <Text style={styles.inputLabel}>Material:</Text>
                                                <KitPicker>
                                                    <Picker.Item label="--" value="none" />
                                                    <Picker.Item label="Colher de pedreiro" value="material1" />
                                                    <Picker.Item label="Furadeira" value="material2" />
                                                    <Picker.Item label="Parafusadeira" value="material3" />
                                                    <Picker.Item label="Perfuratriz" value="material4" />
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
                                                <KitPicker>
                                                    <Picker.Item label="--" value="none" />
                                                    <Picker.Item label="u." value="unidades" />
                                                    <Picker.Item label="Kg" value="kilograma" />
                                                    <Picker.Item label="T" value="tonelada" />
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