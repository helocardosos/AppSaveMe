import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const ButtonStyle = styled.TouchableHighlight`
    background-color: ${colors.almwhite};
    font-size: 5;
    border-radius: 10px;
    align-self: flex-start;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 10px;
    margin-top: 10px;
    width: 50px;
    height: 50px;
`
export const ButtonStyleText = styled.Text`
    color: ${colors.black};
    justify-content: center;
    align-items: center;
    border-color: ${colors.black};
    border-radius: 10px;
    border-width: 2px;
    /*arrumar margem inferior do botão*/
    padding: 11.35px;
`