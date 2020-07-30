import React, { useState, useEffect } from 'react'
import { View, ScrollView, TextInput, Text, TouchableOpacity, StatusBar } from 'react-native'
import { Formik } from 'formik'

// Components
import Button from '../../components/Button'

// Styles
import styles from './styles'

const check = (state, setState, { navigation }) => {
    if (state.length == 0) {
        return <View style={styles.noKitsContainer}>
            <Text style={styles.noKitsText}>Não há kits criados.</Text>
        </View>
    } else {
        return state.map((index) => {
            return <View key={index} style={styles.formContainer}>
                <TouchableOpacity
                    style={styles.kitContainer}
                    onPress={() => navigation.navigate('CreateKit')}
                >
                    <Text style={styles.kitLabel}>Kit {index + 1}</Text>
                </TouchableOpacity>
                <View style={styles.row}>
                    <Button
                        text='Editar Kit'
                        width={100}
                        onPress={() => {
                            console.log('yeet')
                        }}
                    />
                    <Button
                        text='Apagar Kit'
                        width={100}
                        onPress={() => {
                            const old = [...state]
                            old.splice(index, 1)
                            setState(state => [...old])
                        }}
                    />
                </View>
            </View>
        })

    }
}

export default function Requests({ navigation }) {
    const [state, setState] = useState([])

    useEffect(() => {
        console.log('Mounted Home')
        return () => console.log('Unmounted Home')
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#e32b2b'} barStyle={'light-content'} />
            <Formik
                initialValues={{
                    collection: [
                        { kit: [] },
                    ],
                }}
                onSubmit={values => {
                    console.log(
                        'Submitting'
                        /*
                        `Submitting to Confirmation:
                        Cod: ${values.collection[0].cod}
                        Name: ${values.collection[0].name}
                        Local: ${values.collection[0].local}`
                        */
                    )
                    //navigation.navigate('Confirmation', { arr: values })
                }}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <View style={styles.scrollContainer}>
                        <ScrollView>
                            {
                                check(state, setState, { navigation })
                            }
                            <View style={styles.buttonRow}>
                                <Button
                                    text='Criar Kit'
                                    width={100}
                                    onPress={() => {
                                        const old = [...state]
                                        setState(state => [...old, old.length])
                                    }}
                                />
                            </View>
                        </ScrollView>
                        <View style={styles.sendView}>
                        </View>
                    </View>
                )
                }
            </Formik>
        </View>
    )
}
