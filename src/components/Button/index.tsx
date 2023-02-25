import { Plus } from "phosphor-react-native";
import { TouchableOpacityProps, Text } from "react-native";
import { Container, ButtonStyleProps, MessageButton } from "./styles";
// import {Plus} from 'phosphor-react-native'

interface ButtonProps extends TouchableOpacityProps {
    type?: ButtonStyleProps;
    message: string;
}


export function Button({type= 'PRIMARY', message, ...rest}: ButtonProps){

    return(
        <Container type={type} {...rest}>
            <Plus size={25} color="#fff" />
            <MessageButton type={type}>{message}</MessageButton>
        </Container>
    )
}
