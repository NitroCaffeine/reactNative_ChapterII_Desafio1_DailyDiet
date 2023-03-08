import { Container,Divider,Hour,NameFood, NameFoodAndHourContainer, StatusIcon } from "./styles";
import { useTheme } from "styled-components/native";


interface FoodProps{
    name: string;
    hour: string;
    inDiet: boolean;
}

export function Food({name, hour, inDiet}: FoodProps){

    const {colors} = useTheme();

    // const status = inDiet ? colors.green_mid : colors.red_mid;

    const type = inDiet ? 'PRIMARY' : 'SECONDARY';

    return(
        <Container>
            <NameFoodAndHourContainer>
                <Hour>{hour}</Hour>
                <Divider/>
                <NameFood>{name}</NameFood>
            </NameFoodAndHourContainer>
            {/* <Circle style={{
                alignSelf: 'flex-end',
                backgroundColor: status,
                borderRadius: 100,
                
      
        
    }} color={status} /> */}
    <StatusIcon type={type}/>
        </Container>
    )
}