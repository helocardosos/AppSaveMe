import styled from 'styled-components/native';
import { ButtonText } from '../components';
import colors from './colors';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.cyan};
    align-items: center;
    justify-content: center;
`
export const Ballon = styled.Text`
    align-self: center;
    width: 350px;
    font-size: 20px;
    text-align: center;
    border-radius: 10px;
    border-color: ${colors.black};
    border-width: 1px;
    margin-top: 100px;
    padding-top: 15px;
    padding: 20px;
    background-color: ${colors.violet};
`
export const Text = styled.Text`
    align-items: center;
    text-align: center;
    font-size: 22px;
    padding-top: 10px;
    padding: 20px;
    color: ${colors.black};
`
export const Menu = styled.View`
    flex: 1;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: row;
    padding: 25px;
`
export const Ret = styled.Image`
    align-items: center;
    justify-content: center;
    width: 260px;
    height: 90px;
`