import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { TextInput } from 'react-native-gesture-handler';
import { Container, FormRow, Label, Logo } from '../styles/Login';
import {Button, ButtonText} from '../components'

export default function Login() {

    const navigation = useNavigation();

    function handleCadastro() {
        navigation.navigate("Cadastro");
    }
    function handleAvisos() {
        navigation.navigate("Avisos");
    }

    return (
        <Container>
            <Logo 
                source={
                    require("../../assets/img/SvLogo.png")
                }
            />
            
            <FormRow>
                <TextInput placeholder="E-MAIL"></TextInput>
            </FormRow>

            <FormRow>
                <TextInput placeholder="SENHA"></TextInput>
            </FormRow>

            <FormRow>
                <Label> ESQUECI A SENHA </Label>
            </FormRow>

            <Button title="ENTRAR" onPress={handleAvisos} />

            <ButtonText title="Cadastre-se aqui" onPress={handleCadastro} />
            
        </Container>
    );
}