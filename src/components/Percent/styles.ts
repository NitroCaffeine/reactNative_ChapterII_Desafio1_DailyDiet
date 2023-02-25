import { TouchableOpacity} from "react-native";
import styled, {css} from "styled-components/native";
import {ArrowUpRight} from 'phosphor-react-native'

export type ContainerStyleProps = 'PRIMARY' | 'SECONDARY' 

type ContainerProps = {
    type: ContainerStyleProps
}

type IconProps ={
    type: ContainerStyleProps
}

export const Container = styled(TouchableOpacity)<ContainerProps>`

    width: 100%;
    align-items: center;
    justify-content: center;
    background-color:  ${({ theme, type }) => type === 'PRIMARY'? theme.colors.green_light: theme.colors.red_light};
    padding: 20px 16px;
    margin-top: 32px;
    border-radius: 8px;
    height: 120px;
    
`

export const Title = styled.Text`

    ${({ theme }) => css `
    
        font-family: ${theme.font_family.bold};
        font-size: ${theme.Font_size.xxxl}px;
        color: ${theme.colors.gray_700};
        
    `};

`

export const Subtitle = styled.Text`

    ${({ theme }) => css `
        
        font-family: ${theme.font_family.regular};
        font-size: ${theme.Font_size.md}px;
        color: ${theme.colors.gray_600};
    `};

`

export const TextAboveButton = styled.Text`

    ${({ theme }) => css `
    font-family: ${theme.font_family.regular};
    font-size: ${theme.Font_size.md}px;
    color: ${theme.colors.gray_700};
    `}

    margin-top: 32px;
    margin-bottom: 16px;
`

export const IconDynamic = styled(ArrowUpRight).attrs<IconProps>(({theme, type})=>({

    color: type === 'PRIMARY'? theme.colors.green_dark: theme.colors.red_dark,
    size: 24
    
}))`
   /* justify-self: end; */
   align-self: flex-end;


`