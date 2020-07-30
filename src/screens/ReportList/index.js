import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, TouchableOpacity, StatusBar } from 'react-native'
import { Formik } from 'formik'

// Components

// Styles
import styles from './styles'

export default function ReportList({ navigation }) {
    const [state, setState] = useState([])

    useEffect(() => {
        console.log('Mounted ReportList')
        return () => console.log('Unmounted ReportList')
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#e32b2b'} barStyle={'light-content'} />
            <Formik
                initialValues={{
                    collection: [
                        { reports: [] },
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
                    //navigation.navigate('ReportInfo')
                }}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <View style={styles.scrollContainer}>
                        <ScrollView>
                            <View style={styles.formContainer}>
                                <TouchableOpacity
                                    style={styles.kitContainer}
                                    onPress={() => navigation.navigate('ReportInfo')}
                                >
                                    <Text style={styles.kitLabel}>20/04/2020 ~ 10/05/2020</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.formContainer}>
                                <TouchableOpacity
                                    style={styles.kitContainer}
                                    onPress={() => navigation.navigate('ReportInfo')}
                                >
                                    <Text style={styles.kitLabel}>24/04/2020 ~ 25/04/2020</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.formContainer}>
                                <TouchableOpacity
                                    style={styles.kitContainer}
                                    onPress={() => navigation.navigate('ReportInfo')}
                                >
                                    <Text style={styles.kitLabel}>12/06/2020 ~ 22/07/2020</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonRow}>
                            </View>
                        </ScrollView>
                        <View style={styles.sendView}>
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}