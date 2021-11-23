import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Container, Text, User, Space, Atention, Ballon } from '../styles/Alerta';
import { AlertButton, Button, SosButton } from '../components'

export default function Alerta() {

    const navigation = useNavigation();
    
    function handleAmigos() {
        navigation.navigate("Amigos");
    }   
    function handleLocation() {
        navigation.navigate("Location")
    }

    return (
        <Container>
            
            <Atention> ATENÇÃO !! </Atention>

            <Text>
                O SEU ALERTA FOI ATIVADO
            </Text>

            <User 
                source={
                    require("../../assets/img/User.png")
                }
            />

            <Text> Sua localização foi enviada para seus amigos! </Text>

            <AlertButton title="SEU LOCAL" onPress={handleLocation} />

            <Space />

            <Ballon>
                Para maior auxílio, contate as autoridades competentes!
            </Ballon>

            <Text> Clique aqui para acessar sua lista de amigos: </Text>

            <Button title="Amigos" onPress={handleAmigos}/>

        </Container>
    );
}