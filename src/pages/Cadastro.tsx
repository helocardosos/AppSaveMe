import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { TextInput } from 'react-native-gesture-handler';
import { Container, FormRow, Label, Logo } from '../styles/Login';
import {Button, ButtonText} from '../components'

export default function Login() {
    const navigation = useNavigation();
    function handleLogin() {
        navigation.navigate("Login");
    }
    return (
        <Container>
            <Logo 
                source={
                    require("../../assets/img/SvLogo.png")
                }
            />
            <FormRow>
                <TextInput placeholder="NOME COMPLETO"></TextInput>
            </FormRow>

            <FormRow>
                <TextInput placeholder="E-MAIL"></TextInput>
            </FormRow>

            <FormRow>
                <TextInput placeholder="SENHA"></TextInput>
            </FormRow>

            <FormRow>
                <TextInput placeholder="CONFIRME A SENHA"></TextInput>
            </FormRow>

            <Button title="SALVAR" onPress={handleLogin} />

            <ButtonText title="VOLTAR" onPress={handleLogin} />
            
        </Container>
    );
}