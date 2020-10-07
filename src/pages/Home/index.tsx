import React from 'react';

import Yasmin from '../../../assets/user/Yasmin.jpg';
import Mag_messi from '../../../assets/user/Mag_messi.jpg';

import {useNavigation } from '@react-navigation/native';
import { Container, HeaderText,ButtonHome, ButtonText, ImagemYasmin, MagMEssi } from './styles';

import{ Image, ScrollView} from 'react-native';


const Home : React.FC = () =>{

    const navigation = useNavigation();
    return(

        <ScrollView >
        
    <Container>
       <HeaderText>Bem vindo ao meu App !</HeaderText> 

       <ImagemYasmin>
       
       <Image style={{height:130, width:130, marginLeft:10, }} source={Yasmin}/>

       </ImagemYasmin>

       <MagMEssi>
           <Image style={{height:130, width:130,}} source={Mag_messi}/>
       </MagMEssi>

       
       <ButtonHome onPress={()=> navigation.navigate('Logout')}>
           <ButtonText>Entrar</ButtonText>
           
           </ButtonHome>

           
    </Container>
    </ScrollView>
    );
}
export default Home;