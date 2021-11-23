import styled from 'styled-components/native';
import colors from './colors';


export const Container = styled.View`
    flex: 1;
    background-color: ${colors.cyan};
    align-items: center;
    justify-content: center;
`
export const Ballon = styled.Text`
    margin-right: 20px;
    align-self: flex-end;
    width: 250px;
    font-size: 18px;
    text-align: center;
    border-radius: 10px;
    border-color: ${colors.black};
    border-width: 1px;
    padding: 15px;
    background-color: ${colors.purple};
`
export const Text = styled.Text`
    align-items: center;
    font-size: 22px;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 15px;
    padding: 15px;
`
export const Space = styled.Text`
    padding-top: 1px;
    padding: 1px;
`
export const Menu = styled.View`
    flex: 1;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: row;
    padding: 25px;
`
export const Ballon2 = styled.Text`
    margin-left: 20px;
    align-self: flex-start;
    width: 250px;
    font-size: 18px;
    text-align: center;
    border-radius: 10px;
    border-color: ${colors.black};
    border-width: 1px;
    padding: 15px;
    background-color: ${colors.purple};
`