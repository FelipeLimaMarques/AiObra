import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

// Navigators
import MainNav from './MainNav'

const Drawer = createDrawerNavigator();

export default function DrawerNav () {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Requests"
                drawerStyle={{
                    backgroundColor: "#b82525",
                    width: '40%',
                    height: '100%',
                }}
                drawerContentOptions={{
                    activeTintColor: '#b82525',
                    inactiveTintColor: 'white',
                    activeBackgroundColor: 'white'
                }}
            >
                <Drawer.Screen
                    name="Requests"
                    component={MainNav}
                    options={{
                        title: 'Pedidos'
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}