import { Container } from "./styles";

interface FoodHeaderProps{
    dateTime: string;
}

export function FoodHeader({dateTime}: FoodHeaderProps){
    return(
        <Container>
            {dateTime}
        </Container>
    )
}