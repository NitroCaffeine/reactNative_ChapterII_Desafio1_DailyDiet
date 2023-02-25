
import { Container } from "./styles"
import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native';
import { Header } from "@components/Header";
import { Food } from "@components/Food";
import { FoodHeader } from "@components/FoodHeader";

export function Home(){

    const dados = [
        {
          dateTime: '12.08.22',
          data: [{
            name: 'Arroz',
            hour: '12:00',
            inDiet: true
          },{
            name: 'Feijão',
            hour: '13:00',
            inDiet: false,
          },{
            name: 'Macarrão',
            hour: '14:00',
            inDiet: true
          },{
            name: 'Batata',
            hour: '15:00',
            inDiet: true
          }],
        },


        {
          dateTime: '13.08.22',
          data: [{
            name: 'Arroz1',
            hour: '12:00',
            inDiet: false
          },{
            name: 'Feijão3',
            hour: '13:00',
            inDiet: false
          },{
            name: 'Macarrão6',
            hour: '14:00',
            inDiet: true
          },{
            name: 'Batata6',
            hour: '15:00',
            inDiet: true
          }],
        },
      
      ];
      

    return(
        <Container>
            <Header/>
            {/* {dados.map((item, index) => ( */}
             <SectionList

              sections={dados}
             data={dados}
              keyExtractor={(item, index) => item + index.toString()}
              renderItem={({ item }) => <Food name={item.name} hour={item.hour} inDiet={item.inDiet}/>}
              showsVerticalScrollIndicator={false}
              renderSectionHeader={({ section: { dateTime } }) => (
                <FoodHeader dateTime={dateTime} />
              )}
             
             
             
             
             />
            {/* ))} */}
           
        </Container>
    )
}