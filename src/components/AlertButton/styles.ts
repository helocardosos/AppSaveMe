import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const ButtonStyle = styled.TouchableHighlight`
    margin-top: 10px;
    border-radius: 10px;
    align-items: center;
    text-decoration: underline;
`
export const ButtonStyleText = styled.Text`
    color: ${colors.black};
    font-size: 20px;
    padding: 10px;
    text-decoration: underline;
    font-weight: bold;
`