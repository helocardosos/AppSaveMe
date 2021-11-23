import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Ballon, Container, Text, Space, MinText,
     Menu, Ret, Pesq } from '../styles/Amigos';
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
                Meus Amigos
            </Text>

            <Pesq
                source={
                    require("../../assets/img/BdPesq.png")
                }
            />

            <Space />

            <Ballon>
                Encontre seus amigos  próximos para ver suas localizações
                e receber seus alarmes..
            </Ballon>

            <Space></Space>

            <MinText>
                Nós somos sua primeira amizade!
                Podemos receber seus alarmes e ver sua localização
                se você ativar o alarme de emergencia.
            </MinText>

            <Space />

            <Ret
                source={
                    require("../../assets/img/AddAmigos.png")
                }
            />

            <Menu>

                <ButtonMenu title="Avisos" onPress={handleAvisos} />

                <ButtonMenu title="Amigos" onPress={handleAmigos} />

                <ButtonMenu title="Conta" onPress={handleConta} />

            </Menu>

        </Container>
    );
}