import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { ButtonMenu, AlertButton } from '../components';
import { Container, Ballon, Menu, Text, Ret} from '../styles/Sos';
import { Space } from '../styles/Avisos';

export default function Sos() {

    const navigation = useNavigation();

    function handleAlerta() {
        navigation.navigate("Alerta");
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
            
            <Ballon>
            Deseja ativar o sistema de alerta?
            Enviaremos um alerta com sua localização para todos os seus
             contatos no aplicativo.

            <AlertButton title="ATIVAR MEU ALERTA" onPress={handleAlerta} />

            </Ballon>

            <Text>
                Amigos que recebem seu alerta:
            </Text>

            <Ret
                source={
                    require("../../assets/img/AddAmigos.png")
                }
            />

            <Text>
                Não se preocupe, a equipe do SaveMe também recebe seus alertas
            </Text>

            <Menu>

                <ButtonMenu title="Avisos" onPress={handleAvisos} />

                <ButtonMenu title="Amigos" onPress={handleAmigos} />

                <ButtonMenu title="Conta" onPress={handleConta} />

            </Menu>

        </Container>
    );
}