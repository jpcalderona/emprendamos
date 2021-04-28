import React from 'react'
import{ createStackNavigator } from '@react-navigation/stack'
import Emprendedores from '../screens/emprendedores/Emprendedores'
import Videollamada from '../screens/Videollamada'

const Stack = createStackNavigator()

export default function VideollamadaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="videollamada"
                component={Videollamada}
                options={{ title: "Videollamada"}}
            />
        </Stack.Navigator>
    )
}