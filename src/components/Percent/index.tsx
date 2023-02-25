import { Container, ContainerStyleProps, Title, Subtitle, TextAboveButton, IconDynamic } from "./styles";
import {ArrowUpRight} from 'phosphor-react-native'
import { Text, TouchableOpacityProps} from "react-native";
import { useTheme } from "styled-components/native";

interface PercentProps extends TouchableOpacityProps {
    value: number;
    type?: ContainerStyleProps
}

export function Percent({value, type= 'PRIMARY', ...rest}: PercentProps){

    const { colors} = useTheme()
    const color = type === 'PRIMARY' ? colors.green_dark : colors.green_light;

    return(
        <>
        <Container type={type} {...rest}>
            <ArrowUpRight color={color} size={24} style={{alignSelf: 'flex-end'}} />
            <Title>{value}%</Title>
            <Subtitle>das refeições dentro da lista</Subtitle>
           
        </Container>
       
       <TextAboveButton>Refeições</TextAboveButton>
        </>
    )
}