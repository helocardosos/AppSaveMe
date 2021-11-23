import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Container, Text, User, Space, MinText, Menu } from '../styles/Conta';
import {ButtonMenu, SosButton} from '../components'

export default function Amigos() {
    const navigation = useNavigation();
    function handleSos() {
        navigation.navigate("Sos");
    }     
    function handleAvisos() {
        navigation.navigate("Avisos");
    }   
    function handleAmigos() {
        navigation.navigate("Amigos");
    }   
    function handleConta() {
        navigation.navigate("Conta");
    }

    return (
        <Container>
            <SosButton title="SOS" onPress={handleSos} />

            <Text>
                Minha Conta
            </Text>

            <User 
                source={
                    require("../../assets/img/User.png")
                }
            />

            <Text>
                Ana Humberto Mendonça
            </Text>

            <Space></Space>

            <MinText> Configurações de perfil </MinText>

            <MinText> Privacidade e permissões </MinText>

            <MinText> Configurações do alarme </MinText>

            <MinText> Amigos que recebem o alerta </MinText>

            <Menu>

                <ButtonMenu title="Avisos" onPress={handleAvisos} />

                <ButtonMenu title="Amigos" onPress={handleAmigos} />

                <ButtonMenu title="Conta" onPress={handleConta} />

            </Menu>

        </Container>
    );
}