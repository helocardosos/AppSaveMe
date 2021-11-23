import React from 'react';
import { ButtonProps } from 'react-native';
import {} from '../../interfaces/Button.interface';
import {ButtonStyle, ButtonStyleText} from './styles';

export default function SosButton({title, onPress, ...rest}:ButtonProps) {
    return (
        <ButtonStyle onPress={onPress}{...rest}>
            <ButtonStyleText>{title}</ButtonStyleText>
        </ButtonStyle>
    );
}