import styled, {css} from "styled-components/native";
import { TouchableOpacity,Text } from "react-native";

export type ButtonStyleProps = 'PRIMARY' | 'SECONDARY'

type ButtonProps = {
    type: ButtonStyleProps
}

type MessageProps={
    type: ButtonStyleProps
}



export const Container = styled(TouchableOpacity)<ButtonProps>`

  
    align-items: center; 
    justify-content: center;
    padding: 16px 24px;
    flex-direction: row;  
    border-radius: 8px;
    ${({ theme, type }) => css `
    
        background-color: ${ type === 'PRIMARY'? theme.colors.gray_600: theme.colors.gray_50};
        
     

    
    `}

`



export const MessageButton = styled(Text)<MessageProps>`	

${({ theme, type }) => css `
    
    color: ${ type === 'PRIMARY'? theme.colors.white: theme.colors.gray_700};
    font-size: ${theme.Font_size.md}px;
    font-family: ${theme.font_family.bold};
    
 


`}

margin-left: 10px;
`