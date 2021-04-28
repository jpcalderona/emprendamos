import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Loading from '../../components/Loading'
import { getCurrentUser } from '../../utils/actions'

import UsuarioInvitado from './UsuarioInvitado'
import UsuarioLogged from './UsuarioLogged'

export default function Cuenta() {
    const [login, setLogin] = useState(null)
    
    useEffect(() => {
       const user = getCurrentUser()
       user ? setLogin(true) : setLogin(false)
       //setLogin(isUserLogged())
    }, [])
    

    if (login == null){
        return <Loading isVisible={true} text="Cargando"/>
    }

    return login ? <UsuarioLogged/> : <UsuarioInvitado/>
}

const styles = StyleSheet.create({})
