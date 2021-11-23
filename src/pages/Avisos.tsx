import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Ballon, Container, Text, Space, Ballon2, Menu } from '../styles/Avisos';
import { ButtonMenu, SosButton} from '../components'

export default function Avisos() {
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

            <Ballon>
                Clique aqui em casos de emergência para enviar um alerta para seus amigos
            </Ballon>

            <Text>
                O app foi desenvolvido para situações de risco, por isso suas funcionalidades buscam facilitar o seu acesso!!
            </Text>
            
            <Ballon>
                ATENÇÃO!! Esse aplicativo requer autorização para o uso de algumas funções do seu celular.
            </Ballon>

            <Space />

            <Ballon2>
                É indicado colocar o SaveMe como aplicativo de acesso direto, na sua tela de bloqueio.
            </Ballon2>

            <Menu>

                <ButtonMenu title="Avisos" onPress={handleAvisos} />

                <ButtonMenu title="Amigos" onPress={handleAmigos} />

                <ButtonMenu title="Conta" onPress={handleConta} />

            </Menu>

        </Container>
    );
}