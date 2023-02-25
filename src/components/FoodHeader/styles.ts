import styled, {css} from "styled-components/native";


export const Container = styled.Text`

    ${({theme}) => css`
    
    
        font-family: ${theme.font_family.bold};
        font-size: ${theme.Font_size.lg}px;
        color: ${theme.colors.gray_700};
    
    `}

    margin-top: 32px;

`