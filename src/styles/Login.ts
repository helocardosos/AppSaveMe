import styled from 'styled-components/native';
import colors from './colors';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.cyan};
    align-items: center;
    justify-content: center;
`
export const Logo = styled.Image`
    align-self: center;
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
`
export const FormRow = styled.View`
    flex-direction: row;
    margin-top: 20;
`
export const TextInput = styled.TextInput`
    border-radius: 10;
    border-style: solid;
    border-width: 10px;
    border-color: darkgray;
    background-color: ${colors.almwhite};
    font: 40;
    padding: 10;
    width: 60;
    text-align: center;
`
export const Label = styled.Text`
    font-size: 15px;
    color: ${colors.white};
    padding: 5px;
    text-decoration-line: underline;
`