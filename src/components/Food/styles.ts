import { Circle } from "phosphor-react-native";
import { View } from "react-native";
import styled, {css, useTheme} from "styled-components/native";


type IconStyleProps = 'PRIMARY' | 'SECONDARY'

type IconProps ={
    type: IconStyleProps
    // statusfunction: (type: IconStyleProps) => void
}


export const Container = styled.TouchableOpacity`

    flex-direction: row;
    border: 1px solid #DDDEDF;
    border-radius: 6px;
    margin-top: 12px;
    padding: 14px 16px 14px 12px;
    align-items: center;

`

export const Hour = styled.Text`

    ${({theme}) => css`
    
        font-family: ${theme.font_family.bold};
        font-size: ${theme.Font_size.sm}px;
        color: ${theme.colors.gray_700};
    
    `}

`


export const NameFood = styled.Text`

        ${({theme}) => css`
            
            font-family: ${theme.font_family.regular};
            font-size: ${theme.Font_size.md}px;
            color: ${theme.colors.gray_600};

        `}
      

       

`

export const Divider = styled.View`

    width: 3px;
    height: 14px;
    background-color: ${({theme}) => theme.colors.gray_300};
    margin-left: 12px;
    margin-right: 12px;
`



export const StatusIconStyle = (type: IconStyleProps) => {
    const theme = useTheme()

    return {
           
    }
        
      
}

//não funciona!!!!!
export const StatusIcon = styled.View<IconProps>`

        ${({theme, type}) => css`
        
            width: 12px,
            height: 12px,
            border-radius: 12px,
            background-color: ${type === 'PRIMARY' ? theme.colors.green_light : theme.colors.red_light}
            

        
        `}
`
