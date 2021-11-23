import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Avisos, Sos, Amigos, Alerta, Conta, Location } from '../pages';

const Stack = createStackNavigator()

export default function HomeRoute() {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name="Avisos" component={Avisos} />
            <Stack.Screen name="Sos" component={Sos} />
            <Stack.Screen name="Amigos" component={Amigos} />
            <Stack.Screen name="Alerta" component={Alerta} />
            <Stack.Screen name="Conta" component={Conta} />
            <Stack.Screen name="Location" component={Location} />
        </Stack.Navigator>
    )
}