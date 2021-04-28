import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import EmprendedoresStack from './EmprendedoresStack'
import PerfilStack from './PerfilStack'
import SearchStack from './SearchStack'
import VideollamadaStack from './VideollamadaStack'
import CuentaStack from './CuentaStack'
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator()

export default function Navigation() {
    const screenOptions = (route, color) => {
        let iconName
        switch (route.name) {
            case "cuenta":
                iconName = "account"                
                break;
            case "emprendedores":
                iconName = "account-group"                
                break;
            case "perfil":
                iconName = "clipboard-list"                
                break;
            case "search":
                iconName = "magnify"                
                break;
            case "videollamada":
                iconName = "video-box"                
                break;
        
            default:
                break;
        }
        return(
            <Icon
                type="material-community"
                name={iconName}
                size={40}
                color={color}
            />
        )
    }
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="cuenta"
                tabBarOptions={{
                    inactiveTintColor:"#2596be",
                    activeTintColor:"#1d6c85"
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color)
                })}
            >
                <Tab.Screen
                    name="cuenta"
                    component={CuentaStack}
                    options={{ title: "Cuenta"}}
                />
                <Tab.Screen
                    name="emprendedores"
                    component={EmprendedoresStack}
                    options={{ title: "Emprendedores"}}
                />
                 <Tab.Screen
                    name="perfil"
                    component={PerfilStack}
                    options={{ title: "Perfil"}}
                />
                 <Tab.Screen
                    name="search"
                    component={SearchStack}
                    options={{ title: "Search"}}
                />
                 <Tab.Screen
                    name="videollamada"
                    component={VideollamadaStack}
                    options={{ title: "Videollamada"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
