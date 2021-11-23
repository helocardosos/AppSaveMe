import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const ButtonStyle = styled.TouchableHighlight`
    background-color: ${colors.almwhite};
    font-size: 20px;
    border-radius: 10;
    margin-top: 10px;
`
export const ButtonStyleText = styled.Text`
    text-align: center;
    text-decoration-line: underline;
    color: ${colors.black};
    font-size: 13px;
    margin: 10px;
`