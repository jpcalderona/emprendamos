import React from 'react'
import{ createStackNavigator } from '@react-navigation/stack'
import Cuenta from '../screens/cuenta/Cuenta'
import Login from '../screens/cuenta/Login'

const Stack = createStackNavigator()

export default function CuentaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="cuenta"
                component={Cuenta}
                options={{ title: "Cuenta"}}
            />
            <Stack.Screen
                name="login"
                component={Login}
                options={{ title: "Iniciar Sesion"}}
            />
        </Stack.Navigator>
    )
}