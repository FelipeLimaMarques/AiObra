import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Components
import DrawerButton from '../components/DrawerButton'

// Screens
import Requests from '../screens/Requests'
import CreateKit from '../screens/CreateKit'

const Stack = createStackNavigator();

export default function MainNav () {
    return (
            <Stack.Navigator
                initialRouteName="Requests"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#e32b2b',
                    },
                    headerTintColor: 'white',
                    headerLeft: () => <DrawerButton />
                }}
            >
                <Stack.Screen
                    name='Requests' component={Requests}
                    options={{
                        title: 'Pedidos',
                    }}
                />
                <Stack.Screen
                    name='CreateKit' component={CreateKit}
                    options={{
                        title: 'Criação de Kit',
                    }}
                />
            </Stack.Navigator>
    )
}