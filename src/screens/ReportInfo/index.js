import React, { useState, useEffect } from 'react'
import { View, StatusBar, Text, ScrollView } from 'react-native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

// Components
import Button from '../../components/Button'

// Styles
import styles from './styles'

export default function ReportInfo({ navigation }) {
    const [state, setState] = useState([0])

    useEffect(() => {
        console.log('Mounted ReportInfo')
        return () => console.log('Unmounted ReportInfo')
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#e32b2b'} barStyle={'light-content'} />
            <View style={styles.scrollContainer}>
                <ScrollView>
                    <Table borderStyle={{borderWidth: 1}}>
                        <Row 
                            data={['Etapas', 'Materiais', 'Qtd.', 'Und']}
                            flexArr={[1, 3, 1, 1]}
                            style={styles.head}
                            textStyle={styles.text}
                        />
                        <TableWrapper style={styles.wrapper}>
                            <Col
                                data={['60.007', '70.019', '70.020']}
                                heightArr={[200, 200, 200]}
                                style={styles.title}
                                textStyle={styles.text}
                            />
                            <Rows 
                                data={[
                                    ['Perfuratriz', '4', 'Und'],
                                    ['Parafusadeira', '2', 'Und'],
                                    ['Colher de Pedreiro', '10', 'Und'],
                                    ['Furadeira', '6', 'Und'],
                                    ['xxxxxxx', '100', 'Kg'],
                                    ['xxxxxxx', '200', 'Kg'],
                                    ['xxxxxxx', '40', 'Litros'],
                                    ['xxxxxxx', '350', 'Kg'],
                                    ['xxxxxxx', '15', 'Lata'],
                                    ['xxxxxxx', '40', 'Litros'],
                                    ['xxxxxxx', '100', 'Und'],
                                    ['xxxxxxx', '47', 'Kg'],
                                ]}
                                flexArr={[3, 1, 1]}
                                style={styles.row}
                                textStyle={styles.text}    
                            />
                        </TableWrapper>
                    </Table>
                </ScrollView>
            </View>
            <View style={styles.sendView}>
                <Button
                    text='Voltar'
                    width={100}
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View >
    )
}