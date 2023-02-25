import { Button } from "@components/Button";
import { Percent } from "@components/Percent";
import { Container, Logo } from "./styles";

export function Header(){

    const value = 97
    return (
        <Container>
            <Logo source={require('../../assets/logo.png')}/>
            <Percent value={value}/>
            <Button message="Nova Refeição"/>
        </Container>
    )

}