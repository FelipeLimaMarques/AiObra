import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Components
import DrawerButton from '../components/DrawerButton'

// Screens
import ReportList from '../screens/ReportList'
import ReportInfo from '../screens/ReportInfo'

const Stack = createStackNavigator();

export default function ReportNav () {
    return (
            <Stack.Navigator
                initialRouteName="ReportList"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#e32b2b',
                    },
                    headerTintColor: 'white',
                    headerLeft: () => <DrawerButton />
                }}
            >
                <Stack.Screen
                    name='ReportList' component={ReportList}
                    options={{
                        title: 'Relatórios',
                    }}
                />
                <Stack.Screen
                    name='ReportInfo' component={ReportInfo}
                    options={{
                        title: '20/04/2020 ~ 10/05/2020',
                    }}
                />
            </Stack.Navigator>
    )
}