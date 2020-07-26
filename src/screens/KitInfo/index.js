import React, { useState, useEffect } from 'react'
import { View, ScrollView, TextInput, Text, StatusBar } from 'react-native'
import { Formik } from 'formik'

// Components
import Button from '../../components/Button'

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
                        { etapa: '', local: '', data: '', material: [''] },
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
                                <KitPicker />
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
                                <KitPicker />
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
                                <KitPicker />
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
                                                <Text style={styles.inputLabel}>Material:</Text>
                                                <FakePicker />
                                                {/*
                                                <View style={[styles.inputShape, { width: 330 }]}>
                                                    <TextInput
                                                        style={styles.inputText}
                                                        defaultValue=''
                                                        onChangeText={handleChange(`kit.material[${index}]`)}
                                                        maxLength={40}
                                                    />
                                                </View>
                                                */}
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