import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function UsuarioInvitado() {
    const navigation = useNavigation()

    return (
        <ScrollView
            centerContent={true}
            style={styles.viewBody}
        >
            <Image
                source={require("../../assets/emprendamos-logo.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil en Emprendamos</Text>
            <Text style={styles.description}>¿Cómo describirías mejor tu restaurante?</Text>
            <Button
                buttonStyle={styles.button}
                title="Ver tu perfil"
                onPress={() => navigation.navigate("login")}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        marginHorizontal: 30
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 10,
        alignContent: "center"
    },
    description: {
        textAlign: "justify",
        marginBottom: 20,
        //color: "#442484"
    },
    button: {
        //color: "#fff"
    }
})
