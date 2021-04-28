import React from 'react'
import{ createStackNavigator } from '@react-navigation/stack'
import Emprendedores from '../screens/emprendedores/Emprendedores'

const Stack = createStackNavigator()

export default function EmprendedoresStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="emprendedores"
                component={Emprendedores}
                options={{ title: "Emprendedores"}}
            />
        </Stack.Navigator>
    )
}
