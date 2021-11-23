import styled from 'styled-components/native';
import colors from './colors';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.purple};
    align-items: center;
    justify-content: center;
`
export const Font = styled.Text`

`
export const Atention = styled.Text`
    align-items: center;
    font-size: 28px;
    font-weight: bold;
    text-decoration: underline;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding: 15px;
`
export const Text = styled.Text`
    align-items: center;
    font-size: 20px;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 15px;
    padding: 15px;
`
export const User = styled.Image`
    align-self: center;
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
`
export const Space = styled.Text`
    padding-top: 1px;
    padding: 1px;
`
export const Ballon = styled.Text`
    align-self: center;
    width: 250px;
    font-size: 22px;
    text-align: center;
    border-color: ${colors.blue};
    border-width: 2px;
    padding: 15px;
    background-color: ${colors.purple};
`
