import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginRoute from './rotas.routes';
import { Avisos, Sos, Amigos, Alerta, Conta } from '../pages';

export default function Routes() {
    return (
        <NavigationContainer>
            <LoginRoute />  
        </NavigationContainer>
    );
}
